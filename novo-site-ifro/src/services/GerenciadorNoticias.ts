import { Noticia } from '../interfaces/index.js';

// Classe para gerenciar as notícias
export class GerenciadorNoticias {
  private containerNoticias: HTMLElement;

  constructor() {
    this.containerNoticias = document.getElementById('grade-noticias')!;
    this.inicializar();
  }

  private inicializar(): void {
    this.renderizarNoticias();
  }

  private renderizarNoticias(): void {
    // Importar dados das notícias
    import('../data/noticias.js').then(({ noticias }) => {
      const noticiaPrincipal = noticias[0];
      const noticiasSecundarias = noticias.slice(1);

      const htmlNoticiaPrincipal = this.criarHtmlNoticiaPrincipal(noticiaPrincipal);
      const htmlNoticiasSecundarias = noticiasSecundarias
        .map(noticia => this.criarHtmlNoticiaSecundaria(noticia))
        .join('');

      this.containerNoticias.innerHTML = `
        ${htmlNoticiaPrincipal}
        <div class="noticias-secundarias">
          ${htmlNoticiasSecundarias}
        </div>
      `;
    });
  }

  private criarHtmlNoticiaPrincipal(noticia: Noticia): string {
    return `
      <div class="noticia-principal">
        <div class="imagem-noticia-principal">
          <img src="${noticia.imagem}" alt="${noticia.titulo}" />
          <div class="categoria-badge">${noticia.categoria}</div>
        </div>
        <div class="conteudo-noticia-principal">
          <h3 class="titulo-noticia-principal">${noticia.titulo}</h3>
          <p class="resumo-noticia-principal">${noticia.resumo}</p>
          <div class="meta-noticia">
            <div class="item-meta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>${noticia.data}</span>
            </div>
            <div class="item-meta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>${noticia.autor}</span>
            </div>
          </div>
          <button class="botao-ler-mais">
            Ler Mais
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12,5 19,12 12,19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  private criarHtmlNoticiaSecundaria(noticia: Noticia): string {
    return `
      <div class="cartao-noticia">
        <div class="imagem-noticia">
          <img src="${noticia.imagem}" alt="${noticia.titulo}" />
          <div class="categoria-badge-pequena">${noticia.categoria}</div>
        </div>
        <div class="conteudo-noticia">
          <h4 class="titulo-noticia">${noticia.titulo}</h4>
          <p class="resumo-noticia">${noticia.resumo}</p>
          <div class="meta-noticia-pequena">
            <span class="data-noticia">${noticia.data}</span>
          </div>
        </div>
      </div>
    `;
  }
}
