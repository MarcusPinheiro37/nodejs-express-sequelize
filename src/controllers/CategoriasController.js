const Controller = require('./Controller.js');
const CategoriaServices = require('../services/CategoriaServices.js');

const categoriaServices = new CategoriaServices();

module.exports = class CategoriaControler extends Controller {
    constructor(){
        super(categoriaServices);
    }
};

  