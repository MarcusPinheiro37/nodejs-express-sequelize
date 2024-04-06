const express = require('express');
const pessoas = require('./pessoasRoutes.js');
const trataErro = require('../middlewares/trataErros.js');
const manipulador404 = require('../middlewares/manipulador404.js');

module.exports = app => {
    app.use(express.json(), pessoas);
    app.use(manipulador404);
    app.use(trataErro);
};
