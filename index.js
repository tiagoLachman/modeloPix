const fs = require('fs');
const app = require("express")()
const db_config = require('./db/sql_server');
const mssql = require("mssql")

const parseToJson = require("./CNBA750/parseCnabToJson")
const generateCNAB750 = require("./CNBA750/generator")


//Dados em json
const header_model = require("./Json/remessa/header");
const detalhe_model = require("./Json/remessa/detalhe");
const detalhe_2_model = require("./Json/remessa/arquivo_tipo_2");
const trailer_model = require("./Json/remessa/trailer");





/*Adicionar dados para geração do CNAB750*/




app.get("/", async (req, res) => {
    let cont_num_sequencial = 1;
    let valor_total = 0;


    let con = await mssql.connect(db_config);
    const result = await mssql.query(`
        select p.prenome, p.prechavepix
        from pedidocliente pc 
        join pedidopremiado pp on pp.pecid = pc.pecid
        join premiado p on p.preid = pp.preid
        join cliente c on c.cliid = pc.cliid
        where pc.PecID = 23146
    `)
    let header = header_model;
    let lista_dados = [];
    let trailer = trailer_model;

    header.ISPB_PARTICIPANTE.data = "Ver que valor vai aqui"
    header.CPF_CNPJ.data = "Ver que valor vai aqui"
    header.CODIGO_DE_INSCRICAO.data = "Ver que valor vai aqui"
    header.DATA_DE_GERACAO.data = "Ver que valor vai aqui"
    header.VERSAO_DO_ARQUIVO.data = "1"
    header.NUMERO_SEQUENCIAL.data = cont_num_sequencial.toString()
    lista_dados.push(header);


    cont_num_sequencial++;
    let detalhe = detalhe_model;
    result.recordset.forEach((k)=>{
        detalhe = detalhe_model;
        /*
        detalhe.CODIGO_DE_INSCRICAO.data = "Ver que valor vai aqui"
        detalhe.CPF_CNPJ.data = k.PreCPF//premiado.PreCPF
        detalhe.CHAVE_Pix.data = k.PreChavePix//premiado.PreChavePix
        detalhe.TIPO_COBRANCA.data = "Ver que valor vai aqui"
        detalhe.COD__DE_OCORRENCIA.data = "Ver que valor vai aqui"
        detalhe.VALOR_ORIGINAL.data = k.PpeValor//pp.PpeValor?
        */
        detalhe.NUMERO_SEQUENCIAL.data = cont_num_sequencial.toString()
        lista_dados.push(detalhe)
        console.log(detalhe.NUMERO_SEQUENCIAL.data)
        cont_num_sequencial++;
    })
    console.log('cont_num_sequencial triler', cont_num_sequencial);

    trailer.VALOR_TOTAL.data = valor_total.toString();
    trailer.QTDE_DE_REGISTROS.data = cont_num_sequencial.toString();
    trailer.NUMERO_SEQUENCIAL.data = cont_num_sequencial.toString();
    
    //console.log(lista_dados[1].NUMERO_SEQUENCIAL.data);
    lista_dados.push(trailer);

    let cont_esperado = 1;
    lista_dados.forEach((k)=>{
        
        console.log(`Esperado:${cont_esperado}  Recebido:${k.NUMERO_SEQUENCIAL.data}`)
        cont_esperado++;
    })
    res.send(lista_dados);


    con.close();
})

app.listen(80)




//let obj_array = [header, detalhe, detalhe, trailer];
//let txt_generated = generateCNAB750(obj_array);
//fs.writeFileSync('txt_output.txt', txt_generated);


//let data = fs.readFileSync('./CNBA750_example.txt', { encoding: 'utf8', flag: 'r' });
//console.log(parseToJson(data));