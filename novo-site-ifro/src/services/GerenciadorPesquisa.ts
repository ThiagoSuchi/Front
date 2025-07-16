// Classe para gerenciar a barra de pesquisa
export class GerenciadorPesquisa {
  private inputPesquisa: HTMLInputElement;
  private botaoPesquisar: HTMLElement;
  private tagsSugestoes: NodeListOf<HTMLElement>;

  constructor() {
    this.inputPesquisa = document.getElementById('input-pesquisa-principal') as HTMLInputElement;
    this.botaoPesquisar = document.getElementById('botao-pesquisar')!;
    this.tagsSugestoes = document.querySelectorAll('.tag-sugestao');
    this.inicializar();
  }

  private inicializar(): void {
    this.configurarEventos();
  }

  private configurarEventos(): void {
    // Evento de clique no botão pesquisar
    this.botaoPesquisar.addEventListener('click', () => this.executarPesquisa());

    // Evento de Enter no input
    this.inputPesquisa.addEventListener('keypress', (evento) => {
      if (evento.key === 'Enter') {
        this.executarPesquisa();
      }
    });

    // Eventos das tags de sugestão
    this.tagsSugestoes.forEach(tag => {
      tag.addEventListener('click', () => {
        const termoPesquisa = tag.dataset.pesquisa!;
        this.inputPesquisa.value = termoPesquisa;
        this.executarPesquisa();
      });
    });

    // Configurar atalhos rápidos
    this.configurarAtalhosRapidos();
  }

  private configurarAtalhosRapidos(): void {
    const atalhos = document.querySelectorAll('.item-atalho');
    atalhos.forEach((atalho, index) => {
      atalho.addEventListener('click', () => {
        switch (index) {
          case 0: // Catálogo de Cursos
            this.navegarPara('#ensino');
            break;
          case 1: // Portal do Aluno
            this.abrirLinkExterno('https://portal.ifro.edu.br');
            break;
          case 2: // Calendário Acadêmico
            this.abrirLinkExterno('https://ifro.edu.br/calendario');
            break;
          case 3: // Contato
            this.navegarPara('#contato');
            break;
        }
      });
    });
  }

  private executarPesquisa(): void {
    const termo = this.inputPesquisa.value.trim();
    
    if (!termo) {
      this.mostrarAlerta('Por favor, digite um termo para pesquisar.');
      return;
    }

    // Simular pesquisa (aqui você implementaria a lógica real de pesquisa)
    this.realizarPesquisaInterna(termo);
  }

  private realizarPesquisaInterna(termo: string): void {
    const termoLower = termo.toLowerCase();
    
    // Pesquisar por cursos
    if (termoLower.includes('curso') || termoLower.includes('técnico') || termoLower.includes('graduação')) {
      this.navegarPara('#ensino');
      this.destacarFiltro(termo);
      return;
    }

    // Pesquisar por notícias
    if (termoLower.includes('notícia') || termoLower.includes('evento')) {
      this.navegarPara('#noticias');
      return;
    }

    // Pesquisar por informações institucionais
    if (termoLower.includes('sobre') || termoLower.includes('história') || termoLower.includes('missão')) {
      this.navegarPara('#instituicao');
      return;
    }

    // Pesquisar por contato
    if (termoLower.includes('contato') || termoLower.includes('telefone') || termoLower.includes('endereço')) {
      this.navegarPara('#contato');
      return;
    }

    // Resultado padrão
    this.mostrarResultadoPesquisa(termo);
  }

  private destacarFiltro(termo: string): void {
    const termoLower = termo.toLowerCase();
    const botoesFiltro = document.querySelectorAll('.filtro-botao');
    
    if (termoLower.includes('técnico')) {
      const botaoTecnico = document.querySelector('[data-filtro="tecnico"]') as HTMLElement;
      if (botaoTecnico) {
        setTimeout(() => botaoTecnico.click(), 500);
      }
    } else if (termoLower.includes('graduação')) {
      const botaoGraduacao = document.querySelector('[data-filtro="graduacao"]') as HTMLElement;
      if (botaoGraduacao) {
        setTimeout(() => botaoGraduacao.click(), 500);
      }
    }
  }

  private navegarPara(secao: string): void {
    const elemento = document.querySelector(secao);
    if (elemento) {
      const posicao = elemento.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: posicao,
        behavior: 'smooth'
      });
    }
  }

  private abrirLinkExterno(url: string): void {
    window.open(url, '_blank');
  }

  private mostrarAlerta(mensagem: string): void {
    // Criar um toast simples
    const toast = document.createElement('div');
    toast.className = 'toast-pesquisa';
    toast.textContent = mensagem;
    toast.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: var(--verde-ifro-escuro);
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      z-index: 10000;
      animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  private mostrarResultadoPesquisa(termo: string): void {
    const mensagem = `Pesquisando por "${termo}"... Funcionalidade em desenvolvimento.`;
    this.mostrarAlerta(mensagem);
    
    // Limpar campo de pesquisa
    setTimeout(() => {
      this.inputPesquisa.value = '';
    }, 1000);
  }
}
