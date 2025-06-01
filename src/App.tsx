import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { conteudoCurso, respostasExercicios } from './data/conteudo.ts';
import './App.css';

// Componente para a página inicial
const Home = () => {
  return (
    <div className="home-container">
      <h1>Curso de JavaScript</h1>
      <p className="home-description">
        Bem-vindo ao curso completo de JavaScript! Este curso foi desenvolvido para ajudar você a aprender 
        JavaScript do zero, com conceitos teóricos e exercícios práticos para fixação.
      </p>
      
      <div className="modules-grid">
        {conteudoCurso.map(modulo => (
          <div className="module-card" key={modulo.id}>
            <h2>{modulo.titulo}</h2>
            <p>{modulo.descricao}</p>
            <Link to={`/modulo/${modulo.id}`} className="module-button">
              Iniciar Módulo
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente para exibir um módulo específico
const Modulo = () => {
  const { moduloId } = useParams();
  const navigate = useNavigate();
  const modulo = conteudoCurso.find(m => m.id === moduloId);

  if (!modulo) {
    return <div className="error-message">Módulo não encontrado!</div>;
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Voltar para Início
        </button>
        <h1>{modulo.titulo}</h1>
        <p className="module-description">{modulo.descricao}</p>
      </div>

      <div className="content-navigation">
        <div className="sidebar">
          <h3>Conteúdo</h3>
          <ul>
            {modulo.topicos.map(topico => (
              <li key={topico.id}>
                <Link to={`/modulo/${moduloId}/topico/${topico.id}`}>
                  {topico.titulo}
                </Link>
              </li>
            ))}
          </ul>
          
          <h3>Exercícios</h3>
          <ul>
            {modulo.exercicios.map(exercicio => (
              <li key={exercicio.id}>
                <Link to={`/modulo/${moduloId}/exercicio/${exercicio.id}`}>
                  {exercicio.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="main-content">
          <h2>Selecione um tópico ou exercício para começar</h2>
          <p>Escolha um dos tópicos ou exercícios no menu lateral para iniciar seus estudos.</p>
        </div>
      </div>
    </div>
  );
};

// Componente para exibir um tópico específico
const Topico = () => {
  const { moduloId, topicoId } = useParams();
  const navigate = useNavigate();
  
  const modulo = conteudoCurso.find(m => m.id === moduloId);
  if (!modulo) {
    return <div className="error-message">Módulo não encontrado!</div>;
  }
  
  const topico = modulo.topicos.find(t => t.id === topicoId);
  if (!topico) {
    return <div className="error-message">Tópico não encontrado!</div>;
  }

  // Encontrar índices para navegação
  const topicoIndex = modulo.topicos.findIndex(t => t.id === topicoId);
  const prevTopico = topicoIndex > 0 ? modulo.topicos[topicoIndex - 1] : null;
  const nextTopico = topicoIndex < modulo.topicos.length - 1 ? modulo.topicos[topicoIndex + 1] : null;

  return (
    <div className="module-container">
      <div className="module-header">
        <button className="back-button" onClick={() => navigate(`/modulo/${moduloId}`)}>
          ← Voltar para {modulo.titulo}
        </button>
        <h1>{modulo.titulo}</h1>
      </div>

      <div className="content-navigation">
        <div className="sidebar">
          <h3>Conteúdo</h3>
          <ul>
            {modulo.topicos.map(t => (
              <li key={t.id} className={t.id === topicoId ? 'active' : ''}>
                <Link to={`/modulo/${moduloId}/topico/${t.id}`}>
                  {t.titulo}
                </Link>
              </li>
            ))}
          </ul>
          
          <h3>Exercícios</h3>
          <ul>
            {modulo.exercicios.map(exercicio => (
              <li key={exercicio.id}>
                <Link to={`/modulo/${moduloId}/exercicio/${exercicio.id}`}>
                  {exercicio.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="main-content">
          <h2>{topico.titulo}</h2>
          <div 
            className="topic-content"
            dangerouslySetInnerHTML={{ __html: topico.conteudo }}
          />
          
          <div className="navigation-buttons">
            {prevTopico && (
              <Link to={`/modulo/${moduloId}/topico/${prevTopico.id}`} className="prev-button">
                ← {prevTopico.titulo}
              </Link>
            )}
            
            {nextTopico && (
              <Link to={`/modulo/${moduloId}/topico/${nextTopico.id}`} className="next-button">
                {nextTopico.titulo} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para exibir um exercício específico
const Exercicio = () => {
  const { moduloId, exercicioId } = useParams();
  const navigate = useNavigate();
  const [mostrarResposta, setMostrarResposta] = React.useState(false);
  
  const modulo = conteudoCurso.find(m => m.id === moduloId);
  if (!modulo) {
    return <div className="error-message">Módulo não encontrado!</div>;
  }
  
  const exercicio = modulo.exercicios.find(e => e.id === exercicioId);
  if (!exercicio) {
    return <div className="error-message">Exercício não encontrado!</div>;
  }

  // Encontrar índices para navegação
  const exercicioIndex = modulo.exercicios.findIndex(e => e.id === exercicioId);
  const prevExercicio = exercicioIndex > 0 ? modulo.exercicios[exercicioIndex - 1] : null;
  const nextExercicio = exercicioIndex < modulo.exercicios.length - 1 ? modulo.exercicios[exercicioIndex + 1] : null;

  return (
    <div className="module-container">
      <div className="module-header">
        <button className="back-button" onClick={() => navigate(`/modulo/${moduloId}`)}>
          ← Voltar para {modulo.titulo}
        </button>
        <h1>{modulo.titulo}</h1>
      </div>

      <div className="content-navigation">
        <div className="sidebar">
          <h3>Conteúdo</h3>
          <ul>
            {modulo.topicos.map(topico => (
              <li key={topico.id}>
                <Link to={`/modulo/${moduloId}/topico/${topico.id}`}>
                  {topico.titulo}
                </Link>
              </li>
            ))}
          </ul>
          
          <h3>Exercícios</h3>
          <ul>
            {modulo.exercicios.map(e => (
              <li key={e.id} className={e.id === exercicioId ? 'active' : ''}>
                <Link to={`/modulo/${moduloId}/exercicio/${e.id}`}>
                  {e.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="main-content">
          <div className="exercise-container">
            <h2>{exercicio.titulo}</h2>
            
            <div className="exercise-description">
              <h3>Enunciado:</h3>
              <p>{exercicio.enunciado}</p>
              
              {exercicio.dica && (
                <div className="exercise-hint">
                  <h4>Dica:</h4>
                  <p>{exercicio.dica}</p>
                </div>
              )}
            </div>
            
            <div className="exercise-workspace">
              <h3>Área de Trabalho:</h3>
              <textarea 
                className="code-editor" 
                placeholder="Escreva seu código aqui..."
                rows={10}
              />
              
              <div className="exercise-actions">
                <button 
                  className="show-answer-button"
                  onClick={() => setMostrarResposta(!mostrarResposta)}
                >
                  {mostrarResposta ? 'Ocultar Resposta' : 'Mostrar Resposta'}
                </button>
              </div>
              
              {mostrarResposta && (
                <div className="exercise-answer">
                  <h3>Resposta:</h3>
                  <div 
                    dangerouslySetInnerHTML={{ __html: respostasExercicios[exercicioId] }}
                  />
                </div>
              )}
            </div>
            
            <div className="navigation-buttons">
              {prevExercicio && (
                <Link to={`/modulo/${moduloId}/exercicio/${prevExercicio.id}`} className="prev-button">
                  ← {prevExercicio.titulo}
                </Link>
              )}
              
              {nextExercicio && (
                <Link to={`/modulo/${moduloId}/exercicio/${nextExercicio.id}`} className="next-button">
                  {nextExercicio.titulo} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <div className="header-content">
            <Link to="/" className="logo">
              <span className="logo-text">JS</span>
              <span className="logo-subtitle">Estudos</span>
            </Link>
            <nav className="main-nav">
              <Link to="/">Início</Link>
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                MDN Docs
              </a>
            </nav>
          </div>
        </header>
        
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modulo/:moduloId" element={<Modulo />} />
            <Route path="/modulo/:moduloId/topico/:topicoId" element={<Topico />} />
            <Route path="/modulo/:moduloId/exercicio/:exercicioId" element={<Exercicio />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Curso de JavaScript - Todos os direitos reservados</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
