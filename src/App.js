import logo from './logo.svg';
import './App.css';
import Navbar from './components/navvar/Nav'
import Intro from './components/introduce/Intro'
import { Topnav } from './components/navvar/Topnav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topnav></Topnav>
        <Navbar></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nympheia EL
        </p>
        <a
          className="App-link"
          href="/echolang"
          target="_blank"
          rel="noopener noreferrer"
        >
          GO ECHOLANG
        </a>
      </header>
      <div className="App-test">
        le
        <Intro></Intro>
      </div>
    </div>
  );
}

export default App;