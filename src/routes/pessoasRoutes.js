const { Router }= require('express');
const PessoaControler = require('../controllers/PessoasController.js');

const pessoaControler = new PessoaControler();

const router = Router();

router.get('/pessoas', (req, res, next) => pessoaControler.getDados(req, res, next));
router.get('/pessoas/:id', (req, res, next) => pessoaControler.getDadosID(req, res, next));
router.post('/pessoas', (req, res, next) => pessoaControler.postDados(req, res, next));
router.put('/pessoas/:id', (req, res, next) => pessoaControler.putDados(req, res, next));
router.delete('/pessoas/:id', (req, res, next) => pessoaControler.deleteDados(req, res, next));
module.exports = router;