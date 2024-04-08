const app = require('./src/app.js');
const PORT = 3000;
const textoAmarelo = '\x1b[33m';
app.listen(PORT, () => {
    console.log(`${textoAmarelo}servidor escutando!`);
});
