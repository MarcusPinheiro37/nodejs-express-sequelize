const { Op } = require('sequelize');
const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');

const cursoServices = new CursoServices();

module.exports = class CursoControler extends Controller {
    constructor(){
        super(cursoServices);
    }

    async getDados(req, res, next){
        const { data_inicial, data_final } = req.query;
        const where = {};
        if (data_inicial || data_final) {
            where.data_inicio = {};
            if (data_inicial) {
                where.data_inicio[Op.gte] = data_inicial;
            }
            if (data_final) {
                where.data_inicio[Op.lte] = data_final;
            }
        }

        console.log(where);
        try {
            const listaCursos = await cursoServices.getRegistros(where);
            res.status(200).json(listaCursos);
        } catch (error) {
            next(error);
        }
    }
};

  