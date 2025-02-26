# Rick and Morty Characters

Este projeto consiste em um frontend React para exibição de personagens da série Rick and Morty, juntamente com uma API backend.

## Visão Geral

O frontend React foi desenvolvido para consumir dados da API, permitindo aos usuários visualizar informações sobre os personagens, incluindo nome, imagem, status e localização. A API backend fornece os dados necessários para o funcionamento do frontend.

## Tecnologias Utilizadas

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript
- **Banco de Dados:** PostgreSQL

## Executando o Projeto

Para executar este projeto, você precisará clonar ambos os repositórios (frontend e backend) e seguir as instruções abaixo:

### Backend

1. Clone o repositório da API:

```bash
git clone https://github.com/cadu1324/teste-desenvolvimento-back-end.git
```

2. Acesse o diretório da API:

```bash
cd teste-desenvolvimento-back-end
```

3. Instale as dependências:

```bash
npm install
```

4. Configure o banco de dados:
   - Certifique-se de ter o PostgreSQL instalado e em execução.
   - Crie um banco de dados com o nome de sua preferência.
   - Configure as variáveis de ambiente no arquivo `.env` com as informações de conexão do seu banco de dados.

5. Crie a tabela `user` com a seguinte estrutura:

```sql
CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

6. Inicie a API:

```bash
npm run dev
```

### Frontend

1. Clone o repositório do frontend:

```bash
git clone https://github.com/cadu1324/teste-desenvolvimento-front-end.git
```

2. Acesse o diretório do frontend:

```bash
cd teste-desenvolvimento-front-end
```

3. Instale as dependências:

```bash
npm install
```

4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione a URL da API backend:

```bash
REACT_APP_API_URL=http://localhost:4002
```

5. Inicie o frontend:

```bash
npm start
```

## Observações

- Certifique-se de que a API backend esteja em execução antes de iniciar o frontend.
- O frontend irá consumir os dados da API e exibir os personagens na tela.
- Este projeto foi desenvolvido com fins didáticos e pode não estar pronto para produção.

## Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

Este projeto está sob a licença MIT.

## Autor

Seu Nome

## Link para a Aplicação Web

[https://cadu1324.github.io/teste-desenvolvimento-front-end](https://cadu1324.github.io/teste-desenvolvimento-front-end)

