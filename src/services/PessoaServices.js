const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor(){
        super('Pessoa');
    }

    async pegaMatriculasEstudante(id){
        const estudante = await super.getRegistroID(id);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }

    async pegaPessoasEscopoTodos(){
        const listaPessoas = await super.getRegistrosEscopo('todosRegistros');
        return listaPessoas;
    }
}

module.exports = PessoaServices;