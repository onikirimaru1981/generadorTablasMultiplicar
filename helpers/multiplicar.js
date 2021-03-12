const fs = require('fs');


const crearArchivo = async (tabla, listar = false) => {
    let salida = '';


    try {


        for (let i = 0; i <= 10; i++) {

            const resultado = i * tabla


            salida += `${tabla} X ${i} = ${resultado}\n`;

        };
        if (listar) {// Con esta condicion hacemos que muestre este contenido o no,en funcion si con el argumento en consola va con -l
            console.log('=======TABLA DE MULTIPLICAR DEL:', tabla, ' =======');
            console.log(salida)
        };



        fs.writeFileSync(`./salida/tabla_del_${tabla}.txt`, salida);// podemos indicarle al writeFileSync donde deseamos que se ubique el archivo generado

        return `Tabla-${tabla}.txt archivo creado`;// Recordar que cuando transformamos la funcion en 
        // asincrona,el resultado hay que devolverlo siempre con un return



    } catch (err) {


        throw 'Dato introducido incorrecto';

    }


};

// Con esta sintaxis exportamos en NodeJs

module.exports = {

    // crearArchivo: crearArchivo
    // En JS nombrar la llamada de una funcion  con el mismo nombre es rebundante,por lo 
    // que podemos dejarlo de la siguiente manera:

    crearArchivo


}