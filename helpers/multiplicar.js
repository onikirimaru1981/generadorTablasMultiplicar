const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (tabla, listar = false, limite) => {
    let salida = '';
    let codigo = '';


    try {


        for (let i = 0; i <= limite; i++) {

            const resultado = i * tabla




            salida += `${tabla} X ${i} = ${resultado}\n`;
            codigo += `${tabla}`.yellow + ` ${'X'.magenta} ` + `${i}`.yellow + ` ${'='.green}`.yellow + ` ${resultado}\n`.yellow;


        };
        if (listar) {// Con esta condicion hacemos que muestre este contenido o no,en funcion si con el argumento en consola va con -l
            console.log(`                            =============================================`.rainbow + `====
                            =======`.rainbow + ` TABLA DE MULTIPLICAR DEL: `.green + `${tabla} `.yellow + `=============
                            ==`.rainbow + `===============================================`.rainbow);

            console.log(codigo);
        };



        fs.writeFileSync(`./salida/tabla_del_${tabla}.txt`, salida);// podemos indicarle al writeFileSync donde deseamos que se ubique el archivo generado

        return `Tabla-${tabla}.txt`.green + ` archivo creado`.rainbow;// Recordar que cuando transformamos la funcion en 
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

