const fs = require('fs');
const colors = require('colors');

// let crearArchivo = async(base) => {
//     let data = '';
//     for (let i = 1; i <= 10; i++) {
//         data += `${base} * ${i} = ${base * i}\n`;
//     }
//     fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//         if (err) throw err;
//         return `table-${base}.txt`;
//     });
// };

let listarTabla = (base, limite) => {
    console.log('================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('================'.green);
    for (var i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor de la base(${base}) no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

//Aqui se pueden agregar muchas funciones
module.exports = {
        crearArchivo,
        listarTabla
    }
    //TAMBIEN SE PUEDE 
    //module.exports.funcion()