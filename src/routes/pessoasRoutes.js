const { Router }= require('express');
const PessoaControler = require('../controllers/PessoasController.js');
const MatriculaControler = require('../controllers/MatriculasController.js');

const pessoaControler = new PessoaControler();
const matriculaControler = new MatriculaControler();

const router = Router();

router.get('/pessoas', (req, res, next) => pessoaControler.getDados(req, res, next));
router.get('/pessoas/:id', (req, res, next) => pessoaControler.getDadosID(req, res, next));
router.post('/pessoas', (req, res, next) => pessoaControler.postDados(req, res, next));
router.put('/pessoas/:id', (req, res, next) => pessoaControler.putDados(req, res, next));
router.delete('/pessoas/:id', (req, res, next) => pessoaControler.deleteDados(req, res, next));

router.get('/pessoas/:estudanteId/matriculas', (req, res, next) => pessoaControler.getMatriculas(req, res, next));
router.post('/pessoas/:estudanteId/matriculas', (req, res, next) => matriculaControler.postDados(req, res, next));

module.exports = router;