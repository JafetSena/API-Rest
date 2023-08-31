const fsc = require('fs'); //CALLBACK
const path = require('path');
const { jsPDF } = require("jspdf");
var xl = require('excel4node');
// import * as fsc from 'fs';
// import * as path from 'path';
// import * as pdf from 'jspdf';
// import * as xl from 'excel4node';

// console.log(__dirname);     //CONSTANTES DE Node JS
// console.log(__filename);
//path.join("ruta", "nombre del archivo")
//Generación de un archivo de texto con el modulo FS usandolo como Callback
fsc.writeFile(path.join(__dirname, 'archivos/Archivo.txt'), "archivo creado API Callback", (err) => {
    if (err){
        console.log(err);
    }
    else {
        console.log("Archivo creado con el API fs CALLBACK");
    }
});

//Instalación del paquete JsPDF para agregarle a la aplicación la habilidad de generar PDFs 
const doc = new jsPDF();
doc.text("Hello world!", 10, 10);
//doc.save("a4.pdf");       //Va a generar el archivo sin la ruta especificada
doc.save(path.join(__dirname, "archivos/a4.pdf"));

//Generación del archivo en excel
var wb = new xl.Workbook();

// Add Worksheets to the workbook
var ws = wb.addWorksheet('Sheet 1');
var ws2 = wb.addWorksheet('Sheet 2');

// Create a reusable style
var style = wb.createStyle({
  font: {
    color: '#FF0800',
    size: 12,
  },
  numberFormat: '$#,##0.00; ($#,##0.00); -',
});

// Set value of cell A1 to 100 as a number type styled with paramaters of style
ws.cell(1, 1)
  .number(100)
  .style(style);

  wb.write(path.join(__dirname, 'archivos/Excel.xlsx'));