erDiagram
    JOVEM ||--o{ RESPONSAVEL : possui
    JOVEM ||--o{ DADO_SAUDE : tem
    JOVEM ||--o{ PARTICIPACAO_ATIVIDADE : participa
    JOVEM ||--o{ PROGRESSAO : realiza
    JOVEM ||--o{ ESPECIALIDADE_JOVEM : conquista
    JOVEM ||--o{ INSIGNIA_JOVEM : obtém
    
    ESPECIALIDADE ||--o{ REQUISITO_ESPECIALIDADE : contém
    ESPECIALIDADE ||--o{ ESPECIALIDADE_JOVEM : atribuída
    ESPECIALIDADE }|--|| AREA_CONHECIMENTO : pertence
    
    INSIGNIA ||--o{ REQUISITO_INSIGNIA : contém
    INSIGNIA ||--o{ INSIGNIA_JOVEM : concedida
    
    DISTINTIVO ||--o{ REQUISITO_DISTINTIVO : contém
    DISTINTIVO ||--o{ PROGRESSAO : alcançado
    
    JOVEM {
        int id PK
        string nome
        date data_nascimento
        string endereco
        string telefone
        string email
        date data_ingresso
    }
    
    RESPONSAVEL {
        int id PK
        int jovem_id FK
        string nome
        string telefone
        string email
        string parentesco
    }
    
    DADO_SAUDE {
        int id PK
        int jovem_id FK
        string tipo_sanguineo
        string alergias
        string medicamentos
        string restricoes
        string observacoes
    }
    
    PARTICIPACAO_ATIVIDADE {
        int id PK
        int jovem_id FK
        date data
        string nome_atividade
        string descricao
        string local
    }
    
    PROGRESSAO {
        int id PK
        int jovem_id FK
        int distintivo_id FK
        date data_progressao
    }
    
    ESPECIALIDADE {
        int id PK
        string nome
        string descricao
        int area_conhecimento_id FK
        int total_requisitos
    }
    
    AREA_CONHECIMENTO {
        int id PK
        string nome
    }
    
    REQUISITO_ESPECIALIDADE {
        int id PK
        int especialidade_id FK
        string descricao
    }
    
    ESPECIALIDADE_JOVEM {
        int id PK
        int jovem_id FK
        int especialidade_id FK
        int nivel
        date data_conquista
    }
    
    INSIGNIA {
        int id PK
        string nome
        string descricao
        int total_requisitos
    }
    
    REQUISITO_INSIGNIA {
        int id PK
        int insignia_id FK
        string descricao
    }
    
    INSIGNIA_JOVEM {
        int id PK
        int jovem_id FK
        int insignia_id FK
        date data_conquista
    }
    
    DISTINTIVO {
        int id PK
        string nome
        string descricao
        int ordem_progressao
    }
    
    REQUISITO_DISTINTIVO {
        int id PK
        int distintivo_id FK
        string descricao
    }
