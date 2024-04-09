const ds = require('../database/models');

class Services{
    constructor(nomeModel){
        this.model = nomeModel;
    }
    async getRegistros(where = {}){
        return ds[this.model].findAll({ where: { ...where }});
    }
    async getRegistrosEscopo(escopo){
        return ds[this.model].scope(escopo).findAll();
    }
    async getRegistroID(id){
        const idDados = parseInt(id);
        return ds[this.model].findByPk(idDados);
    }
    async getUmRegistro(where){
        return ds[this.model].findOne( { where: { ...where } } );
    }
    async getCountRegistros(options){
        return ds[this.model].findAndCountAll({ ...options });
    }
    async postRegistros(dadosRegistro){
        return ds[this.model].create(dadosRegistro);
    }
    async deleteRegistro(id){
        const idDados = parseInt(id);
        const dadoDeletado = ds[this.model].destroy({ where: { id: idDados }});
        if(dadoDeletado[0] === 0){
            return false;
        }
        return true;
    }
    async putRegistro(dadosRegistro, where, transacao = {}){
        const listaRegistrosAtualizados = await ds[this.model]
            .update( dadosRegistro,
                { 
                    where: {...where},
                    transacao
                });
        if(listaRegistrosAtualizados[0] === 0){
            return false;
        }
        return true;
    }
}

module.exports = Services;