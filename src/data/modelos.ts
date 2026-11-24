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

// Fase 4: os 12 modelos saíram deste arquivo e agora ficam no JSON externo
// public/modelos.json, que é carregado com fetch no App.tsx.
// Tudo que está em public/ é servido na raiz do site, por isso o endereço é "/modelos.json".
export const URL_MODELOS = '/modelos.json'
