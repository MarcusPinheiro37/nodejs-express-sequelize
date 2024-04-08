const { Router }= require('express');
const CategoriaControler = require('../controllers/CategoriasController.js');

const categoriaControler = new CategoriaControler();

const router = Router();

router.get('/categorias', (req, res, next) => categoriaControler.getDados(req, res, next));
router.get('/categorias/:id', (req, res, next) => categoriaControler.getDadosID(req, res, next));
router.post('/categorias', (req, res, next) => categoriaControler.postDados(req, res, next));
router.put('/categorias/:id', (req, res, next) => categoriaControler.putDados(req, res, next));
router.delete('/categorias/:id', (req, res, next) => categoriaControler.deleteDados(req, res, next));
module.exports = router;