const ErroBase = require('./ErroBase');

class ErroRestricaoUnique extends ErroBase {
    constructor(mensagem, campos) {
        super(mensagem, 400);
        this.campos = campos;
    }

    // Sobrescreve o método enviarResposta para incluir os campos no corpo da resposta
    enviarResposta(res) {
        res.status(this.status).send({
            status: this.status,
            mensagem: this.message,
            campos: this.campos // Adiciona os campos ao objeto de resposta
        });
    }
}

module.exports = ErroRestricaoUnique;
