const ds = require('../models');

class Services{
    constructor(nomeModel){
        this.model = nomeModel;
    }
    async getRegistros(){
        return ds[this.model].findAll();
    }
    async getRegistroID(id){
        const idDados = parseInt(id);
        return ds[this.model].findByPk(idDados);
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
    async putRegistro(dadosRegistro, id){
        const idDados = parseInt(id);
        const listaRegistrosAtualizados = await ds[this.model].update( dadosRegistro, { where: { id: idDados }});
        if(listaRegistrosAtualizados[0] === 0){
            return false;
        }
        return true;
    }
}

module.exports = Services;