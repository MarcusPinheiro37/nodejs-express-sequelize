const db = require('../models');

module.exports = class PessoaControler {
    static async listaPessoas(req, res/*, next*/){
        try {
            const listaPessoas = await db.Pessoa.findAll();
            return res.status(200).json(listaPessoas);
        } catch (error) {
            res.status(500).send({message: 'erro no servidor'});
        }
    }
};

  