import logo from '../../assets/logo.svg';
import './App.css';
import createPrompt from '../../utils/connectGpt3';
import article from '../../assets/samples/article.txt';


function App() {
  
  fetch(article)
  .then(response => response.text())
  .then(text => createPrompt(text));
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
