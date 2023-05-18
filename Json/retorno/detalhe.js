module.exports = {
    /**
        * Significado:
        * `IDENTIFICAÇÃO DO REGISTRO TRANSAÇÃO`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `1`
        */
    "TIPO_DE_REGISTRO": {
        "data": "1",
        "type": "9",
        "len": 01
    },
    /**
        * Significado:
        * `PSP DO USUARIO RECEBEDOR`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `Deve ser preenchido com ISPB do PSP`
        */
    "ISPB_PARTICIPANTE": {
        "data": "Deve ser preenchido com ISPB do PSP",
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
        * `SIM`
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
        * `SIM`
        * 
        * Valor padrão:
        * `Número da conta transacional usuário recebedor`
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
        * `SIM`
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
        * `SIM`
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
        * `TIPO COBRANÇA`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `NOTA 4`
        */
    "TIPO_COBRANCA": {
        "data": "NOTA 4",
        "type": "X",
        "len": 01
    },
    /**
        * Significado:
        * `IDENTIFICAÇÃO DO MOVIMENTO RETORNADO`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `NOTA 6`
        */
    "COD__DO_MOVIMENTO": {
        "data": "NOTA 6",
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
        * `TEMPO DE EXPIRAÇÃO DO QR CODE EM SEGUNDOS`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `DEFAULT 86400 (24 horas) Tempo de vida da cobrança, especificado em segundos a partir da data de criação NOTA 11`
        */
    "EXPIRACAO": {
        "data": "DEFAULT 86400 (24 horas) Tempo de vida da cobrança, especificado em segundos a partir da data de criação NOTA 11",
        "type": "9",
        "len": 15
    },
    /**
        * Significado:
        * `DATA DE VENCIMENTO DO PAGAMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `AAAAMMDD NOTA 12`
        */
    "DATA_DE_VENCIMENTO": {
        "data": "AAAAMMDD NOTA 12",
        "type": "9",
        "len": 08
    },
    /**
        * Significado:
        * `VALOR ORIGINAL DO DOCUMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `VALOR OBRIGATÓRIO APENAS PARA QR CODE DINÃMICO NOTA 13`
        */
    "VALOR_ORIGINAL": {
        "data": "VALOR OBRIGATÓRIO APENAS PARA QR CODE DINÃMICO NOTA 13",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * `VALOR DE JUROS PAGOS PELO PAGADOR`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 14`
        */
    "VALOR_JUROS": {
        "data": "NOTA 14",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * `VALOR DA MULTA PAGA PELO PAGADOR`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 15`
        */
    "VALOR_MULTA": {
        "data": "NOTA 15",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * `VALOR DO DESCONTO / ABATIMENTO CONCEDIDO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 16`
        */
    "VALOR_DESCONTO/_ABATIMENTO": {
        "data": "NOTA 16",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * `VALOR CALCULADO PARA PAGAMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `VALOR CALCULADO PARA PAGAMENTO NOTA 21`
        */
    "VALOR_FINAL": {
        "data": "VALOR CALCULADO PARA PAGAMENTO NOTA 21",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * `VALOR LANÇADO EM CONTA CORRENTE`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `VALOR PAGO`
        */
    "VALOR_PAGO": {
        "data": "VALOR PAGO",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * `VALOR DA TARIFA`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `TARIFA COBRADA`
        */
    "TARIFA_DE_COBRANCA": {
        "data": "TARIFA COBRADA",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * `CÓDIGO INSCRIÇÃO DO PAGADOR CADASTRADO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 1`
        */
    "CODIGO_DE_INSCRICAO DEVEDOR": {
        "data": "NOTA 1",
        "type": "9",
        "len": 02
    },
    /**
        * Significado:
        * `CPF CNPJ DO PAGADOR CADASTRADO NA GERAÇÃO DO QR CODE`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * ``
        */
    "CPFCNPJ_DEVEDOR": {
        "data": "",
        "type": "9",
        "len": 14
    },
    /**
        * Significado:
        * `MENSAGEM ENVIADA PELO CLIENTE QUE EFETUOU O PAGAMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 22`
        */
    "MENSAGEM_PAGADOR_FINAL": {
        "data": "NOTA 22",
        "type": "X",
        "len": 140
    },
    /**
        * Significado:
        * `CÓDIGO INSCRIÇÃO DO CLIENTE QUE EFETUOU O PAGAMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 1`
        */
    "CODIGO_DE INSCRICAO_PAGADOR_FINAL": {
        "data": "NOTA 1",
        "type": "9",
        "len": 02
    },
    /**
        * Significado:
        * `CPF CNPJ DO CLIENTE QUE EFETUOU O PAGAMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * ``
        */
    "CPFCNPJ_PAGADOR_FINAL": {
        "data": "",
        "type": "9",
        "len": 14
    },
    /**
        * Significado:
        * `NOME CLIENTE QUE EFETUOU O PAGAMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 19`
        */
    "NOME_PAGADOR_FINAL": {
        "data": "NOTA 19",
        "type": "X",
        "len": 140
    },
    /**
        * Significado:
        * `MEIO PELO QUAL O PAGTO EFETUADO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 09`
        */
    "COD__DE_LIQUIDACAO": {
        "data": "NOTA 09",
        "type": "X",
        "len": 02
    },
    /**
        * Significado:
        * `ID FIM A FIM DA TRANSAÇÃO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `Esse campo transita nas mensagens de recebimento dos QR Codes e transferências. Pode ser utilizado e outras consultas ou na devolução.`
        */
    "END_TO_END_ID": {
        "data": "Esse campo transita nas mensagens de recebimento dos QR Codes e transferências. Pode ser utilizado e outras consultas ou na devolução.",
        "type": "X",
        "len": 35
    },
    /**
        * Significado:
        * `CÓDIGOS DE ERRO DOS COMANDOS REJEITADOS`
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
        * `COMPLEMENTO DE REGISTRO`
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
        "len": 47
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