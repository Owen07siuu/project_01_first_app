import logo from './logo.svg';
import './App.css';
import { Myfirstcomponent } from './componentes/Myfirstcomponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <Myfirstcomponent />
        <p>
          Edit hola <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
