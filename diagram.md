´´´mermaid
erDiagram
    JOVEM ||--o{ RESPONSAVEL : possui
    JOVEM ||--o{ CONTATO : possui
    JOVEM ||--o{ DADOS_SAUDE : possui
    JOVEM ||--o{ PARTICIPACAO_ATIVIDADE : participa
    JOVEM ||--o{ PROGRESSAO : realiza
    JOVEM ||--o{ JOVEM_ESPECIALIDADE : conquista
    JOVEM ||--o{ JOVEM_INSG_INTERESSE : conquista
    JOVEM ||--o{ REQUISITO_CUMPRIDO : cumpre

    ESPECIALIDADE ||--o{ REQUISITO : possui
    INSIGNIA_INTERESSE ||--o{ REQUISITO : possui
    DISTINTIVO_PROG ||--o{ REQUISITO : possui

    ESPECIALIDADE ||--o{ JOVEM_ESPECIALIDADE : atribuida
    INSIGNIA_INTERESSE ||--o{ JOVEM_INSG_INTERESSE : atribuida

    JOVEM {
        int id
        string nome
        date nascimento
        string endereco
    }

    CONTATO {
        int id
        int jovem_id
        string telefone
        string email
    }

    RESPONSAVEL {
        int id
        int jovem_id
        string nome
        string telefone
        string email
    }

    DADOS_SAUDE {
        int id
        int jovem_id
        string tipo_sanguineo
        string alergias
    }

    PARTICIPACAO_ATIVIDADE {
        int id
        int jovem_id
        date data
        string atividade
    }

    PROGRESSAO {
        int id
        int jovem_id
        date data
        string nome
    }

    DISTINTIVO_PROG {
        int id
        string nome
    }

    INSIGNIA_INTERESSE {
        int id
        string nome
    }

    ESPECIALIDADE {
        int id
        string nome
        string area_conhecimento
        int total_requisitos
    }

    REQUISITO {
        int id
        int especialidade_id
        int insignia_id
        int distintivo_id
        string descricao
    }

    JOVEM_ESPECIALIDADE {
        int id
        int jovem_id
        int especialidade_id
        int nivel -- 1, 2 ou 3
    }

    JOVEM_INSG_INTERESSE {
        int id
        int jovem_id
        int insignia_id
    }

    REQUISITO_CUMPRIDO {
        int id
        int jovem_id
        int requisito_id
        date data_cumprimento
    }
