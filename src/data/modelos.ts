// Tipo de cada item da listagem principal (Modelos Populares)
export type Modelo = {
  id: number
  nome: string
  descricao: string
  imagem: string
  material: string
  dificuldade: string
  tempo: string
}

// Vetor de objetos com os 12 modelos da listagem principal
export const modelos: Modelo[] = [
  {
    id: 1,
    nome: 'Dragão Articulado',
    descricao: 'Modelo flexível e articulado, perfeito para brinquedos e colecionáveis.',
    imagem: 'https://placehold.co/400x200/1a1a2e/00d4ff?text=Drag%C3%A3o+Articulado',
    material: 'PLA',
    dificuldade: 'Fácil',
    tempo: '3-5 horas',
  },
  {
    id: 2,
    nome: 'Vaso Geométrico',
    descricao: 'Design moderno e elegante para decoração de ambientes.',
    imagem: 'https://placehold.co/400x200/1a1a2e/ff6b35?text=Vaso+Geom%C3%A9trico',
    material: 'PETG',
    dificuldade: 'Médio',
    tempo: '6-8 horas',
  },
  {
    id: 3,
    nome: 'Suporte de Celular',
    descricao: 'Prático e estável, ideal para mesa de trabalho ou cabeceira.',
    imagem: 'https://placehold.co/400x200/1a1a2e/00d4ff?text=Suporte+Celular',
    material: 'PLA',
    dificuldade: 'Fácil',
    tempo: '1-2 horas',
  },
  {
    id: 4,
    nome: 'Miniatura de Personagem',
    descricao: 'Detalhada para colecionadores e fãs de jogos.',
    imagem: 'https://placehold.co/400x200/1a1a2e/ff6b35?text=Miniatura',
    material: 'ABS',
    dificuldade: 'Difícil',
    tempo: '8-12 horas',
  },
  {
    id: 5,
    nome: 'Organizador de Mesa',
    descricao: 'Compartimentos para canetas, clips e pequenos objetos.',
    imagem: 'https://placehold.co/400x200/1a1a2e/00d4ff?text=Organizador',
    material: 'PLA',
    dificuldade: 'Fácil',
    tempo: '2-4 horas',
  },
  {
    id: 6,
    nome: 'Luminária Hexagonal',
    descricao: 'Design geométrico que cria efeitos de luz interessantes.',
    imagem: 'https://placehold.co/400x200/1a1a2e/ff6b35?text=Lumin%C3%A1ria',
    material: 'PETG',
    dificuldade: 'Médio',
    tempo: '5-7 horas',
  },
  {
    id: 7,
    nome: 'Fidget Spinner',
    descricao: 'Brinquedo antiestresse com rolamento, impressão rápida.',
    imagem: 'https://placehold.co/400x200/1a1a2e/00d4ff?text=Fidget+Spinner',
    material: 'PLA',
    dificuldade: 'Fácil',
    tempo: '1 hora',
  },
  {
    id: 8,
    nome: 'Peça de Reposição',
    descricao: 'Exemplo de peça funcional para consertos domésticos.',
    imagem: 'https://placehold.co/400x200/1a1a2e/ff6b35?text=Pe%C3%A7a+Reposi%C3%A7%C3%A3o',
    material: 'ABS',
    dificuldade: 'Médio',
    tempo: '3-6 horas',
  },
  {
    id: 9,
    nome: 'Estatueta de Animal',
    descricao: 'Modelo decorativo de animal low-poly para prateleira.',
    imagem: 'https://placehold.co/400x200/1a1a2e/00d4ff?text=Estatueta+Animal',
    material: 'PLA',
    dificuldade: 'Médio',
    tempo: '4-6 horas',
  },
  {
    id: 10,
    nome: 'Caixa de Armazenamento',
    descricao: 'Com tampa e divisórias, útil para organizar pequenas peças.',
    imagem: 'https://placehold.co/400x200/1a1a2e/ff6b35?text=Caixa+Armazenamento',
    material: 'PETG',
    dificuldade: 'Fácil',
    tempo: '3-5 horas',
  },
  {
    id: 11,
    nome: 'Ferramenta Utilitária',
    descricao: 'Adaptador ou suporte funcional para uso cotidiano.',
    imagem: 'https://placehold.co/400x200/1a1a2e/00d4ff?text=Ferramenta+Utilit%C3%A1ria',
    material: 'ABS',
    dificuldade: 'Difícil',
    tempo: '5-8 horas',
  },
  {
    id: 12,
    nome: 'Modelo de Arquitetura',
    descricao: 'Maquete simplificada de edifício para estudos ou decoração.',
    imagem: 'https://placehold.co/400x200/1a1a2e/ff6b35?text=Modelo+Arquitetura',
    material: 'PLA',
    dificuldade: 'Médio',
    tempo: '10-15 horas',
  },
]
