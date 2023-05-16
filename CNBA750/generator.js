function generateData(jsonData) {
    let len = jsonData.len;
    let data = jsonData.data;
    if (data.length >= len) {
        return data.substring(0, len);
    }

    let type = jsonData.type.toUpperCase();
    let string = "";

    if (type == "9") {
        for (let i = 0; i < (len - data.length); i++) {
            string = string.concat("0");
        }
        data = string.concat(data);
    } else if (type == "X") {
        for (let i = 0; i < (len - data.length); i++) {
            string = string.concat(" ");
        }
        data = data.concat(string);
    } else if (type == "9V9") {
        data = parseFloat(data.replace(",", "."));
        let decimais = (data - data.toFixed(0)).toPrecision(len["2"]).substring(len["2"]);
        data = data.toFixed(0).toString()
        for (let i = 0; i < (len["1"] - data.length-decimais.length+2); i++) {
            string = string.concat("0");
        }
        data = string.concat(`${data}${decimais}`);
    }
    return data;
}

function generateLine(data) {
    let res = "";
    Object.keys(data).forEach(k => {
        //console.log(k)
        res = res.concat(generateData(data[k]));
    })
    return res;
}

module.exports = generateLine