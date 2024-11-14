// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <nav>
        <Link to="/meus-campeonatos">Meus Campeonatos</Link>
        <Link to="/novo-campeonato">Novo Campeonato</Link>
        <Link to="/ranking">Ranking</Link>
        <Link to="/recomendacoes">Recomendações</Link>
      </nav>

      <section>
        <h2>Campeonatos Ativos</h2>
        {/* Lista de campeonatos ativos */}
        <button>+ Criar Novo Campeonato</button>
      </section>

      <section>
        <h2>Recomendações</h2>
        {/* Recomendações de campeonatos */}
      </section>

      <section>
        <h2>Resultados Recentes</h2>
        {/* Resultados de jogos */}
      </section>
    </div>
  );
}

export default Home;
