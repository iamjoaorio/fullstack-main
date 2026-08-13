# Fullstack Main

Projeto desenvolvido durante o primeiro semestre do curso de **Ciência de Dados e Inteligência Artificial na FEI**, reunindo os laboratórios práticos da disciplina de **Fullstack Development**.

O projeto evolui desde páginas estáticas e JavaScript no navegador até a construção de um servidor com **Node.js, Express, EJS e MongoDB**, incluindo operações completas de CRUD.

---

## 👨‍💻 Autor

**João Victor Rio**

🎓 Estudante de Ciência de Dados e Inteligência Artificial — FEI
📚 1º semestre

---

## 🚀 Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Canvas 2D
* Node.js
* Express.js
* EJS
* MongoDB
* MongoDB Atlas
* Git e GitHub

---

## 📂 Estrutura do projeto

```text
fullstack-main/
│
├── public/
│   ├── lab4/
│   ├── lab5/
│   ├── lab6/
│   ├── lab9/
│   ├── lab10/
│   ├── projects.html
│   └── style.css
│
├── views/
│   ├── resposta.ejs
│   ├── blog.ejs
│   └── carros.ejs
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# 🧪 Laboratórios

## Lab 4 — JavaScript

Desenvolvimento de um **Jogo de Adivinhação** utilizando JavaScript.

### Conceitos utilizados

* `Math.random()`
* `Math.floor()`
* Estruturas `if / else`
* Manipulação do DOM
* Eventos
* Alteração dinâmica de estilos

---

## Lab 5 — Canvas

Desenvolvimento de desenhos utilizando o elemento HTML5 `<canvas>`.

### Conceitos utilizados

* Canvas 2D
* `fillRect()`
* `strokeRect()`
* `arc()`
* `moveTo()`
* `lineTo()`
* Funções JavaScript para desenho
* Coordenadas X e Y

O laboratório trabalha a composição de diferentes formas geométricas para construir figuras dentro de um canvas de **300 × 300 pixels**.

---

## Lab 6 — Animação e Interatividade

Desenvolvimento de uma animação utilizando Canvas e interação com o mouse.

### Conceitos utilizados

* `requestAnimationFrame()`
* `clearRect()`
* `mousemove`
* Objeto `Image`
* Coordenadas do mouse
* Limitação da imagem dentro do Canvas
* Animação em tempo real

---

## Lab 7 — Servidor Estático

Criação de um servidor Web utilizando **Node.js e Express**.

O servidor é responsável por disponibilizar as páginas desenvolvidas nos laboratórios anteriores.

### Conceitos utilizados

* Node.js
* Express
* `express.static()`
* Servidor HTTP
* Rotas
* Estrutura de arquivos `public`
* Acesso por endereço IP em rede local

---

## Lab 8 — Cliente-Servidor e EJS

Evolução do servidor para trabalhar com comunicação entre cliente e servidor utilizando **EJS**.

### Funcionalidades

* Sistema de Login
* Sistema de Cadastro
* Formulários com método POST
* Renderização dinâmica
* Comunicação entre Frontend e Backend
* Templates EJS

---

## Lab 9 — Banco de Dados

Integração do servidor com **MongoDB Atlas** para criação de um sistema de Blog.

### Banco de dados

```text
Database: blogDB
Collection: posts
```

### Funcionalidades

* Cadastro de posts
* Listagem de posts
* Persistência no MongoDB
* Renderização dinâmica com EJS

### Operações

```text
CREATE → insertOne()
READ   → find()
```

---

# 🚗 Lab 10 — CRUD de Concessionária

Desenvolvimento de um sistema completo de gerenciamento de veículos utilizando MongoDB.

O sistema permite cadastrar usuários e gerenciar o estoque de carros de uma concessionária.

## Banco de dados

```text
Database: concessionariaDB
```

### Collections

```text
usuarios
carros
```

---

## 👤 Usuários

O sistema possui autenticação básica utilizando:

* Nome
* Login
* Senha

### Rotas

```text
GET  /cadastro-usuario
POST /salvar-usuario

GET  /login-usuario
POST /logar-usuario
```

---

## 🚘 Gerenciamento de carros

O sistema implementa um CRUD completo.

### CREATE

Cadastro de novos veículos:

```text
Marca
Modelo
Ano
Quantidade disponível
```

### READ

Listagem de todos os veículos cadastrados.

```text
GET /carros
```

### UPDATE

Atualização dos dados de um veículo.

```text
POST /atualizar-carro/:id
```

### DELETE

Remoção de veículos utilizando o `ObjectId` do MongoDB.

```text
POST /remover-carro/:id
```

### VENDA

O sistema possui uma regra de negócio para venda de veículos.

```text
POST /vender-carro/:id
```

A cada venda, a quantidade disponível é reduzida em 1.

Quando o estoque chega a zero, o sistema exibe:

```text
ESGOTADO
```

e não permite que a quantidade fique negativa.

---

# 🖥️ Como executar o projeto

## 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

## 2. Entrar na pasta

```bash
cd fullstack-main
```

## 3. Instalar as dependências

```bash
npm install
```

As principais dependências utilizadas são:

```text
express
ejs
mongodb
```

## 4. Iniciar o servidor

```bash
node index.js
```

O servidor será iniciado na porta:

```text
3000
```

Acesse:

```text
http://localhost:3000
```

---

# 🌐 Principais rotas

| Página              | URL                    |
| ------------------- | ---------------------- |
| Projetos            | `/`                    |
| Login               | `/login`               |
| Cadastro            | `/cadastra`            |
| Lab 4               | `/lab4/guess.html`     |
| Lab 5               | `/lab5/Canvas.html`    |
| Lab 6               | `/lab6/Animation.html` |
| Cadastro de Post    | `/cadastrar_post`      |
| Blog                | `/blog`                |
| Cadastro de Usuário | `/cadastro-usuario`    |
| Login de Usuário    | `/login-usuario`       |
| Sistema de Carros   | `/carros`              |

---

# 🗄️ Banco de Dados

O projeto utiliza **MongoDB Atlas** como banco de dados em nuvem.

As aplicações utilizam as seguintes bases:

```text
blogDB
└── posts

concessionariaDB
├── usuarios
└── carros
```

---

# 🔐 Segurança

As credenciais do banco de dados não devem ser expostas publicamente em um repositório.

Em uma aplicação real, a URI do MongoDB deve ser armazenada em uma variável de ambiente, por exemplo:

```text
MONGODB_URI
```

e não diretamente no código-fonte.

---

# 📚 Objetivo acadêmico

O objetivo deste projeto é demonstrar a evolução prática dos conhecimentos de desenvolvimento Fullstack, partindo de aplicações executadas no navegador até uma arquitetura envolvendo:

```text
Frontend
   ↓
HTML / CSS / JavaScript
   ↓
Express / Node.js
   ↓
EJS
   ↓
MongoDB Atlas
```

O projeto também demonstra conceitos fundamentais de desenvolvimento Web, incluindo:

* Desenvolvimento Frontend
* Desenvolvimento Backend
* Roteamento
* APIs e requisições HTTP
* Formulários
* Templates dinâmicos
* Persistência de dados
* CRUD
* Banco de dados NoSQL
* Regras de negócio
* Estruturação de projetos

---

## 🎓 Projeto acadêmico

**Curso:** Ciência de Dados e Inteligência Artificial
**Instituição:** FEI
**Semestre:** 1º semestre
**Disciplina:** Fullstack Development

---

## 👨‍💻 João Victor Rio

Projeto desenvolvido como parte das atividades práticas da disciplina de Fullstack Development.
