# API de Gerenciamento de Produtos

## Descrição Geral

Esta API permite o gerenciamento de produtos, possibilitando operações de cadastro, consulta, atualização e remoção de produtos em um sistema. É ideal para aplicações de e-commerce, inventário ou qualquer solução que exija controle de produtos.

## Objetivos

- Facilitar o gerenciamento de produtos de forma simples e segura.
- Permitir integração com sistemas externos.
- Garantir escalabilidade e manutenção eficiente.

## Funcionalidades

- **Listar produtos**: Recupera todos os produtos cadastrados.
- **Consultar produto por ID**: Busca detalhes de um produto específico.
- **Cadastrar produto**: Adiciona um novo produto ao sistema.
- **Atualizar produto**: Modifica informações de um produto existente.
- **Remover produto**: Exclui um produto do sistema.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB (ou outro banco de dados)
- JavaScript (ou TypeScript)
- RESTful API

## Endpoints

### 1. Listar Produtos

- **GET** `/produtos`

**Exemplo de resposta:**
```json
[
    {
        "id": "1",
        "nome": "Notebook",
        "preco": 3500.00,
        "quantidade": 10
    },
    {
        "id": "2",
        "nome": "Mouse",
        "preco": 50.00,
        "quantidade": 100
    }
]
```

### 2. Consultar Produto por ID

- **GET** `/produtos/{id}`

**Exemplo de resposta:**
```json
{
    "id": "1",
    "nome": "Notebook",
    "preco": 3500.00,
    "quantidade": 10
}
```

### 3. Cadastrar Produto

- **POST** `/produtos`

**Exemplo de requisição:**
```json
{
    "nome": "Teclado",
    "preco": 120.00,
    "quantidade": 50
}
```

**Exemplo de resposta:**
```json
{
    "id": "3",
    "nome": "Teclado",
    "preco": 120.00,
    "quantidade": 50
}
```

### 4. Atualizar Produto

- **PUT** `/produtos/{id}`

**Exemplo de requisição:**
```json
{
    "nome": "Teclado Mecânico",
    "preco": 200.00,
    "quantidade": 40
}
```

**Exemplo de resposta:**
```json
{
    "id": "3",
    "nome": "Teclado Mecânico",
    "preco": 200.00,
    "quantidade": 40
}
```

### 5. Remover Produto

- **DELETE** `/produtos/{id}`

**Exemplo de resposta:**
```json
{
    "mensagem": "Produto removido com sucesso."
}
```

## Observações

- Todas as requisições e respostas utilizam o formato JSON.
- Certifique-se de enviar os dados obrigatórios ao cadastrar ou atualizar um produto.
- Para autenticação e autorização, consulte a documentação de segurança (se aplicável).

---