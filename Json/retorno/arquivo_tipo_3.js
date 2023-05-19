module.exports = {
    "__NOME__": "arquivo_tipo_3",
    /**
        * Significado:
        * `IDENTIFICAÇÃO DO REGISTRO TRANSAÇÃO`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `3`
        */
    "TIPO_DE_REGISTRO": {
        "data": "3",
        "type": "9",
        "len": 01
    },
    /**
        * Significado:
        * `CHAVE Pix`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * ``
        */
    "CHAVE_Pix": {
        "data": "",
        "type": "X",
        "len": 77
    },
    /**
        * Significado:
        * `IDENTIFICAÇÃO DO MOVIMENTO RETORNADO`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `NOTA 3`
        */
    "COD__DO_MOVIMENTO": {
        "data": "NOTA 3",
        "type": "9",
        "len": 02
    },
    /**
        * Significado:
        * `DATA DO MOVIMENTO RETORNADO`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `AAAAMMDD`
        */
    "DATA_DO_MOVIMENTO": {
        "data": "AAAAMMDD",
        "type": "9",
        "len": 08
    },
    /**
        * Significado:
        * `TRANSACTION ID (TXID)`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `NOTA 10`
        */
    "IDENTIFICADOR": {
        "data": "NOTA 10",
        "type": "X",
        "len": 35
    },
    /**
        * Significado:
        * `PIX LINK`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `NOTA 7`
        */
    "PIX_LINK": {
        "data": "NOTA 7",
        "type": "X",
        "len": 500
    },
    /**
        * Significado:
        * `LINK PARA PAYLOAD JSON (URL)`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `URL PRESENTE NO EMV DO QR CODE DINAMICO E QUE CONTÉM OS DADOS DA COBRANÇA`
        */
    "LOCATION": {
        "data": "URL PRESENTE NO EMV DO QR CODE DINAMICO E QUE CONTÉM OS DADOS DA COBRANÇA",
        "type": "X",
        "len": 77
    },
    /**
        * Significado:
        * `BRANCOS`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * ``
        */
    "BRANCOS": {
        "data": "",
        "type": "X",
        "len": 44
    },
    /**
        * Significado:
        * `NÚMERO SEQÜENCIAL DO REGISTRO NO ARQUIVO`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * ``
        */
    "NUMERO_SEQUENCIAL": {
        "data": "",
        "type": "9",
        "len": 06
    },
}