const { Router }= require('express');
const PessoaControler = require('../controllers/PessoasController.js');
const MatriculaControler = require('../controllers/MatriculasController.js');

const pessoaControler = new PessoaControler();
const matriculaControler = new MatriculaControler();

const router = Router();

router.get('/pessoas', (req, res, next) => pessoaControler.getDados(req, res, next));
router.get('/pessoas/todos', (req, res, next) => pessoaControler.getTodasPessoas(req, res, next));
router.get('/pessoas/:id', (req, res, next) => pessoaControler.getDadosID(req, res, next));
router.post('/pessoas', (req, res, next) => pessoaControler.postDados(req, res, next));
router.put('/pessoas/:id', (req, res, next) => pessoaControler.putDados(req, res, next));
router.put('/pessoas/:estudante_id/cancela', (req, res, next) => pessoaControler.cancelRegistroEstudante(req, res, next));
router.delete('/pessoas/:id', (req, res, next) => pessoaControler.deleteDados(req, res, next));

router.get('/pessoas/:estudante_id/matriculas', (req, res, next) => pessoaControler.getMatriculasAtivas(req, res, next));
router.get('/pessoas/matriculas/lotadas', (req, res, next) => matriculaControler.getCursosLotados(req, res, next));
router.get('/pessoas/:estudante_id/matriculas/todos', (req, res, next) => pessoaControler.getMatriculas(req, res, next));
router.get('/pessoas/:estudante_id/matriculas/confirmadas', (req, res, next) => matriculaControler.getMatriculasEstudante(req, res, next));
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res, next) => matriculaControler.getUmDado(req, res, next));
router.post('/pessoas/:estudante_id/matriculas', (req, res, next) => matriculaControler.postDados(req, res, next));
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res, next) => matriculaControler.putDados(req, res, next));
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res, next) => matriculaControler.deleteDados(req, res, next));


module.exports = router;