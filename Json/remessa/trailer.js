module.exports = {
    /**
        * Significado:
        * ``
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
        * ``
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
        "len": 711
    },
    /**
        * Significado:
        * ``
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `SOMATÓRIA DO CAMPO VALOR ORIGINAL DO
    DETALHE`
        */
    "VALOR_TOTAL": {
        "data": "SOMATÓRIA DO CAMPO VALOR ORIGINAL DO DETALHE",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * ``
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `SOMATÓRIA DA QUANTIDADE DE
    REGISTROS DO ARQUIVO`
        */
    "QTDE_DE_REGISTROS": {
        "data": "SOMATÓRIA DA QUANTIDADE DE REGISTROS DO ARQUIVO",
        "type": "9",
        "len": 15
    },
    /**
        * Significado:
        * ``
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