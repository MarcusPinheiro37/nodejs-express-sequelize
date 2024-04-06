const NaoEncontrado = require('../Erros/Erro404.js');

module.exports = function manipulador404(req, res, next) {
    const erro404 = new NaoEncontrado();
    next(erro404);
};