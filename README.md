# API de Monitoramento de Medidas 🌡️💧

Esta é uma API desenvolvida com **Node.js** e **Express**, projetada para monitorar dados como temperaturas e umidades. Utiliza **MongoDB** como banco de dados e inclui autenticação de usuários. O deploy foi realizado na [Vercel](https://vercel.com/).

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** e **Express** para criação da API.
- **MongoDB** como banco de dados NoSQL.
- **dotenv** para gerenciamento de variáveis de ambiente.
- **body-parser** e **cors** para manipulação de requisições e habilitação de CORS.
- **Vercel** para deploy do projeto.

---

## 🔧 Funcionalidades

- **Autenticação de Usuários**:
  - Registro e login com autenticação JWT.
- **Consulta de Dados**:
  - Busca de dados de temperatura e umidade com base em filtros.
- **Banco de Dados**:
  - Conexão com MongoDB e manipulação da coleção de medidas.

---

## 📂 Estrutura do Projeto

```plaintext
.
├── models/
│   └── Medidas.js          # Modelo para os dados de medidas
├── routes/
│   └── authRoutes.js       # Rotas de autenticação
├── .env                    # Variáveis de ambiente (não incluído no repositório)
├── server.js               # Arquivo principal da API
└── README.md               # Documentação do projeto