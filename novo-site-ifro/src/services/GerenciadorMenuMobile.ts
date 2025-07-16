// Classe para gerenciar o menu mobile
export class GerenciadorMenuMobile {
  private botaoMenu: HTMLElement;
  private navegacao: HTMLElement;
  private estaAberto: boolean = false;

  constructor() {
    this.botaoMenu = document.getElementById('botao-menu-mobile')!;
    this.navegacao = document.getElementById('navegacao-principal')!;
    this.inicializar();
  }

  private inicializar(): void {
    this.botaoMenu.addEventListener('click', () => this.alternarMenu());
    
    // Fechar menu ao clicar em links
    const linksNavegacao = this.navegacao.querySelectorAll('a');
    linksNavegacao.forEach(link => {
      link.addEventListener('click', () => this.fecharMenu());
    });

    // Fechar menu ao redimensionar tela
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.estaAberto) {
        this.fecharMenu();
      }
    });
  }

  private alternarMenu(): void {
    this.estaAberto = !this.estaAberto;
    this.atualizarEstadoMenu();
  }

  private fecharMenu(): void {
    this.estaAberto = false;
    this.atualizarEstadoMenu();
  }

  private atualizarEstadoMenu(): void {
    if (this.estaAberto) {
      this.navegacao.classList.add('aberta');
      this.botaoMenu.classList.add('ativo');
    } else {
      this.navegacao.classList.remove('aberta');
      this.botaoMenu.classList.remove('ativo');
    }
  }
}
