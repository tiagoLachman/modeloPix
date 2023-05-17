//Geração de cada campo
function generateField(jsonData) {
    let len = jsonData.len;
    let data = jsonData.data;
    if(data == "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"){
        console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
    }
    /*
        Caso o valor atribuido seja maior do que
        o maximo permitido no CNAB750
        simplesmente corta e devolve

        Não entra para valores monetarios
    */
    if (data.length > len) {
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
        let tamanho = len["1"] + len["2"];
        //Caso não haja nenhum valor atribuido
        if (data == "" || data.length > tamanho) return "00000000000000000"
        
        //Tratamento do valor
        //não foi utilizado nenhuma forma de arredondamento
        //pois os valores mudam
        data = data.split(",");
        
        if(data[1]===undefined) data[1] = "00"
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
    console.log("NOVO OBJETO");
    Object.keys(data).forEach(k => {
        console.log(k)
        let campoGerado = generateField(data[k]);
        console.log(`campoGerado.length${campoGerado.length}\ndata[k].len:${data[k].len}\n-------------------\n`)
        if(typeof(data[k].len) == "number"){
            if(campoGerado.length != data[k].len) throw `${JSON.stringify(data[k])}\n${campoGerado}`
        }else{
            if(campoGerado.length != (data[k].len["1"]+data[k].len["2"])) throw `${JSON.stringify(data[k])}\n${campoGerado}`
        }
        
        //Concatenando cada campo gerado
        res = res.concat(campoGerado);
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