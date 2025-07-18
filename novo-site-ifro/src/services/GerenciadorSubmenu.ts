// Classe para gerenciar submenus
export class GerenciadorSubmenu {
  private itensComSubmenu: NodeListOf<Element>;
  private submenuAtivo: Element | null = null;

  constructor() {
    this.itensComSubmenu = document.querySelectorAll('.item-com-submenu');
    this.inicializar();
  }

  private inicializar(): void {
    this.itensComSubmenu.forEach(item => {
      const submenu = item.querySelector('.submenu');
      const linkPrincipal = item.querySelector('.link-navegacao');
      
      if (!submenu || !linkPrincipal) return;

      // Evento de clique no link principal
      linkPrincipal.addEventListener('click', (e) => {
        // Sempre previne o comportamento padrão para links com submenu
        e.preventDefault();
        e.stopPropagation();
        
        // Alterna o submenu independente do dispositivo
        this.alternarSubmenu(item, submenu);
      });

      // Evento específico para a seta (sempre controla submenu)
      const seta = linkPrincipal.querySelector('.icone-seta');
      if (seta) {
        seta.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.alternarSubmenu(item, submenu);
        });
      }

      // Hover para desktop - verifica dinamicamente se é mobile
      item.addEventListener('mouseenter', () => {
        if (!this.isMobile() && !item.classList.contains('ativo')) {
          this.abrirSubmenu(item, submenu);
        }
      });

      item.addEventListener('mouseleave', () => {
        if (!this.isMobile()) {
          this.fecharSubmenu(item);
        }
      });

      // Navegação por teclado
      this.configurarNavegacaoTeclado(item, submenu, linkPrincipal);
    });

    // Fechar submenu ao clicar fora (principalmente para mobile)
    document.addEventListener('click', (e) => {
      const target = e.target as Element;
      if (!target.closest('.item-com-submenu') && this.submenuAtivo) {
        this.fecharSubmenu(this.submenuAtivo);
      }
    });

    // Fechar submenu ao pressionar ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.submenuAtivo) {
        this.fecharSubmenu(this.submenuAtivo);
      }
    });

    // Ajustar comportamento no redimensionamento da janela
    window.addEventListener('resize', () => {
      // Fecha submenus ativos quando muda de mobile para desktop ou vice-versa
      if (this.submenuAtivo) {
        this.fecharSubmenu(this.submenuAtivo);
      }
    });
  }

  private isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  private alternarSubmenu(item: Element, submenu: Element): void {
    if (item.classList.contains('ativo')) {
      this.fecharSubmenu(item);
    } else {
      // Fecha qualquer submenu aberto
      if (this.submenuAtivo && this.submenuAtivo !== item) {
        this.fecharSubmenu(this.submenuAtivo);
      }
      this.abrirSubmenu(item, submenu);
    }
  }

  private abrirSubmenu(item: Element, submenu: Element): void {
    item.classList.add('ativo');
    submenu.classList.add('ativo');
    this.submenuAtivo = item;
  }

  private fecharSubmenu(item: Element): void {
    const submenu = item.querySelector('.submenu');
    
    item.classList.remove('ativo');
    submenu?.classList.remove('ativo');
    
    if (this.submenuAtivo === item) {
      this.submenuAtivo = null;
    }
  }

  private configurarNavegacaoTeclado(item: Element, submenu: Element, linkPrincipal: Element): void {
    linkPrincipal.addEventListener('keydown', (e) => {
      const keyEvent = e as KeyboardEvent;
      
      if (keyEvent.key === 'ArrowDown') {
        keyEvent.preventDefault();
        if (!item.classList.contains('ativo')) {
          this.abrirSubmenu(item, submenu);
        }
        const primeiroLink = submenu.querySelector('.link-submenu') as HTMLElement;
        if (primeiroLink) primeiroLink.focus();
      } else if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
        keyEvent.preventDefault();
        this.alternarSubmenu(item, submenu);
      }
    });

    // Configurar navegação dentro do submenu
    const linksSubmenu = submenu.querySelectorAll('.link-submenu');
    linksSubmenu.forEach((link, index) => {
      link.addEventListener('keydown', (e) => {
        const keyEvent = e as KeyboardEvent;
        
        if (keyEvent.key === 'ArrowUp') {
          keyEvent.preventDefault();
          if (index > 0) {
            (linksSubmenu[index - 1] as HTMLElement).focus();
          } else {
            (linkPrincipal as HTMLElement).focus();
          }
        } else if (keyEvent.key === 'ArrowDown') {
          keyEvent.preventDefault();
          if (index < linksSubmenu.length - 1) {
            (linksSubmenu[index + 1] as HTMLElement).focus();
          }
        } else if (keyEvent.key === 'Escape') {
          this.fecharSubmenu(item);
          (linkPrincipal as HTMLElement).focus();
        }
      });
    });
  }
}
