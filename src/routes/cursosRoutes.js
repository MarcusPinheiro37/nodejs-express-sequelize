const { Router }= require('express');
const CursoControler = require('../controllers/CursosController.js');

const cursoControler = new CursoControler();

const router = Router();

router.get('/cursos', (req, res, next) => cursoControler.getDados(req, res, next));
router.get('/cursos/:id', (req, res, next) => cursoControler.getDadosID(req, res, next));
router.post('/cursos', (req, res, next) => cursoControler.postDados(req, res, next));
router.put('/cursos/:id', (req, res, next) => cursoControler.putDados(req, res, next));
router.delete('/cursos/:id', (req, res, next) => cursoControler.deleteDados(req, res, next));
module.exports = router;