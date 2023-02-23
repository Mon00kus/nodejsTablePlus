const colors = require('colors');
const fs = require('fs');

const multiplicar = (a, b) => a * b;

const crearArchivo = async (base, show, limit) => {
  try {

    let salida = '';
    let salidaConsole = '';

    salida += `===================\n`;
    salida += `Tabla del --------> ` + `${base} \n`;
    salida += `===================\n`;

    salidaConsole = salida.rainbow;

    for (let i = 1; i <= limit; i++) {
      salida += `El valor de : ${base} x ${i} es : ${multiplicar(base, i)} \n`;
      salidaConsole += colors.yellow(`El valor de : ${base} x ${i} es : ${multiplicar(base, i)} \n`);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    console.clear();
    if (show) {
      console.log(salidaConsole);
    }

    return `tabla-${base}.txt`.rainbow;

  } catch (err) {

    throw err;

  }
}

module.exports = {
  crearArchivo
};



/* const _crearArchivo = (number = 5) => {

  console.log(`===================`);
  console.log('Tabla del --->', number);
  console.log(`===================`);

  let salida = '';

  for (let i = 1; i <= 10; i++) {
    salida += `El valor de ${number} x ${i} es : ${multiplicar(number, i)}\n`;
  }

  console.log(salida);

  fs.writeFileSync(`tabla-${number}.txt`, salida);

  console.log(`tabla-${number}.txt creada`);

};
 */