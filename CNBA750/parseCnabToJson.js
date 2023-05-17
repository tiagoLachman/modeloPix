const header = require("../Json/retorno/header");
const detalhe = require("../Json/retorno/detalhe");
const arquivo_2 = require("../Json/retorno/arquivo_tipo_2");
const arquivo_3 = require("../Json/retorno/arquivo_tipo_3");
const arquivo_4 = require("../Json/retorno/arquivo_tipo_4");
const trailer = require("../Json/retorno/trailer");

//Passa uma linha do CNAB750 para JSON
function parseOneLineToJson(data) {

    //Tipos de registros
    let objs = [header, detalhe, arquivo_2, arquivo_3, arquivo_4, trailer];

    //Pega o tipo do registro no primeiro byte
    let tipo_registro = data[0];

    let resObj = header;

    //Procura pelo registro que coincide ao passado para a função
    for (let i = 0; i < objs.length; i++) {
        if (tipo_registro == objs[i]["TIPO_DE_REGISTRO"].data) {
            resObj = objs[i];
            break;
        }
    }

    //Passa cada campo do registro para json
    Object.keys(resObj).forEach((k) => {
        if (typeof (resObj[k].len) != "number") {
            resObj[k].data = data.substring(0, resObj[k].len["1"]) + ","
            data = data.substring(resObj[k].len["1"]);
            resObj[k].data += data.substring(0, resObj[k].len["2"]);
            data = data.substring(resObj[k].len["2"]);
        } else {
            resObj[k].data = data.substring(0, resObj[k].len);
            data = data.substring(resObj[k].len);
        }
    });
    //Retorna 1 objeto json com os dados "traduzidos"
    return resObj;
}

//Passa uma string com varias linhas de CNAB750 para JSON
function parseToJson(data) {
    //Separa cada linha do CNAB
    data = data.split("\r\n")
    let res = [];

    //Variaveis para validação do tamanho de cada campo
    let total_esperado = 0;
    let total = 0;


    for (let i = 0; i < data.length; i++) {
        //Possível fim de arquivo
        if (data[i] == "") break;

        //Passa o objeto para a função de gerar json por linha
        const objSomar = parseOneLineToJson(data[i]);

        //Concatena na variavel de retorno
        res = res.concat(objSomar);

        //Validação de cada campo
        Object.keys(objSomar).forEach(k => {
            total_esperado = 0;

            //Caso entre no caso especial dos valores monetarios
            if (typeof (objSomar[k].len) != "number") {
                //total que é calculado de acordo com as definições no json
                total_esperado += objSomar[k].len["1"]
                total_esperado += objSomar[k].len["2"]

                //total recebido, neste caso -1 por causa da virgula
                total = objSomar[k].data.length - 1;
            } else {
                //total que é calculado de acordo com as definições no json
                total_esperado += objSomar[k].len;

                //total recebido
                total = objSomar[k].data.length;
            }

            //Caso os valores forem diferentes ele gera um error
            if (total != total_esperado) {
                let err = `Chave:${k}\nData:${objSomar[k].data}\nEsperado:${total_esperado}\nEncontrado:${total}`
                throw err;
            }
        })
    }

    return res;
}


module.exports = parseToJson