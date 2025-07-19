// Classe para gerenciar os filtros de cursos
export class GerenciadorFiltrosCursos {
  private containerCursos: HTMLElement;
  private botoesFiltro: NodeListOf<HTMLElement>;
  private filtroAtivo: string = 'todos';

  constructor() {
    this.containerCursos = document.getElementById('grade-cursos')!;
    this.botoesFiltro = document.querySelectorAll('.filtro-botao');
    
    if (!this.containerCursos) {
      console.error('Elemento grade-cursos não encontrado');
      return;
    }
    
    if (this.botoesFiltro.length === 0) {
      console.error('Botões de filtro não encontrados');
      return;
    }
    
    this.inicializar();
  }

  private inicializar(): void {
    this.renderizarCursos();
    this.configurarEventosFiltro();
  }

  private configurarEventosFiltro(): void {
    this.botoesFiltro.forEach(botao => {
      botao.addEventListener('click', () => {
        const filtro = botao.dataset.filtro!;
        this.alternarFiltro(filtro, botao);
      });
    });
  }

  private alternarFiltro(filtro: string, botaoClicado: HTMLElement): void {
    // Remover classe ativo de todos os botões
    this.botoesFiltro.forEach(botao => {
      botao.classList.remove('filtro-ativo');
    });

    // Adicionar classe ativo ao botão clicado
    botaoClicado.classList.add('filtro-ativo');

    // Atualizar filtro ativo
    this.filtroAtivo = filtro;

    // Re-renderizar cursos com novo filtro
    this.renderizarCursos();
  }

  private renderizarCursos(): void {
    // Importar dados dos cursos
    import('../data/cursos.js').then(({ cursos }) => {
      const cursosFiltrados = this.filtroAtivo === 'todos' 
        ? cursos 
        : cursos.filter(curso => curso.nivel === this.filtroAtivo);
      
      this.containerCursos.innerHTML = cursosFiltrados.map(curso => `
        <div class="cartao-curso" data-tipo="${curso.nivel}">
          <div class="imagem-curso">
            <img src="${curso.imagem}" alt="${curso.nome}" />
            <div class="nivel-badge">${curso.nivel === 'tecnico' ? 'Técnico' : 'Graduação'}</div>
          </div>
          
          <div class="conteudo-curso">
            <h3 class="titulo-curso">${curso.nome}</h3>
            <p class="descricao-curso">${curso.descricao}</p>
            
            <div class="info-curso">
              <div class="item-info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <span>${curso.duracao}</span>
              </div>
              <div class="item-info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>${curso.modalidade}</span>
              </div>
              <div class="item-info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>${curso.vagas} vagas</span>
              </div>
            </div>
            
            <button class="botao-curso">
              Saiba Mais
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12,5 19,12 12,19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      `).join('');
    }).catch(error => {
      console.error('Erro ao carregar cursos:', error);
    });
  }
}
