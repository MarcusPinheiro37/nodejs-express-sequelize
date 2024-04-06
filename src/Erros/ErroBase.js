module.exports = class ErroBase extends Error{
    constructor(message = 'erro de servidor', status = 500){
        super();
        this.status = status;
        this.message = message;
    }
    enviarResposta(res){
        res.status(this.status).send({
            status: this.status,
            mensage: this.message
        });
    }
};