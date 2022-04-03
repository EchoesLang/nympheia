import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nympheia EL
        </p>
        <a
          className="App-link"
          href="/echolang"
          rel="noopener noreferrer"
        >
          GO ECHOLANG
        </a>
      </header>
    </div>
  );
}

export default App;