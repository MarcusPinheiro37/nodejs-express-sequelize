const ds = require('../database/models');
const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor(){
        super('Pessoa');
        this.matriculasServices = new Services('Matricula');
    }

    async pegaMatriculasAtivasEstudante(id){
        const estudante = await super.getRegistroID(id);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }

    async pegaMatriculasEstudante(id){
        const estudante = await super.getRegistroID(id);
        const listaMatriculas = await estudante.getTodasMatriculas();
        return listaMatriculas;
    }

    async pegaPessoasEscopoTodos(){
        const listaPessoas = await super.getRegistrosEscopo('todosRegistros');
        return listaPessoas;
    }

    async cancelaPessoasEMatriculas(estudanteId){
        return ds.sequelize.transaction(async (transacao) => {
            await super.putRegistro({ativo: false}, { id: estudanteId}, transacao);
            await this.matriculasServices.putRegistro({status: 'cancelado'}, { estudante_id: estudanteId}, transacao);
        });

    }
}

module.exports = PessoaServices;