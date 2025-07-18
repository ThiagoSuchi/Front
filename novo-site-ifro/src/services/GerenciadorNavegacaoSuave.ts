// Classe para gerenciar navegação suave
export class GerenciadorNavegacaoSuave {
  constructor() {
    this.inicializar();
  }

  private inicializar(): void {
    // Seleciona todos os links de âncora, exceto os que são apenas para controle de submenu
    const linksNavegacao = document.querySelectorAll('a[href^="#"]:not(.apenas-submenu)');
    linksNavegacao.forEach(link => {
      link.addEventListener('click', (evento) => {
        // Verifica se é um link de submenu principal no mobile
        const isLinkSubmenuMobile = this.isLinkSubmenuMobile(link as HTMLAnchorElement);
        
        if (!isLinkSubmenuMobile) {
          this.navegarSuave(evento);
        }
      });
    });
  }

  private isLinkSubmenuMobile(link: HTMLAnchorElement): boolean {
    // Se é mobile e é um link principal com submenu
    if (window.innerWidth <= 768) {
      const itemComSubmenu = link.closest('.item-com-submenu');
      const isLinkPrincipal = link.classList.contains('link-navegacao');
      return Boolean(itemComSubmenu) && isLinkPrincipal;
    }
    return false;
  }

  private navegarSuave(evento: Event): void {
    const link = evento.target as HTMLAnchorElement;
    const destino = link.getAttribute('href');
    
    if (destino && destino !== '#' && destino.length > 1) {
      // Previne apenas se vamos realmente navegar
      evento.preventDefault();
      
      const elemento = document.querySelector(destino);
      if (elemento) {
        const posicao = elemento.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({
          top: posicao,
          behavior: 'smooth'
        });
      }
    }
  }
}
