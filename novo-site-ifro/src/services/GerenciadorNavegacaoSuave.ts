// Classe para gerenciar navegação suave
export class GerenciadorNavegacaoSuave {
  constructor() {
    this.inicializar();
  }

  private inicializar(): void {
    const linksNavegacao = document.querySelectorAll('a[href^="#"]');
    linksNavegacao.forEach(link => {
      link.addEventListener('click', (evento) => this.navegarSuave(evento));
    });
  }

  private navegarSuave(evento: Event): void {
    evento.preventDefault();
    const link = evento.target as HTMLAnchorElement;
    const destino = link.getAttribute('href');
    
    if (destino && destino !== '#') {
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
