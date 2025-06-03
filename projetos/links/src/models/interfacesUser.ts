export interface UserProfile {
  id: string;
  nome: string;
  foto_URL: string;
  background: Background;
  link: LinkStyle;
  border_radius: string;
  links: LinkItem[];
}

interface Background {
  tipo: 'linear' | 'radial' | string;
  valor: string;
  keyframes: string;
  animation: string;
}

interface LinkStyle {
  cor: string;
  hover: string;
  texto: string;
}

interface LinkStyle {
  cor: string;
  hover: string;
  texto: string;
}

interface LinkItem {
  icone: string;
  texto: string;
  url: string;
}

