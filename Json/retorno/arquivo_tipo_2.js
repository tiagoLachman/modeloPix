module.exports={
/**
    * Significado:
    * `IDENTIFICAÇÃO DO REGISTRO TRANSAÇÃO`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * `2`
    */
    "TIPO_DE_REGISTRO": {
         "data": "2",
         "type": "9",
         "len": 01
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
    * `NOME DO CAMPO`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * ``
    */
    "NOME": {
         "data": "",
         "type": "X",
         "len": 50
    },
/**
    * Significado:
    * `CONTEÚDO DO CAMPO`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * ``
    */
    "VALOR": {
         "data": "",
         "type": "X",
         "len": 200
    },
/**
    * Significado:
    * `NOME DO CAMPO`
    * 
    * Obrigatório:
    * `NÃO`
    * 
    * Valor padrão:
    * ``
    */
    "NOME_1": {
         "data": "",
         "type": "X",
         "len": 50
    },
/**
    * Significado:
    * `CONTEÚDO DO CAMPO`
    * 
    * Obrigatório:
    * `NÃO`
    * 
    * Valor padrão:
    * ``
    */
    "VALOR_1": {
         "data": "",
         "type": "X",
         "len": 200
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
         "len": 202
    },
/**
    * Significado:
    * `No. SEQUENCIAL DO REGISTRO DETALHE (1) DO ARQUIVO`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * ``
    */
    "NUMERO_SEQUENCIAL_DETALHE": {
         "data": "",
         "type": "9",
         "len": 06
    },
/**
    * Significado:
    * `No. SEQUENCIAL DO REGISTRO INFORMAÇÕES ADICIONAIS (2) DO ARQUIVO`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * ``
    */
    "NUMERO_SEQUENCIAL_INFOADICIONAIS": {
         "data": "",
         "type": "9",
         "len": 06
    },
}