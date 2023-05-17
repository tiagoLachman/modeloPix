const fs = require('fs');
const app = require("express")()


const parseToJson = require("./CNBA750/parseCnabToJson")
const generateCNAB750 = require("./CNBA750/generator")


//Dados em json
let header = require("./Json/remessa/header");
let detalhe = require("./Json/remessa/detalhe");
let detalhe_2 = require("./Json/remessa/arquivo_tipo_2");
let trailer = require("./Json/remessa/trailer");


/*Adicionar dados para geração do CNAB750*/


let obj_array = [header, detalhe, detalhe_2, trailer];
let txt_generated = generateCNAB750(obj_array);
fs.writeFileSync('txt_output.txt', txt_generated);


//let data = fs.readFileSync('./CNBA750_example.txt', { encoding: 'utf8', flag: 'r' });
//console.log(parseToJson(data));