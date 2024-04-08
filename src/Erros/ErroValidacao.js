const ErroBase = require('./ErroBase');

class ErroValidacao extends ErroBase {
    constructor(err){
        const mensagensErro = Object.values(err.errors)
            .map(error => error.message)
            .join('; ');
        super(`Os seguintes erros ocorreram: ${mensagensErro}`, 400);
    }
}

module.exports = ErroValidacao;
