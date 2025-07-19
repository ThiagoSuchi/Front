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
          // stopPropagation - impede que o evento continue se propagando na árvore DOM
          e.stopPropagation();
          this.alternarSubmenu(item, submenu);
        });
      }
    });

    // Fechar submenu ao clicar fora (principalmente para mobile)
    document.addEventListener('click', (e) => {
      const target = e.target as Element;
      if (!target.closest('.item-com-submenu') && this.submenuAtivo) {
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
}
