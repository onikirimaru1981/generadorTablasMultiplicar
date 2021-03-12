const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();


crearArchivo(argv.t, argv.l, argv.u)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(console.log)






