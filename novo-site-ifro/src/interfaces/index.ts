// Interfaces para tipagem
export interface Curso {
  id: number;
  nome: string;
  nivel: string;
  duracao: string;
  modalidade: string;
  descricao: string;
  vagas: number;
  imagem: string;
}

export interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
  autor: string;
  categoria: string;
  imagem: string;
}
