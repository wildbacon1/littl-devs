import './App.css'; // Asegúrate de tener este archivo para estilos generales
import Game from './components/Game'; // Importa el componente Game

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conecta 4</h1>
        <Game />
      </header>
    </div>
  );
}

export default App;
