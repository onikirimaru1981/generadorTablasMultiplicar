// La libreria yargs nos da una ventaja frente al process.argv,y es que a diferencia de este
// yargs nos devuelve los argumentos en forma de objeto,con la consiguiente ventaja a la hora de acceder a los datos
const argv = require('yargs')// Utilizacion de la libreria yargs


    .option('t', {// opciones de yargs.Empezamos poniendo el nombre corto del alias
        alias: 'tabla',// alias
        type: 'number',//tipo de dato
        demandOption: true,// Esta codigo manda un error si no mandamos el dato correcto
        describe: 'Establece la tabla de multiplicar,comando -t(numero)'
    })
    .option('l', {// Codigo para mostrar o no la tabla en funcion de si lleva la bandera l
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra en terminal la tabla de multiplicar,comando -l'
    })
    .option('u', {
        alias: 'until',
        type: 'number',
        demandOption: true,
        describe: 'Establece el limite de la tabla,comando -u'
    })
    .check((argv, options) => {// Con este codigo comprobamos el dato
        if (isNaN(argv.t)) {// Si el dato es un NaN lanzara el throw con el error que especifiquemos

            throw 'La tabla tiene que ser un numero'

        }
        return true;// si no hay nin gun error devolvera true,y si ejecutara lo que sigue,el .argv
    })
    .argv

module.exports = argv;//al solo necesitar yargs lo exporto asi no como un objeto


// console.log(process.argv);
//[
// 'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\workspace2\\node\\03-bases-node\\app',
//     '--tabla=5'
// ]

// console.log(argv);
//{ _: [], tabla: 5, '$0': 'app' }


// console.log('Tabla: yargs', argv.tabla);
