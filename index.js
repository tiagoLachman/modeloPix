const fs = require('fs');
const app = require("express")()
const db_config = require('./db/sql_config');
const mssql = require("mssql")

const path_registros = "./registroBancario"

const parseToJson = require("./CNBA750/parseCnabToJson")
const generateCNAB750 = require("./CNBA750/generator")


//Dados em json
const header_model = require("./Json/remessa/header");
const detalhe_model = require("./Json/remessa/detalhe");
const detalhe_2_model = require("./Json/remessa/arquivo_tipo_2");
const trailer_model = require("./Json/remessa/trailer");


app.get("/:id", async (req, res) => {
    let hora_req = new Date();
    let valor_total = 0;
    const id = req.params.id;

    let con = await mssql.connect(db_config);
    const result = await mssql.query(`
        select pp.PpeValor, p.PreChavePix, p.PreCPF, p.PreNome
        from pedidocliente pc 
        join pedidopremiado pp on pp.pecid = pc.pecid
        join premiado p on p.preid = pp.preid
        join cliente c on c.cliid = pc.cliid
        where pc.PecID = ${id}
    `)

    let header = header_model;
    let lista_dados = [];
    let trailer = trailer_model;

    header.ISPB_PARTICIPANTE.data = "Ver que valor vai aqui"
    header.CPF_CNPJ.data = "Ver que valor vai aqui"
    header.CODIGO_DE_INSCRICAO.data = "Ver que valor vai aqui"
    header.DATA_DE_GERACAO.data = "Ver que valor vai aqui"
    header.VERSAO_DO_ARQUIVO.data = "1"
    header.NUMERO_SEQUENCIAL.data = "1"
    lista_dados.push(header);

    
    result.recordset.forEach((k, i) => {
        let detalhe = JSON.parse(JSON.stringify(detalhe_model));

        detalhe.NOME_DEVEDOR.data = k.PreNome
        detalhe.CODIGO_DE_INSCRICAO.data = "Ver que valor vai aqui"
        detalhe.CPF_CNPJ.data = k.PreCPF
        detalhe.CHAVE_Pix.data = k.PreChavePix
        detalhe.TIPO_COBRANCA.data = "Ver que valor vai aqui"
        detalhe.COD__DE_OCORRENCIA.data = "Ver que valor vai aqui"
        detalhe.VALOR_ORIGINAL.data = k.PpeValor
        detalhe.NUMERO_SEQUENCIAL.data = (i + 2).toString()

        lista_dados.push(detalhe)
    })

    trailer.VALOR_TOTAL.data = valor_total.toString();
    trailer.QTDE_DE_REGISTROS.data = lista_dados.length.toString();
    trailer.NUMERO_SEQUENCIAL.data = lista_dados.length.toString();

    lista_dados.push(trailer);

    let txt_gerado;
    let nome_arquivo;
    try {
        txt_gerado = generateCNAB750(lista_dados);
    }catch(err){
        console.log("Erro na geração do CNAB750")
    }
    try {
        
        let hora_formatada = `${hora_req.getDate()}-${hora_req.getMonth()}-${hora_req.getFullYear()}_${hora_req.getHours()}-${hora_req.getMinutes()}-${hora_req.getSeconds()}-${hora_req.getMilliseconds()}`;
        console.log(hora_formatada)
        if(!fs.existsSync(path_registros)){
            fs.mkdirSync(path_registros);
        }
        nome_arquivo = `${path_registros}/${id}_${hora_formatada}.txt`;
        fs.writeFileSync(nome_arquivo, txt_gerado);
    } catch (err) {
        throw err
    }
    
    res.download(nome_arquivo);
    con.close();
})

app.listen(80)




//let data = fs.readFileSync('./CNBA750_example.txt', { encoding: 'utf8', flag: 'r' });
//console.log(parseToJson(data));