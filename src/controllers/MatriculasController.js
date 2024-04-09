const Sequelize = require('sequelize');
const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();

module.exports = class MatriculaControler extends Controller {
    constructor(){
        super(matriculaServices);
    }

    async getMatriculasEstudante(req, res, next){
        const estudanteId = req.params.estudante_id;
        try {
            const listaMatriculas = await matriculaServices.getCountRegistros({
                where: {
                    estudante_id: Number(estudanteId),
                    // status: 'matriculado'
                },
                order:[['id', 'DESC']]
            });
            return res.status(200).json(listaMatriculas);
        } catch (error) {
            next(error);
        }
    }

    async getCursosLotados(req,res,next){
        const lotacaoCurso = req.query.lotacaoCurso || 0;
        console.log(lotacaoCurso);
        try {
            const listaCursosLotado = await matriculaServices.getCountRegistros({
                where: {status: 'matriculado'},
                attributes: ['curso_id'],
                group: ['curso_id'],
                having: Sequelize.literal(`count(curso_id) >= ${lotacaoCurso}`)
            });
            res.status(200).json(listaCursosLotado.count);
        } catch (error) {
            next(error);
        }
    }
};

  