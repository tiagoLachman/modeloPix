const header = require("../Json/retorno/header");
const detalhe = require("../Json/retorno/detalhe");
const detalhe_3 = require("../Json/retorno/detalhe_tipo_3");
const detalhe_4 = require("../Json/retorno/detalhe_tipo_4");
const trailer = require("../Json/retorno/trailer");


function parseOneLineToJson(data) {
    let objs = [header, detalhe, detalhe_3, detalhe_4, trailer];

    let tipo_registro = data[0];
    let resObj = header;

    for (let i = 0; i < objs.length; i++) {
        if (tipo_registro == objs[i]["TIPO_DE_REGISTRO"].data) {
            resObj = objs[i];
            break;
        }
    }
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
    return resObj;
}


function parseToJson(data) {
    data = data.split("\r\n")
    let res = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] == "") break;
        const objSomar = parseOneLineToJson(data[i]);
        res = res.concat(objSomar);

        //console.log(objSomar)
        Object.keys(objSomar).forEach(k => {
            total_esperado = 0;
            if (typeof (objSomar[k].len) != "number") {
                total_esperado += objSomar[k].len["1"]
                total_esperado += objSomar[k].len["2"]
                total = objSomar[k].data.length - 1;
            } else {
                total_esperado += objSomar[k].len;
                total = objSomar[k].data.length;
            }
            if (total != total_esperado) {
                let err = `Chave:${k}\nData:${objSomar[k].data}\nEsperado:${total_esperado}\nEncontrado:${total}`
                throw err;
            }
        })
    }
    return res;
}
module.exports = parseToJson