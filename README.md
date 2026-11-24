# Galeria de Impressão 3D

Este projeto é uma página single-page dedicada ao universo da impressão 3D. A listagem principal apresenta modelos e projetos populares para impressão (com nome, descrição, imagem e material recomendado), enquanto a listagem secundária mostra tipos de filamentos e suas características. O objetivo é explorar ideias criativas e práticas para quem está começando ou já tem uma impressora 3D em casa.

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

```bash
npm install
npm run dev
```

Depois abra no navegador o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Fonte dos dados

| Listagem | Origem | Arquivo |
| --- | --- | --- |
| **Principal: Modelos Populares** (12 itens) | JSON externo carregado com `fetch` dentro de `useEffect` | [`public/modelos.json`](public/modelos.json) |
| **Secundária: Tipos de Filamentos** (4 itens) | Vetor de objetos declarado no código | [`src/data/filamentos.ts`](src/data/filamentos.ts) |

- O arquivo `public/modelos.json` foi criado para o projeto com os mesmos atributos do type `Modelo` (`id`, `nome`, `descricao`, `imagem`, `material`, `dificuldade` e `tempo`).
- Os arquivos da pasta `public/` são servidos na raiz do site, por isso o endereço usado no `fetch` é `/modelos.json` (constante `URL_MODELOS` em `src/data/modelos.ts`).
- As imagens dos cards são placeholders gerados pelo serviço [placehold.co](https://placehold.co).

Enquanto os dados chegam, a página mostra um estado de **carregando** (cards fantasma animados). Se a requisição falhar, aparece uma **mensagem de erro** com o botão **Tentar novamente**.

## Funcionalidades

- Listagem de modelos com **filtro por material** (Todos, PLA, PETG, ABS).
- **Busca** pelo nome do modelo, em tempo real.
- **Favoritar** modelos, com contador; os favoritos ficam **salvos no navegador** (localStorage) mesmo depois de recarregar a página.
- Menu recolhido no celular, que abre e fecha.
- Layout responsivo mobile first: celular, tablet (a partir de 768px) e desktop (a partir de 1024px).

## Estrutura

```
public/
  modelos.json            JSON externo da listagem principal
src/
  App.tsx                 guarda os estados, faz o fetch e compõe os componentes
  App.css                 estilos com variáveis CSS e media queries
  data/
    modelos.ts            type Modelo e endereço do JSON
    filamentos.ts         type Filamento e vetor da listagem secundária
  components/
    Header, Hero, Sobre, Footer
    SecaoModelos, ModeloCard, FiltroMaterial, CampoBusca
    CarregandoModelos     estado de carregando (esqueleto)
    MensagemErro          estado de erro com "Tentar novamente"
    SecaoFilamentos, FilamentoCard
docs/
  wireframe-mobile.svg, wireframe-tablet.svg, wireframe-desktop.svg
```

## Fases do TCD

| Fase | Branch | Entrega |
| --- | --- | --- |
| 1. Wireframe | `fase-1-wireframe` | Wireframes mobile, tablet e desktop em `docs/` |
| 2. Página no App.tsx | `fase-2-pagina` | Página inteira no `App.tsx` com CSS responsivo |
| 3. Componentes, dados e estado | `fase-3-componentes` | Componentes, types, vetores com `map` e `useState` |
| 4. Dados externos | `fase-4-json` | `fetch` do JSON, estados de carregando e erro |

### Desafios bonificados

- **Esqueleto de carregamento:** cards fantasma animados enquanto o JSON carrega.
- **Busca:** campo controlado que filtra os modelos em tempo real.
- **Persistência local:** favoritos salvos no `localStorage`, sincronizados com `useEffect`.

## Tecnologias

React + TypeScript (criado com Vite) e CSS puro. Nenhuma dependência além das criadas pelo Vite; as requisições usam o `fetch` nativo.
