import logo from '../../assets/logo.svg';
import './App.css';
import example1 from '../../assets/samples/example1.txt';
import response1 from '../../assets/samples/response1.txt';
import example2 from '../../assets/samples/example2.txt';
import response2 from '../../assets/samples/response2.txt';
import fetchGpt3Response from '../../utils/connectGpt3';
import {generatePrompt,generateExample} from '../../utils/promptMaker';

const text = "Großbritannien gilt ab Sonntag nicht mehr als Corona-Risikogebiet. Wie das Robert Koch-Institut mitteilte, streicht die Bundesregierung das Land wegen der stark gesunkenen Infektionszahlen von der Liste. Damit entfällt für Einreisende aus Großbritannien die Quarantänepflicht. Ausgenommen sind einzelne Überseegebiete. Zwei beliebte Urlaubsregionen in Portugal werden wegen steigender Infektionszahlen dagegen wieder als Risikogebiete eingestuft: die Algarve im Süden des Landes und die Azoren im Atlantik. Wer von dort nach Deutschland einreist, muss sich ab Sonntag wieder für zehn Tage selbst isolieren und kann sich erst nach fünf Tagen durch einen zweiten Test davon befreien.";

const PROMPT = generatePrompt(text);
const GPT3_ENDPOINT = "https://api.openai.com/v1/engines/davinci/completions";
const GPT3_PARAMS = {
  "max_tokens": 150,
  "temperature": 0.3,
  "top_p": 1,
  "presence_penalty": 1,
  "frequency_penalty": 1,
  "n": 1,
  "best_of": 1,
  "stop": "\n\n"
};

function App() {

  var prompt = ""
  
  var samples = [example1, response1, example2, response2];
  
  var promise = Promise.all(samples.map(sample =>
    fetch(sample).then(resp => resp.text())
    )).then(texts => {
        var sample1 = generateExample(texts[0],texts[1]);
        var sample2 = generateExample(texts[2],texts[3]);
        prompt = sample1 + sample2 + PROMPT;
        fetchGpt3Response(prompt, GPT3_ENDPOINT, GPT3_PARAMS);
    });

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
