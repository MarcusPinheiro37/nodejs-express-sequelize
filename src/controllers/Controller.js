const NaoEncontrado = require('../Erros/Erro404.js');
const convertteIds = require('../utils/conversorStringHelper.js');
class Controller{
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }
    async getDados(req,res,next){
        try {
            const listaDados = await this.entidadeService.getRegistros();
            res.status(200).json(listaDados); // se der problema é pq tirei o return
        } catch (error) {
            next(error);
        }
    }
    async getDadosID(req,res,next){
        try {
            const id = req.params.id;
            const listaDadosID = await this.entidadeService.getRegistroID(id);
            if(listaDadosID !== null){
                return res.status(200).json(listaDadosID);
            } else{
                next(new NaoEncontrado('ID da pessoa não encontrado'));
            }
        } catch (error) {
            next();
        }
    }

    async getUmDado(req,res,next){
        const { ...params } = req.params;
        const where = convertteIds(params);
        try {
            const listaDados = await this.entidadeService.getUmRegistro(where);
            if(listaDados !== null){
                return res.status(200).json(listaDados);
            } else{
                next(new NaoEncontrado('ID da pessoa não encontrado'));
            }
        } catch (error) {
            next();
        }
    }

    async postDados(req, res, next) {
        const dados = req.body;
        try {
            if (Object.keys(dados).length !== 0) {
                const dadosInseridos = await this.entidadeService.postRegistros(dados);
                res.status(201).json({ message: 'Dados inseridos com sucesso', dadosInseridos });
            } else {
                res.status(400).json({ message: 'Nenhum dado para inserir' });
            }
        } catch (error) {
            next(error);
        }
    }

    async putDados(req, res, next) {
        const id  = req.params.id;
        const dadosAtualizados = req.body;
        
        try {
            const foiAtualizado = await this.entidadeService.putRegistro(dadosAtualizados, id);
            if(!foiAtualizado){
                res.status(400).json({message: 'Registro não foi atualizado.'});
            } else{
                const foiAtualizadoID = Object.keys(dadosAtualizados).includes('id');
                const registroAtualizado = await this.entidadeService.getRegistroID(foiAtualizadoID ? dadosAtualizados.id : id);
                res.status(200).json({message: 'Registro atualizado', registroAtualizado});
            }
        } catch (error) {
            next(error);
        }
    }

    async deleteDados(req, res, next){
        const id = req.params.id;
        const registroDeletado = await this.entidadeService.getRegistroID(id);

        try {
            const foiDeletado = await this.entidadeService.deleteRegistro(id);
            if(!foiDeletado){
                res.status(400).json({message: 'Registro não encontrado.'});
            } else{
                res.status(200).json({message: 'Dado deletado com sucesso.', registroDeletado});
            }
        } catch (error) {
            next(error);
        }
    }
}
module.exports = Controller;