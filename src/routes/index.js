const express = require('express');
const cors = require('cors');
const documentacao = require('./docRout.js');
const pessoas = require('./pessoasRoutes.js');
const cursos = require('./cursosRoutes.js');
const categorias = require('./categoriasRoutes.js');
const trataErro = require('../middlewares/trataErros.js');
const manipulador404 = require('../middlewares/manipulador404.js');

module.exports = app => {
    app.use(cors());
    app.use(express.json(), pessoas, cursos, categorias, documentacao);
    app.use(manipulador404);
    app.use(trataErro);
};
