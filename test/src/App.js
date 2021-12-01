import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar codigo es interesante <code>src/App.js</code> and save to reload.

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Combinamos git y reactjs.
        </a>
        <p>Se pudo?</p>
        <p>Se recontra pudo :D</p>
      </header>
    </div>
  );
}

export default App;
