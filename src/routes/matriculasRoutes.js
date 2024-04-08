const { Router }= require('express');
const MatriculaControler = require('../controllers/MatriculasController.js');

const matriculaControler = new MatriculaControler();

const router = Router();

router.get('/matriculas', (req, res, next) => matriculaControler.getDados(req, res, next));
router.get('/matriculas/:id', (req, res, next) => matriculaControler.getDadosID(req, res, next));
router.post('/matriculas', (req, res, next) => matriculaControler.postDados(req, res, next));
router.put('/matriculas/:id', (req, res, next) => matriculaControler.putDados(req, res, next));
router.delete('/matriculas/:id', (req, res, next) => matriculaControler.deleteDados(req, res, next));
module.exports = router;