const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

module.exports = class PessoaControler extends Controller {
    constructor(){
        super(pessoaServices);
    }

    async getMatriculas(req, res, next){
        const {estudanteId} = req.params;
        try {
            const listaMatriculas = await pessoaServices.pegaMatriculasEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        } catch (error) {
            next(error);
        }
    }
};

  