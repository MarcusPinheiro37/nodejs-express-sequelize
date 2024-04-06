const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

module.exports = class PessoaControler extends Controller {
    constructor(){
        super(pessoaServices);
    }
};

  