const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

module.exports = class PessoaControler extends Controller {
    constructor(){
        super(pessoaServices);
    }

    async getMatriculasAtivas(req, res, next){
        const estudanteId = req.params.estudante_id;
        try {
            const listaMatriculas = await pessoaServices.pegaMatriculasAtivasEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        } catch (error) {
            next(error);
        }
    }
    
    async getMatriculas(req, res, next){
        const estudanteId = req.params.estudante_id;
        try {
            const listaMatriculas = await pessoaServices.pegaMatriculasEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        } catch (error) {
            next(error);
        }
    }

    async getTodasPessoas(req, res, next){
        try {
            const listaTodos = await pessoaServices.pegaPessoasEscopoTodos();
            res.status(200).json(listaTodos);
        } catch (error) {
            next(error);
        }
    }
};

  