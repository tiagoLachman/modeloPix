//Geração de cada campo
function generateField(jsonData) {
    let len = jsonData.len;
    let data = jsonData.data;
    /*
        Caso o valor atribuido seja maior do que
        o maximo permitido no CNAB750
        simplesmente corta e devolve

        Não entra para valores monetarios
    */
    if (data.length >= len) {
        return data.substring(0, len);
    }


    let type = jsonData.type.toUpperCase();
    let string = "";
    
    //Veficação do tipo do campo
    if (type == "9") {

        //Completando o campo com o respectivo caractere
        for (let i = 0; i < (len - data.length); i++) {
            string = string.concat("0");
        }
        data = string.concat(data);
    } else if (type == "X") {

        //Completando o campo com o respectivo caractere
        for (let i = 0; i < (len - data.length); i++) {
            string = string.concat(" ");
        }
        data = data.concat(string);

    
    }
    //Campo especial para valores do tipo XXXXXXXXXXXXXXX,XX 
    else if (type == "9V9") {

        //Caso não haja nenhum valor atribuido
        if (data == "") return "00000000000000000"

        //Tratamento do valor
        //não foi utilizado nenhuma forma de arredondamento
        //pois os valores mudam
        data = data.split(",");
        let decimais = data[1].substring(0, 2);
        data = data[0];

        //Completando as casas não preenchidas com 0
        for (let i = 0; i < (len["1"] - data.length - decimais.length + len["2"]); i++) {
            string = string.concat("0");
        }
        data = string.concat(`${data}${decimais}`);
    }
    return data;
}

//Geração de uma linha
function generateLine(data) {
    
    let res = "";
    Object.keys(data).forEach(k => {
        //Concatenando cada campo gerado
        res = res.concat(generateField(data[k]));
    })
    return res;
}

function generateCNAB750(obj_array) {
    let res = "";
    obj_array.forEach(obj => {
        res = res.concat(`${generateLine(obj)}\n`);
    });
    return res;
}

module.exports = generateCNAB750