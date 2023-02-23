const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    // demandOption: true,  <-- excluyente con default
    default: false,
    describe: 'Especifica si se listara la tabla de multiplicar'
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    // demandOption: true,  <-- excluyente con default
    default: 10,
    describe: 'Shows until when is going to multiply'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw ('La base tiene que ser un número');
    }
    if (argv.b == 0) {
      throw ('Multiplicacion por cero (0) == 0');
    }
    if (argv.l == 0) {
      throw ('Limite superior debe ser al menos 1');
    }
    return true;
  })
  .argv;

module.exports = argv;