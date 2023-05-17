// Requiring the module
const reader = require('xlsx')
const fs = require('fs');
var path = require('path');

// Reading our test file
const file = reader.readFile('layout.xlsx')

const sheets = file.SheetNames
console.log(sheets.length)


for (let i = 0; i < sheets.length; i++) {
  let camposRepetidos = [];
  let stringGravar = "module.exports={\n";
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
  console.log(file.SheetNames[i])
  temp.forEach((res) => {
    if (res["PICTURE"] !== undefined) {
      //console.log(res);
      let tam = res["PICTURE"]
      let type;
      if (tam.search("V9") > 0) {
        type = "9V9";
        tam = tam.split("V");
        tam = `{
          "1": ${tam[0].substring(tam[0].indexOf("(")+1,tam[0].indexOf(")"))},
          "2": ${tam[1].substring(tam[1].indexOf("(")+1,tam[1].indexOf(")"))}
        }`;
      }else{
        type = tam.substring(0,1);
        tam = tam.substring(tam.indexOf("(")+1,tam.indexOf(")"))
      }

      let nome = res["NOME DO CAMPO"];
      let significado = res["SIGNIFICADO"] === undefined ? "" : res["SIGNIFICADO"];
      let exceldata = res["CONTEÚDO"] === undefined ? "" : res["CONTEÚDO"];
      if (typeof (exceldata) == "number") {
        exceldata = exceldata.toString();
      }
      nome = nome.replaceAll("Ã", "A")
      nome = nome.replaceAll("Ç", "C")
      nome = nome.replaceAll(" ", "_")
      nome = nome.replaceAll("Ú", "U")
      nome = nome.replaceAll("Ü", "U")
      nome = nome.replaceAll("Ó", "O")
      nome = nome.replaceAll(".", "_")
      nome = nome.replaceAll("É", "E")
      nome = nome.replaceAll("Ê", "E")
      nome = nome.replaceAll("Í", "I")
      nome = nome.replaceAll("\n\r", " ")
      nome = nome.replaceAll("\r\n", " ")
      nome = nome.replaceAll("\n", " ")
      nome = nome.replaceAll("\r", " ")

      significado = significado.replaceAll("\n\r", " ")
      significado = significado.replaceAll("\r\n", " ")
      significado = significado.replaceAll("\n", " ")
      significado = significado.replaceAll("\r", " ")

      exceldata = exceldata.replaceAll("\n\r", " ")
      exceldata = exceldata.replaceAll("\r\n", " ")
      exceldata = exceldata.replaceAll("\n", " ")
      exceldata = exceldata.replaceAll("\r", " ")
      if(camposRepetidos[nome] === undefined){
        camposRepetidos[nome] = 1
      }else{
        nome = `${nome}_${camposRepetidos[nome]}`;
        camposRepetidos[nome]++;
      }
      stringGravar += `/**
    * Significado:
    * \`${significado}\`
    * 
    * Obrigatório:
    * \`${res["OBRIGATÓRIO"]}\`
    * 
    * Valor padrão:
    * \`${res["CONTEÚDO"] === undefined ? "" : res["CONTEÚDO"]}\`
    */
    "${nome}": {
         "data": "${exceldata}",
         "type": "${type}",
         "len": ${tam}
    },\n`

    }
  })
  stringGravar += "}";
  //console.log(stringGravar);
  let filename = file.SheetNames[i];
  if (file.SheetNames[i].search("remessa") >= 0) {
    filename = "remessa/" + file.SheetNames[i].substring(0, file.SheetNames[i].search("remessa") - 1)
  } else if (file.SheetNames[i].search("retorno") >= 0) {
    filename = "retorno/" + file.SheetNames[i].substring(0, file.SheetNames[i].search("retorno") - 1)
  }
  fs.writeFileSync(path.join(__dirname, `Json/${filename}.js`), stringGravar);
}