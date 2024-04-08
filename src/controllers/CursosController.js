const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');

const cursoServices = new CursoServices();

module.exports = class CursoControler extends Controller {
    constructor(){
        super(cursoServices);
    }
};

  