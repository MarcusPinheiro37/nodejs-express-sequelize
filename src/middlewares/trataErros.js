const { ValidationError, DatabaseError } = require('sequelize');
const ErroBase = require('../Erros/ErroBase.js');
const RequisicaoIncorreta = require('../Erros/RequisicaoIncorreta.js');
const ErroValidacao = require('../Erros/ErroValidacao.js');
const ErroRestricaoUnique = require('../Erros/ErroRestricaoUnique.js');

function manipulaErrosSequelize(err, req, res, next) {
    console.error(err);

    if (err instanceof ValidationError) {
        // Verifica se o erro é uma caso de uso de valores unicos
        if (err.name === 'SequelizeUniqueConstraintError') {
            const camposViolados = err.errors.map(error => error.path);
            new ErroRestricaoUnique('O valor inserido já foi usado. Insira um valor único.', [...camposViolados].join(', ')).enviarResposta(res);
        } else {
            new ErroValidacao(err).enviarResposta(res);
        }
    } else if (err instanceof DatabaseError) {
        new RequisicaoIncorreta().enviarResposta(res);
    } else if (err instanceof ErroBase) {
        err.enviarResposta(res);
    } else {
        new ErroBase().enviarResposta(res);
    }
}

module.exports = manipulaErrosSequelize;
