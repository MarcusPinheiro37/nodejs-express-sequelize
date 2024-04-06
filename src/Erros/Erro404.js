const ErrBase = require('./ErroBase.js');

module.exports = class NaoEncontrado extends ErrBase{
    constructor(message = 'Página não encontrada'){
        super(message, 404);
    }
};