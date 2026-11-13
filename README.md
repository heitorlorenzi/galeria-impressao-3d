# Galeria de Impressão 3D

Este projeto é uma página single-page dedicada ao universo da impressão 3D. A listagem principal apresenta modelos e projetos populares para impressão (com nome, descrição, imagem e material recomendado), enquanto a listagem secundária mostra tipos de filamentos e suas características. O objetivo é explorar ideias criativas e práticas para quem está começando ou já tem uma impressora 3D em casa.

## Como executar

```bash
npm install
npm run dev
```

## Estrutura (Fase 3)

- `src/data/`: types `Modelo` e `Filamento` e os vetores de objetos das duas listagens.
- `src/components/`: componentes da página (`Header`, `Hero`, `SecaoModelos`, `ModeloCard`, `FiltroMaterial`, `SecaoFilamentos`, `FilamentoCard`, `Sobre`, `Footer`).
- `src/App.tsx`: guarda o estado (menu, filtro por material e favoritos) e compõe os componentes.
