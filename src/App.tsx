import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">PrintHub 3D</div>
        <button className="menu-toggle" aria-label="Abrir menu">☰</button>
        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#modelos">Modelos</a>
          <a href="#filamentos">Filamentos</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <h1>Galeria de Impressão 3D</h1>
          <p>Explore modelos populares e tipos de filamentos para suas impressões.</p>
        </section>

        <section className="modelos" id="modelos">
          <h2>Modelos Populares</h2>
          <div className="modelos-grid">
            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/00d4ff?text=Drag%C3%A3o+Articulado" alt="Dragão Articulado" />
              </div>
              <h3>Dragão Articulado</h3>
              <p className="descricao">Modelo flexível e articulado, perfeito para brinquedos e colecionáveis.</p>
              <p className="material">Material recomendado: PLA</p>
              <p className="dificuldade">Dificuldade: Fácil</p>
              <p className="tempo">Tempo estimado: 3-5 horas</p>
            </article>

            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/ff6b35?text=Vaso+Geométrico" alt="Vaso Geométrico" />
              </div>
              <h3>Vaso Geométrico</h3>
              <p className="descricao">Design moderno e elegante para decoração de ambientes.</p>
              <p className="material">Material recomendado: PETG</p>
              <p className="dificuldade">Dificuldade: Médio</p>
              <p className="tempo">Tempo estimado: 6-8 horas</p>
            </article>

            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/00d4ff?text=Suporte+Celular" alt="Suporte de Celular" />
              </div>
              <h3>Suporte de Celular</h3>
              <p className="descricao">Prático e estável, ideal para mesa de trabalho ou cabeceira.</p>
              <p className="material">Material recomendado: PLA</p>
              <p className="dificuldade">Dificuldade: Fácil</p>
              <p className="tempo">Tempo estimado: 1-2 horas</p>
            </article>

            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/ff6b35?text=Miniatura" alt="Miniatura de Personagem" />
              </div>
              <h3>Miniatura de Personagem</h3>
              <p className="descricao">Detalhada para colecionadores e fãs de jogos.</p>
              <p className="material">Material recomendado: ABS</p>
              <p className="dificuldade">Dificuldade: Difícil</p>
              <p className="tempo">Tempo estimado: 8-12 horas</p>
            </article>

            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/00d4ff?text=Organizador" alt="Organizador de Mesa" />
              </div>
              <h3>Organizador de Mesa</h3>
              <p className="descricao">Compartimentos para canetas, clips e pequenos objetos.</p>
              <p className="material">Material recomendado: PLA</p>
              <p className="dificuldade">Dificuldade: Fácil</p>
              <p className="tempo">Tempo estimado: 2-4 horas</p>
            </article>

            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/ff6b35?text=Luminária" alt="Luminária Hexagonal" />
              </div>
              <h3>Luminária Hexagonal</h3>
              <p className="descricao">Design geométrico que cria efeitos de luz interessantes.</p>
              <p className="material">Material recomendado: PETG</p>
              <p className="dificuldade">Dificuldade: Médio</p>
              <p className="tempo">Tempo estimado: 5-7 horas</p>
            </article>

            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/00d4ff?text=Fidget+Spinner" alt="Fidget Spinner" />
              </div>
              <h3>Fidget Spinner</h3>
              <p className="descricao">Brinquedo antistress com rolamento, impressão rápida.</p>
              <p className="material">Material recomendado: PLA</p>
              <p className="dificuldade">Dificuldade: Fácil</p>
              <p className="tempo">Tempo estimado: 1 hora</p>
            </article>

            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/ff6b35?text=Peça+Reposição" alt="Peça de Reposição" />
              </div>
              <h3>Peça de Reposição</h3>
              <p className="descricao">Exemplo de peça funcional para consertos domésticos.</p>
              <p className="material">Material recomendado: ABS</p>
              <p className="dificuldade">Dificuldade: Médio</p>
              <p className="tempo">Tempo estimado: 3-6 horas</p>
            </article>

            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/00d4ff?text=Estatueta+Animal" alt="Estatueta de Animal" />
              </div>
              <h3>Estatueta de Animal</h3>
              <p className="descricao">Modelo decorativo de animal low-poly para prateleira.</p>
              <p className="material">Material recomendado: PLA</p>
              <p className="dificuldade">Dificuldade: Médio</p>
              <p className="tempo">Tempo estimado: 4-6 horas</p>
            </article>

            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/ff6b35?text=Caixa+Armazenamento" alt="Caixa de Armazenamento" />
              </div>
              <h3>Caixa de Armazenamento</h3>
              <p className="descricao">Com tampa e divisórias, útil para organizar pequenas peças.</p>
              <p className="material">Material recomendado: PETG</p>
              <p className="dificuldade">Dificuldade: Fácil</p>
              <p className="tempo">Tempo estimado: 3-5 horas</p>
            </article>

            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/00d4ff?text=Ferramenta+Utilitária" alt="Ferramenta Utilitária" />
              </div>
              <h3>Ferramenta Utilitária</h3>
              <p className="descricao">Adaptador ou suporte funcional para uso cotidiano.</p>
              <p className="material">Material recomendado: ABS</p>
              <p className="dificuldade">Dificuldade: Difícil</p>
              <p className="tempo">Tempo estimado: 5-8 horas</p>
            </article>

            <article className="modelo-card">
              <div className="modelo-imagem">
                <img src="https://placehold.co/400x200/1a1a2e/ff6b35?text=Modelo+Arquitetura" alt="Modelo de Arquitetura" />
              </div>
              <h3>Modelo de Arquitetura</h3>
              <p className="descricao">Maquete simplificada de edifício para estudos ou decoração.</p>
              <p className="material">Material recomendado: PLA</p>
              <p className="dificuldade">Dificuldade: Médio</p>
              <p className="tempo">Tempo estimado: 10-15 horas</p>
            </article>
          </div>
        </section>

        <section className="filamentos" id="filamentos">
          <h2>Tipos de Filamentos</h2>
          <div className="filamentos-lista">
            <article className="filamento-item">
              <h3>PLA</h3>
              <p>Fácil de imprimir, ideal para iniciantes. Biodegradável e com boa qualidade de superfície.</p>
              <p>Temperatura de impressão: 190-220°C</p>
            </article>

            <article className="filamento-item">
              <h3>ABS</h3>
              <p>Resistente ao impacto e ao calor. Requer câmara fechada e boa ventilação.</p>
              <p>Temperatura de impressão: 230-250°C</p>
            </article>

            <article className="filamento-item">
              <h3>PETG</h3>
              <p>Versátil, resistente e com boa aderência entre camadas. Boa opção intermediária.</p>
              <p>Temperatura de impressão: 220-250°C</p>
            </article>

            <article className="filamento-item">
              <h3>TPU</h3>
              <p>Flexível e elástico, ideal para peças que precisam dobrar ou absorver impacto.</p>
              <p>Temperatura de impressão: 210-230°C</p>
            </article>
          </div>
        </section>

        <section className="sobre" id="sobre">
          <h2>Sobre o PrintHub 3D</h2>
          <p>Esta é uma galeria demonstrativa de modelos e filamentos para impressão 3D FDM. O projeto foi desenvolvido como Trabalho de Conclusão da Disciplina de Front-end.</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 PrintHub 3D - Galeria de Impressão 3D</p>
      </footer>
    </div>
  )
}

export default App
