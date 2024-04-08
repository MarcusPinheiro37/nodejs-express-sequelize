const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();

module.exports = class MatriculaControler extends Controller {
    constructor(){
        super(matriculaServices);
    }
};

  