
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

crearArchivo(argv.b, argv.s, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado!!!'))
  .catch(err => console.log(err));


























//const [, , argumento3] = process.argv;
//const [, base = 3] = argumento3.split('=');


//console.log(process.argv);
//console.log(argv);

//console.log('Base que viene a traves de yargs', argv.base);

//console.log(`Inicial --> ${argumento3} Splitada --> ${base}`);