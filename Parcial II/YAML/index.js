const yaml = require('yaml');
const fs = require('fs');
const path = require('path');

const archivo = fs.readFileSync(path.join(__dirname, '/objeto.yml'), 'utf8');
const objYaml = yaml.parse(archivo);
console.log(objYaml);

const archivo2 = fs.readFileSync(path.join(__dirname, '/arreglo.yml'), 'utf8');
const arrayYaml = yaml.parse(archivo2);
console.log(arrayYaml);