module.exports={
/**
    * Significado:
    * `IDENTIFICAÇÃO DO REGISTRO HEADER`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * `0`
    */
    "TIPO_DE_REGISTRO": {
         "data": "0",
         "type": "9",
         "len": 01
    },
/**
    * Significado:
    * `TIPO DE OPERAÇÃO - REMESSA`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * `1`
    */
    "OPERACAO": {
         "data": "1",
         "type": "9",
         "len": 01
    },
/**
    * Significado:
    * `IDENTIFICAÇÃO POR EXTENSO DO MOVIMENTO`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * `REMESSA`
    */
    "LITERAL_DE_REMESSA": {
         "data": "REMESSA",
         "type": "X",
         "len": 07
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
    "CODIGO_DO_SERVICO": {
         "data": "2",
         "type": "9",
         "len": 02
    },
/**
    * Significado:
    * `IDENTIFICAÇÃO POR EXTENSO DO TIPO DE SERVIÇO`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * `PIX`
    */
    "LITERAL_DE_SERVICO": {
         "data": "PIX",
         "type": "X",
         "len": 15
    },
/**
    * Significado:
    * `PSP DO USUARIO RECEBEDOR`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * `Deve ser preenchido com ISPB do PSP Recebedor`
    */
    "ISPB_PARTICIPANTE": {
         "data": "Deve ser preenchido com ISPB do PSP Recebedor",
         "type": "X",
         "len": 08
    },
/**
    * Significado:
    * `TIPO DE INSCRIÇÃO`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * `NOTA 1`
    */
    "CODIGO_DE_INSCRICAO": {
         "data": "NOTA 1",
         "type": "9",
         "len": 02
    },
/**
    * Significado:
    * `CPF CNPJ DO USUARIO RECEBEDOR`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * `Identificação única do usuário recebedor`
    */
    "CPF_CNPJ": {
         "data": "Identificação única do usuário recebedor",
         "type": "9",
         "len": 14
    },
/**
    * Significado:
    * `AGÊNCIA DO USUARIO RECEBEDOR`
    * 
    * Obrigatório:
    * `NÃO`
    * 
    * Valor padrão:
    * `Agência do usuário recebedor.`
    */
    "AGENCIA": {
         "data": "Agência do usuário recebedor.",
         "type": "9",
         "len": 04
    },
/**
    * Significado:
    * `CONTA USUÁRIO RECEBEDOR`
    * 
    * Obrigatório:
    * `NÃO`
    * 
    * Valor padrão:
    * `Número da conta transacional usuário
recebedor`
    */
    "CONTA": {
         "data": "Número da conta transacional usuário recebedor",
         "type": "9",
         "len": 20
    },
/**
    * Significado:
    * `TIPO CONTA USUÁRIO RECEBEDOR`
    * 
    * Obrigatório:
    * `NÃO`
    * 
    * Valor padrão:
    * `NOTA 2`
    */
    "TIPO_CONTA": {
         "data": "NOTA 2",
         "type": "X",
         "len": 04
    },
/**
    * Significado:
    * `CHAVE Pix`
    * 
    * Obrigatório:
    * `NÃO`
    * 
    * Valor padrão:
    * `NOTA 3`
    */
    "CHAVE_Pix": {
         "data": "NOTA 3",
         "type": "X",
         "len": 77
    },
/**
    * Significado:
    * `DATA DE GERAÇÃO DO ARQUIVO`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * `AAAAMMDD`
    */
    "DATA_DE_GERACAO": {
         "data": "AAAAMMDD",
         "type": "9",
         "len": 08
    },
/**
    * Significado:
    * `CÓDIGO DO CONVENIO`
    * 
    * Obrigatório:
    * `NÃO`
    * 
    * Valor padrão:
    * ``
    */
    "CODIGO_DO_CONVENIO": {
         "data": "",
         "type": "X",
         "len": 30
    },
/**
    * Significado:
    * `EXCLUSIVO PSP RECEBEDOR`
    * 
    * Obrigatório:
    * `NÃO`
    * 
    * Valor padrão:
    * `Campo para uso exclusivo do PSP recebedor`
    */
    "EXCLUSIVO_PSP_RECEBEDOR": {
         "data": "Campo para uso exclusivo do PSP recebedor",
         "type": "X",
         "len": 60
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
         "len": 488
    },
/**
    * Significado:
    * `VERSAO DO LAYOUT DO ARQUIVO`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * `1
CONTEÚDO PODE SER ALTERADO DE ACORDO COM VERSÃO DO
LAYOUT`
    */
    "VERSAO_DO_ARQUIVO": {
         "data": "1 CONTEÚDO PODE SER ALTERADO DE ACORDO COM VERSÃO DO LAYOUT",
         "type": "9",
         "len": 3
    },
/**
    * Significado:
    * `NÚMERO SEQÜENCIAL DO ARQUIVO`
    * 
    * Obrigatório:
    * `SIM`
    * 
    * Valor padrão:
    * `1`
    */
    "NUMERO_SEQUENCIAL": {
         "data": "1",
         "type": "9",
         "len": 06
    },
}