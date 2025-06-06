# Links - Projeto Linktree Personalizado

## Descrição

Este projeto é uma aplicação front-end simples para exibir perfis de usuários no estilo "Linktree", onde cada usuário pode ter um conjunto personalizado de links sociais e um visual único, incluindo:

- Foto do usuário
- Nome do usuário estilizado
- Lista de links sociais com ícones e estilização customizada
- Background dinâmico, podendo ser gradiente, cor sólida ou imagem com efeito blur e animações CSS

Os dados dos usuários são buscados de uma API local e aplicados dinamicamente na interface, criando um linktree visual e funcional para cada perfil.

---

## Tecnologias Utilizadas

- **TypeScript** para tipagem estática
- **Vite** como bundler e servidor de desenvolvimento
- **CSS puro** para estilização responsiva e dinâmica
- Fetch API para requisição dos dados dos usuários

---

## Estrutura do Projeto

```
/
├── public/
│   ├── image/               # Imagens dos usuários e backgrounds
│   └── icons/               # Ícones para os links sociais
├── src/
│   ├── models/
│   │   └── interfacesUser.ts # Definição das interfaces TypeScript
│   ├── services/
│   │   └── criarLinktree.ts  # Funções para criar e estilizar os links e perfil
│   ├── style.css             # Estilos globais CSS
│   └── main.ts               # Script principal que busca os dados e renderiza o perfil
├── package.json              # Configuração do projeto, scripts e dependências
├── tsconfig.json             # Configuração TypeScript
└── vite.config.ts            # Configuração do Vite
```

---

## Como Funciona

1. O script principal (`main.ts`) lê o parâmetro `id` da URL para identificar qual usuário carregar.
2. Faz uma requisição para a API local (`http://localhost:3000/usuarios?id=${id}`) para obter os dados do usuário.
3. Para cada usuário retornado, chama as funções `createLinktree` e `styleLinks` para montar e estilizar o perfil com os dados recebidos.
4. Aplica dinamicamente o background do usuário, que pode ser:
   - Um gradiente linear ou radial com animação CSS customizada
   - Uma imagem com efeito blur
5. Gera a lista de links clicáveis com ícones, cada link abre a URL correspondente em nova aba.

---

## Dados do Usuário (Modelo)

O usuário é representado pelo seguinte modelo TypeScript:

```ts
export interface UserProfile {
  id: string;
  nome: string;
  foto_URL: string;
  background: Background;
  link: LinkStyle;
  border_radius: string;
  links: LinkItem[];
}

interface Background {
  tipo: 'linear' | 'radial' | string;
  valor: string;
  keyframes?: string;
  animation?: string;
  blur?: string; // Opcional para imagens
}

interface LinkStyle {
  cor: string;
  hover: string;
  texto: string;
}

interface LinkItem {
  icone: string;
  texto: string;
  url: string;
}
```

---

## Scripts Disponíveis

| Comando          | Descrição                         |
|------------------|----------------------------------|
| `npm run dev`    | Inicia o servidor de desenvolvimento com Vite |
| `npm run build`  | Compila TypeScript e gera build para produção |
| `npm run preview`| Visualiza o build gerado localmente |

---

## Como Executar Localmente

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Certifique-se de que sua API local está rodando em `http://localhost:3000/usuarios` e retornando os dados no formato esperado.
4. Rode o projeto com:

```bash
npm run dev
```

5. Abra no navegador a URL, passando o parâmetro `id` do usuário que deseja visualizar, por exemplo:

```
http://localhost:5173/?id=1
```

---

## Estilos CSS Globais

- Reseta margens e padding
- Define `box-sizing: border-box`
- Aplica fonte "Inter"
- Remove overflow horizontal para evitar scroll indesejado
- Estiliza o container principal com flexbox para centralizar verticalmente e horizontalmente

---

## Personalização Visual

Cada usuário pode personalizar:

- Fundo: cor, gradiente ou imagem com blur
- Animação do fundo via keyframes CSS
- Cor e hover dos links
- Borda arredondada dos links
- Ícones e URLs dos links sociais

---

## Exemplo de Dados JSON

```json
{
  "usuarios": [
    {
      "id": "1",
      "nome": "Thiago Hens Suchi",
      "foto_URL": "./public/image/Thiago.png",
      "background": {
        "tipo": "linear",
        "valor": "repeating-linear-gradient(to bottom, #1d1d1d, #242424 2px, #111111 2px, #111111 4px)",
        "keyframes": "@keyframes moveLines { from { background-position: 0 0; } to { background-position: 0 100px; } }",
        "animation": "moveLines 6s linear infinite"
      },
      "link": {
        "cor": "#3498db",
        "hover": "transparent",
        "texto": "#ffffff"
      },
      "border_radius": "5px",
      "links": [
        {
          "icone": "./public/icons/github.svg",
          "texto": "GitHub",
          "url": "https://GitHub.com/ThiagoSuchi"
        },
        {
          "icone": "./public/icons/linkedin.svg",
          "texto": "Linkedin",
          "url": "https://www.linkedin.com/in/thiago-hens-suchi-a7ba75305"
        }
        // outros links...
      ]
    }
    // outros usuários...
  ]
}
```

---

## Considerações Finais

- O projeto está configurado para funcionar localmente com um backend simulando a API.
- Possui tipagem robusta com TypeScript.
- O design é totalmente responsivo e facilmente customizável via JSON.
- Ideal para criar perfis públicos estilizados e interativos com múltiplos links sociais.

---

Se precisar de ajuda para rodar ou personalizar o projeto, é só me chamar!
