# Formulário com Validação, Dark Mode e API Fake

Este projeto é um formulário de inscrição para cursos FIC, com suporte a modo escuro (dark mode), validação de campos com Zod e envio de dados para uma API fake (via `json-server`).

## Funcionalidades

- ✅ Validação dos campos obrigatórios com mensagens específicas (nome, email, sexo, curso, termos).
- ✅ Feedback visual de erro diretamente abaixo do campo.
- ✅ Modo claro/escuro com alternância via botão.
- ✅ Envio dos dados para uma API fake.
- ✅ Limpeza do formulário após envio bem-sucedido.

## Tecnologias utilizadas

- [Vite](https://vitejs.dev/) — bundler para desenvolvimento rápido
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/) — biblioteca de validação
- [JSON Server](https://github.com/typicode/json-server) — API REST fake

## Instalação e execução

### 1. Clone o repositório

```bash
git clone <url-do-repo>
cd form-light-dark
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a API fake

```bash
npm start
```

> A API estará disponível em: `http://localhost:3000/usuarios`

### 4. Rode o projeto

```bash
npm run dev
```

> Acesse: `http://localhost:5173`

## Scripts disponíveis

- `npm run dev` — Inicia o projeto no modo desenvolvimento
- `npm start` — Inicia o `json-server` com o arquivo `myapi.json`
- `npm run build` — Compila o projeto para produção
- `npm run preview` — Visualiza o projeto já construído

## Estrutura de diretórios

```
📦 form-light-dark
├── index.html
├── myapi.json
├── src
│   ├── main.ts
│   ├── style.css
│   └── service
│       ├── camposValidacao.ts
│       ├── darkMode.ts
│       └── limparForm.ts
└── ...
```

## Observações

- Para simular uma API real, edite ou visualize os dados em `myapi.json`.
- O projeto é responsivo e pode ser facilmente adaptado para dispositivos móveis.

---

Desenvolvido por Thiago Hens Suchi.