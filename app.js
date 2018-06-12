//AL PRINCIPIO SE PONEN LOS REQUIREDS
// const fs = require('fs'); //YA EXISTE Y SOLOS SE DEFINE
// const fs = require('express'); //NO EXISTE EN NODE
// const fs = require('./fs'); //HECHOS POR MI MISMO EN MIS PROYECTOS

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ` + `${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base * i}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));