// Tipo de cada item da listagem secundária (Tipos de Filamentos)
export type Filamento = {
  id: number
  nome: string
  descricao: string
  temperatura: string
}

// Vetor de objetos com os 4 filamentos da listagem secundária
export const filamentos: Filamento[] = [
  {
    id: 1,
    nome: 'PLA',
    descricao: 'Fácil de imprimir, ideal para iniciantes. Biodegradável e com boa qualidade de superfície.',
    temperatura: '190-220°C',
  },
  {
    id: 2,
    nome: 'ABS',
    descricao: 'Resistente ao impacto e ao calor. Requer câmara fechada e boa ventilação.',
    temperatura: '230-250°C',
  },
  {
    id: 3,
    nome: 'PETG',
    descricao: 'Versátil, resistente e com boa aderência entre camadas. Boa opção intermediária.',
    temperatura: '220-250°C',
  },
  {
    id: 4,
    nome: 'TPU',
    descricao: 'Flexível e elástico, ideal para peças que precisam dobrar ou absorver impacto.',
    temperatura: '210-230°C',
  },
]
