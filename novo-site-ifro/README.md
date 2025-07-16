# Novo Site IFRO

Site institucional moderno e responsivo do Instituto Federal de Educação, Ciência e Tecnologia de Rondônia (IFRO).

## Sobre o Projeto

Este é um site institucional desenvolvido com **TypeScript**, **HTML5** e **CSS3**, utilizando **Vite** como ferramenta de desenvolvimento. O projeto apresenta uma interface moderna e profissional para divulgar informações sobre cursos, notícias e serviços do IFRO.

## Funcionalidades

- **Página Inicial**: Banner principal com informações institucionais
- **Sistema de Pesquisa**: Busca inteligente com sugestões e atalhos rápidos
- **Catálogo de Cursos**: Filtros por categoria (Técnico/Graduação) com renderização dinâmica
- **Seção de Notícias**: Exibição de notícias com layout responsivo
- **Menu Mobile**: Navegação otimizada para dispositivos móveis
- **Submenus Dinâmicos**: Navegação intuitiva com submenus interativos
- **Navegação Suave**: Scroll suave entre seções da página

## Tecnologias Utilizadas

- **TypeScript** - Linguagem principal com tipagem estática
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com variáveis CSS e Grid/Flexbox
- **Vite** - Bundler e servidor de desenvolvimento
- **ES6 Modules** - Modularização do código JavaScript/TypeScript

## Estrutura do Projeto

```
src/
├── components/          # Componentes principais
│   └── AplicacaoIFRO.ts    # Classe principal da a
├── data/               # Dados estáticos
│   ├── cursos.ts          # Dados dos cursos
│   └── noticias.ts        # Dados das notícias
├── interfaces/         # Definições de tipos 
│   └── index.ts           # Interfaces Curso e 
├── services/           # Serviços e gerenciadores
│   ├── GerenciadorFiltrosCursos.ts
│   ├── GerenciadorMenuMobile.ts
│   ├── GerenciadorNavegacaoSuave.ts
│   ├── GerenciadorNoticias.ts
│   ├── GerenciadorPesquisa.ts
│   └── GerenciadorSubmenu.ts
├── styles/             # Arquivos de estilo
│   ├── global.css
│   ├── cabecalho.css
│   ├── banner-principal.css
│   ├── cursos.css
│   ├── noticias.css
│   ├── pesquisa.css
│   ├── sobre.css
│   └── rodape.css
└── main.ts             # Ponto de entrada da aplicação
```

## Como Executar?

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd novo-site-ifro
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse o projeto em: `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção

## Características do Design

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Paleta de Cores**: Verde institucional do IFRO com tons complementares
- **Tipografia**: Fonte moderna e legível
- **Animações Sutis**: Efeitos de hover e transições suaves
- **Acessibilidade**: Navegação por teclado e estrutura semântica

## Funcionalidades Principais

### Sistema de Pesquisa
- Busca inteligente com detecção de palavras-chave
- Sugestões de pesquisa com tags clicáveis
- Atalhos rápidos para seções específicas

### Filtros de Cursos
- Filtro por categoria (Todos, Técnico, Graduação)
- Renderização dinâmica dos cartões de curso
- Informações detalhadas de cada curso

### Gerenciamento de Notícias
- Layout em grid com notícia principal em destaque
- Cartões de notícias secundárias
- Metadados completos (data, autor, categoria)

### Menu Mobile
- Menu hambúrguer responsivo
- Fechamento automático em redimensionamento
- Links funcionais para navegação

## Arquitetura do Código

O projeto segue uma arquitetura modular com:

- **Separação de Responsabilidades**: Cada gerenciador tem uma função específica
- **Tipagem TypeScript**: Interfaces bem definidas para dados
- **ES6 Modules**: Importações dinâmicas para otimização
- **Padrão Observer**: Eventos DOM bem organizados

## Licença

Este projeto é desenvolvido para uso institucional do IFRO.

---

**Desenvolvido por Thiago Hens Suchi para o Instituto Federal de Rondônia**
