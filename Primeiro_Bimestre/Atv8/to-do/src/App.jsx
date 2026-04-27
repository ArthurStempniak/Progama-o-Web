import { useState } from 'react';
import './App.css';

function App() {
  // Estado da Lista
  const [tarefas, setTarefas] = useState([]);
  
  // Estado do Input
  const [novaTarefa, setNovaTarefa] = useState('');

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') {
      return;
    }

    const tarefaObj = {
      id: Date.now(),
      text: novaTarefa.trim(),
      concluida: false
    };

    // Atualiza o estado de forma imutável
    setTarefas([...tarefas, tarefaObj]);
    setNovaTarefa(''); // Limpa o input
  };

  // Função para remover uma tarefa pelo ID
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  // Função para alternar o status de concluída
  const alternarConcluida = (id) => {
    setTarefas(tarefas.map(tarefa => 
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <div className="area-input">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {/* Renderização dinâmica da Lista */}
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span className="tarefa">
              <input
                type="checkbox"
                className="checkTarefa"
                checked={tarefa.concluida}
                onChange={() => alternarConcluida(tarefa.id)}
              />
              <span className={`textoTarefa ${tarefa.concluida ? 'concluida' : ''}`}>
                {tarefa.text}
              </span>
            </span>
            <button className="btn-remover" onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;