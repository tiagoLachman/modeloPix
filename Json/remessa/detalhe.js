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
        * `TIPO DE INSCRIÇÃO RECEBEDOR`
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
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 2`
        */
    "TIPO": {
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
        * `IDENTIFICAÇÃO DA OCORRÊNCIA`
        * 
        * Obrigatório:
        * `SIM`
        * 
        * Valor padrão:
        * `NOTA 5`
        */
    "COD__DE_OCORRENCIA": {
        "data": "NOTA 5",
        "type": "9",
        "len": 02
    },
    /**
        * Significado:
        * `TRANSACTION ID (TXID)`
        * 
        * Obrigatório:
        * `NÃO`
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
        * `FLAG DE ACEITE APÓS VENCIMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `S OU N NOTA 13`
        */
    "ACEITE_APOS_VENCIMENTO": {
        "data": "S OU N NOTA 13",
        "type": "X",
        "len": 1
    },
    /**
        * Significado:
        * `VALOR ORIGINAL DO DOCUMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `CAMPO OBRIGATÓRIO APENAS PARA GERAÇÃO DE QR CODE DINÂMICO NOTA 14`
        */
    "VALOR_ORIGINAL": {
        "data": "CAMPO OBRIGATÓRIO APENAS PARA GERAÇÃO DE QR CODE DINÂMICO NOTA 14",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * `JUROS DO DOCUMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 15`
        */
    "VALOR_JUROS": {
        "data": "NOTA 15",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * `MULTA DO DOCUMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 16`
        */
    "VALOR_MULTA": {
        "data": "NOTA 16",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * `DESCONTO/ ABATIMENTO APLICADOS NO DOCUMENTO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 17`
        */
    "VALOR_DESCONTO /ABATIMENTO": {
        "data": "NOTA 17",
        "type": "9V9",
        "len": {
            "1": 15,
            "2": 2
        }
    },
    /**
        * Significado:
        * `FLAG ALTERAÇÃO DE VALOR`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `S OU N NOTA 18`
        */
    "PERMITE_ALTERACAO": {
        "data": "S OU N NOTA 18",
        "type": "X",
        "len": 01
    },
    /**
        * Significado:
        * `CÓDIGO INSCRIÇÃO DO PAGADOR`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 1`
        */
    "CODIGO_DE_INSCRICAO_DEVEDOR": {
        "data": "NOTA 1",
        "type": "9",
        "len": 02
    },
    /**
        * Significado:
        * `CPF CNPJ DO USUÁRIO PAGADOR`
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
        * `NOME PAGADOR USUÁRIO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 19`
        */
    "NOME_DEVEDOR": {
        "data": "NOTA 19",
        "type": "X",
        "len": 140
    },
    /**
        * Significado:
        * `SOLICITAÇÃO AO PAGADOR (DINÂMICO) OU CAMPO TEXTO LIVRE PARA ESTÁTICO`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `NOTA 20`
        */
    "SOLICITACAO_AO_PAGADOR_OU_CAMPO_TEXTO_LIVRE": {
        "data": "NOTA 20",
        "type": "X",
        "len": 140
    },
    /**
        * Significado:
        * `PERMITE MULTIPLOS PAGAMENTOS DO QR CODE`
        * 
        * Obrigatório:
        * `NÃO`
        * 
        * Valor padrão:
        * `S OU N PERMITE MULTIPLOS PAGAMENTOS DO QR CODE COM ALTERAÇÃO APENAS DO PAYLOAD`
        */
    "MULTIPLOS_PAGAMENTOS": {
        "data": "S OU N PERMITE MULTIPLOS PAGAMENTOS DO QR CODE COM ALTERAÇÃO APENAS DO PAYLOAD",
        "type": "X",
        "len": 01
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
        "len": 134
    },
    /**
        * Significado:
        * `No. SEQUENCIAL DO REGISTRO`
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