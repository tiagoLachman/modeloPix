const fs = require('fs');
const app = require("express")()

const db_config = require('./db/sql_config');
const sql = require("mssql")

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

//Caminho onde os registros bancarios ficam
const path_registros = "./registroBancario"

const parseCnabToJson = require("./CNBA750/parseCnabToJson")
const generateCNAB750 = require("./CNBA750/generator")


//Dados em json
const header_model = require("./Json/remessa/header");
const detalhe_model = require("./Json/remessa/detalhe");
const detalhe_2_model = require("./Json/remessa/arquivo_tipo_2");
const trailer_model = require("./Json/remessa/trailer");


app.get("/:id", async (req, res) => {
    //Hora da requisição
    let hora_req = new Date();


    const id = req.params.id;
    let con, result;
    try {
        //Conexão e aquisição dos dados necessarios
        con = await sql.connect(db_config);
        result = await sql.query(`
            select pp.PpeValor, p.PreChavePix, p.PreCPF, p.PreNome
            from pedidocliente pc 
            join pedidopremiado pp on pp.pecid = pc.pecid
            join premiado p on p.preid = pp.preid
            join cliente c on c.cliid = pc.cliid
            where pc.PecID = ${id}
        `)
    } catch (err) {
        let mensagem = err;
        if (err.code == "ELOGIN") {
            mensagem = "erro no login";
        } else if (err.code == "EREQUEST") {
            mensagem = "query invalida";
        }

        if (err.code != "ELOGIN") {
            con.close();
        }
        console.log(mensagem)
        res.send(mensagem)
        return;
    }

    //Variaveis para os dados
    let header = JSON.parse(JSON.stringify(header_model));
    let trailer = JSON.parse(JSON.stringify(trailer_model));
    let lista_dados = [];

    //Passando os dados
    //campos com XXXXX... precisam ser avaliados
    //para ver qual valor vai aí
    header.ISPB_PARTICIPANTE.data = "XXXXXXXXXXXXXXXXXXXX"
    header.CPF_CNPJ.data = "XXXXXXXXXXXXXXXXXXXX"
    header.CODIGO_DE_INSCRICAO.data = "XXXXXXXXXXXXXXXXXXXX"
    header.DATA_DE_GERACAO.data = "XXXXXXXXXXXXXXXXXXXX"
    header.VERSAO_DO_ARQUIVO.data = "1"
    header.NUMERO_SEQUENCIAL.data = "1"

    lista_dados.push(header);

    let valor_total = 0;
    result.recordset.forEach((k, i) => {
        let detalhe = JSON.parse(JSON.stringify(detalhe_model));

        detalhe.NOME_DEVEDOR.data = k.PreNome
        detalhe.CODIGO_DE_INSCRICAO.data = "XXXXXXXXXXXXXXXXXXXX"
        detalhe.CPF_CNPJ.data = k.PreCPF
        detalhe.CHAVE_Pix.data = k.PreChavePix
        detalhe.TIPO_COBRANCA.data = "XXXXXXXXXXXXXXXXXXXX"
        detalhe.COD__DE_OCORRENCIA.data = "XXXXXXXXXXXXXXXXXXXX"
        detalhe.VALOR_ORIGINAL.data = k.PpeValor
        detalhe.NUMERO_SEQUENCIAL.data = (i + 2).toString()

        valor_total += k.PpeValor;

        lista_dados.push(detalhe)
    })

    trailer.VALOR_TOTAL.data = valor_total.toString();
    trailer.QTDE_DE_REGISTROS.data = lista_dados.length.toString();
    trailer.NUMERO_SEQUENCIAL.data = lista_dados.length.toString();

    lista_dados.push(trailer);

    let path_arquivo;

    try {
        //Geração do CNAB750
        let txt_gerado = generateCNAB750(lista_dados);
        //Horario para o armazenamento no registro
        let hora_formatada = `${hora_req.getDate()}-${hora_req.getMonth()}-${hora_req.getFullYear()}_${hora_req.getHours()}-${hora_req.getMinutes()}-${hora_req.getSeconds()}-${hora_req.getMilliseconds()}`;
        if (!fs.existsSync(path_registros)) {
            fs.mkdirSync(path_registros);
        }
        path_arquivo = `${path_registros}/${id}_${hora_formatada}.txt`;
        fs.writeFileSync(path_arquivo, txt_gerado);
    } catch (err) {
        let mensagem = err;

        console.log(mensagem);
        res.send(mensagem);
        return;
    }

    //Envio do arquivo gerado para o usuario
    res.download(path_arquivo);
})

app.post("/upload", upload.single('arquivo'), (req, res) => {

    //Lê o arquivo enviado pelo usuario
    let raw_data = fs.readFileSync(req.file.path, "utf-8");

    //A resposta enviada para ele são os dados já processados
    res.json(parseCnabToJson(raw_data))

    //Apaga o arquivo que o usuario enviou
    fs.rmSync(req.file.path);
})


app.listen(80)