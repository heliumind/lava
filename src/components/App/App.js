import logo from '../../assets/logo.svg';
import './App.css';
import fetchGpt3Response from '../../utils/connectGpt3';

function App() {
  
  const prompt = `Artist: Megadeth\n\nLyrics:\n`;
  const url = 'https://api.openai.com/v1/engines/davinci/completions';
  const max_tokens =  160;
  const temperature =  0.7;
  const frequency_penalty = 0.5;
    
  const response = fetchGpt3Response(url, prompt, max_tokens, temperature,frequency_penalty);
  console.log(response);

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
