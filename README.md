
# API Express Sequelize

Repositório do curso de API com Node.js, Express e Sequelize.

Este projeto é uma aplicação de backend que utiliza Node.js juntamente com Express e Sequelize para a criação de uma API relacionada a um sistema de gestão acadêmica.

## Instruções de Instalação

Para executar este projeto, você precisará ter Node.js instalado em sua máquina.

1. Clone o repositório:

```bash
git clone https://github.com/MarcusPinheiro37/nodejs-express-sequelize.git
cd nodejs-express-sequelize
```

2. Instale as dependências:

```bash
npm install
```

## Comandos Disponíveis

- `npm run dev`: Executa a aplicação em modo de desenvolvimento usando o Nodemon para reiniciar o servidor automaticamente sempre que houver alterações nos arquivos.

## Dependências

Este projeto utiliza as seguintes bibliotecas e frameworks:

- `express`: Framework para aplicações web Node.js.
- `sequelize`: ORM baseado em promessas para Node.js.
- `sequelize-cli`: Interface de linha de comando para o Sequelize.
- `sqlite3`: Driver de banco de dados SQLite3 para Node.js.
- `cors`: Pacote para fornecer um middleware Connect/Express que pode ser usado para habilitar CORS.
- `swagger-ui-express`: Permite servir arquivos de documentação da API OpenAPI/Swagger com o Express.
- `yamljs`: Conversor de YAML para JSON e vice-versa.

## Dev Dependencies

Dependências utilizadas durante o desenvolvimento:

- `nodemon`: Ferramenta que ajuda no desenvolvimento de sistemas com o Node.js reiniciando automaticamente a aplicação.
- `eslint`: Ferramenta de linting para JavaScript e JSX.

## Documentação da API

A documentação da API é gerada usando o Swagger, acessível em `/api-docs` quando a aplicação está em execução.

## Licença

Este projeto está licenciado sob a Licença ISC.
