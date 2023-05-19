module.exports = {
    "__NOME__": "trailer",
    /**
        * Significado:
        * `IDENTIFICAÇÃO DO REGISTRO TRAILER`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `9`
        */
    "TIPO_DE_REGISTRO": {
        "data": "9",
        "type": "9",
        "len": 01
    },
    /**
        * Significado:
        * `IDENTIFICAÇÃO DE ARQUIVO RETORNO`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `2`
        */
    "CODIGO_DE_RETORNO": {
        "data": "2",
        "type": "9",
        "len": 01
    },
    /**
        * Significado:
        * `IDENTIFICAÇÃO DO TIPO DE SERVIÇO`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `2`
        */
    "CODIGO_DE_SERVICO": {
        "data": "2",
        "type": "9",
        "len": 02
    },
    /**
        * Significado:
        * `ISPB`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * ``
        */
    "ISPB": {
        "data": "",
        "type": "X",
        "len": 08
    },
    /**
        * Significado:
        * `CÓDIGOS DE ERRO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 23`
        */
    "CODIGOS_DE_ERRO": {
        "data": "NOTA 23",
        "type": "X",
        "len": 30
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
        "len": 687
    },
    /**
        * Significado:
        * `QUANTIDADE DE REGISTROS DE TRANSAÇÃO`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * ``
        */
    "QTDE_DE_DETALHES": {
        "data": "",
        "type": "9",
        "len": 15
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