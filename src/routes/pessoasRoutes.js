const { Router }= require('express');
const PessoaControler = require('../controllers/PessoasController.js');

const router = Router();

router.get('/pessoas', PessoaControler.listaPessoas);

module.exports = router;