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
}

module.exports = PessoaServices;