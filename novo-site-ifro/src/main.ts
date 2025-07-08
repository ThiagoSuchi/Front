import './styles/main.css'

// Carrossel Principal
class Carousel {
  private currentSlide = 0;
  private totalSlides = 4;
  private track: HTMLElement;
  private slides: NodeListOf<HTMLElement>;
  private indicators: NodeListOf<HTMLElement>;
  private autoSlideInterval?: number;

  constructor() {
    this.track = document.getElementById('carouselTrack')!;
    this.slides = document.querySelectorAll('.carousel-slide');
    this.indicators = document.querySelectorAll('.indicator');
    
    this.init();
  }

  private init() {
    // Botões de navegação
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn?.addEventListener('click', () => this.prevSlide());
    nextBtn?.addEventListener('click', () => this.nextSlide());

    // Indicadores
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });

    // Auto-slide (opcional)
    this.startAutoSlide();

    // Pausar auto-slide ao hover
    const banner = document.querySelector('.hero-banner');
    banner?.addEventListener('mouseenter', () => this.stopAutoSlide());
    banner?.addEventListener('mouseleave', () => this.startAutoSlide());
  }

  private updateCarousel() {
    // Atualizar posição do track
    const translateX = -this.currentSlide * 25; // 25% por slide
    this.track.style.transform = `translateX(${translateX}%)`;

    // Atualizar slides ativos
    this.slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentSlide);
    });

    // Atualizar indicadores
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentSlide);
    });
  }

  private nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateCarousel();
  }

  private prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
    this.updateCarousel();
  }

  private goToSlide(index: number) {
    this.currentSlide = index;
    this.updateCarousel();
  }

  private startAutoSlide() {
    this.stopAutoSlide(); // Limpar interval anterior
    this.autoSlideInterval = window.setInterval(() => {
      this.nextSlide();
    }, 5000); // Muda a cada 5 segundos
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}

// Inicializar carrossel quando DOM carregar
document.addEventListener('DOMContentLoaded', () => {
  new Carousel();
});

// Funcionalidades adicionais do site
document.addEventListener('DOMContentLoaded', () => {
  // Toggle para menu de campi
  const campiHeaders = document.querySelectorAll('.campi-header');
  campiHeaders.forEach(header => {
    header.addEventListener('click', () => {
      header.classList.toggle('active');
      const list = header.nextElementSibling as HTMLElement;
      if (list && list.classList.contains('campi-list')) {
        list.style.display = list.style.display === 'none' ? 'block' : 'none';
      }
    });
  });

  // Busca
  const searchInput = document.querySelector('.search-container input') as HTMLInputElement;
  const searchBtn = document.querySelector('.search-container button') as HTMLButtonElement;
  
  searchBtn?.addEventListener('click', () => {
    const query = searchInput?.value.trim();
    if (query) {
      alert(`Buscando por: ${query}`);
      // Aqui você implementaria a lógica de busca real
    }
  });

  // Enter na busca
  searchInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchBtn?.click();
    }
  });
});
