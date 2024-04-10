const express = require('express');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const path = require('path');
const process = require('process');


const PORT = process.env.PORT || 3000;
const swaggerDocumentPath = path.join(__dirname, '..', 'documentacao', 'documentacao.yaml');

const routes = express.Router();

const swaggerDocument = yaml.load(swaggerDocumentPath);
swaggerDocument.servers = [{ url: `http://localhost:${PORT}` }];

routes.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = routes;
