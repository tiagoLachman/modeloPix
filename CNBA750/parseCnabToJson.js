const header = require("../Json/retorno/header");
const detalhe = require("../Json/retorno/detalhe");
const detalhe_3 = require("../Json/retorno/detalhe_tipo_3");
const detalhe_4 = require("../Json/retorno/detalhe_tipo_4");
const trailer = require("../Json/retorno/trailer");

function parseToJson(data) {
    let objs = [header, detalhe, detalhe_3, detalhe_4, trailer];

    let tipo_registro = data[0];
    let resObj = header;

    for (let i = 0; i < objs.length; i++) {
        if (tipo_registro == objs[i]["TIPODEREGISTRO"].data) {
            resObj = objs[i];
            break;
        }
    }
    Object.keys(resObj).forEach((k) => {
        if(typeof(resObj[k].len) != "number"){
            resObj[k].data = data.substring(0, resObj[k].len["1"])+","
            data = data.substring(resObj[k].len["1"]);
            resObj[k].data += data.substring(0, resObj[k].len["2"]);
            data = data.substring(resObj[k].len["2"]);
        }else{
            resObj[k].data = data.substring(0, resObj[k].len);
            data = data.substring(resObj[k].len);
        }
    });
    return resObj;
}

module.exports = parseToJson