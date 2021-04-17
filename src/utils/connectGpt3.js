import example1 from '../assets/samples/example1.txt';
import response1 from '../assets/samples/response1.txt';
import example2 from '../assets/samples/example2.txt';
import response2 from '../assets/samples/response2.txt';
import axios from 'axios';

const GPT3_ENDPOINT = "https://api.openai.com/v1/engines/davinci/completions";
const GPT3_PARAMS = {
  "max_tokens": 250,
  "temperature": 0.3,
  "top_p": 1,
  "presence_penalty": 1,
  "frequency_penalty": 1,
  "n": 1,
  "best_of": 1,
  "stop": "Lese diese"
};

function generateExample(text, response){
  const pretext = 'Lese diesen Zeitungsartikel und beantworte die folgenden Fragen:\n\n"""\n'
  const posttext = '\n"""\n\nFrage:\n1. Was könnte eine Schlagzeile für diesen Zeitungsartikel sein?\n2. Was könnte eine Zusammenfassung für einen Tweet sein?\n3. Wie könnten mögliche Hashtags lauten?\n'
  var prompt = pretext + text + posttext + response;
  //console.log(prompt);
  return prompt;
}

function generatePrompt(text){
  const pretext = 'Lese diesen Zeitungsartikel und beantworte die folgenden Fragen:\n\n"""\n'
  const posttext = '\n"""\n\nFrage:\n1. Was könnte eine Schlagzeile für diesen Zeitungsartikel sein?\n2. Was könnte eine Zusammenfassung für einen Tweet sein?\n3. Wie könnten mögliche Hashtags lauten?\n'
  var prompt = pretext + text + posttext;
  //console.log(prompt);
  return prompt;
}

function createPrompt(text, callback){
  var prompt = generatePrompt(text);

  var samples = [example1, response1, example2, response2];
  
  Promise.all(samples.map(sample =>
    fetch(sample).then(resp => resp.text())
    )).then(texts => {
        var sample1 = generateExample(texts[0],texts[1]);
        var sample2 = generateExample(texts[2],texts[3]);
        prompt = sample1 + sample2 + prompt;
        return prompt;
    }).then(prompt => fetchGpt3Response(prompt, GPT3_ENDPOINT, GPT3_PARAMS, callback));
}

async function fetchGpt3Response(prompt, url, gptParams, callback){
    const apiKey = process.env.REACT_APP_OPENAI_SECRET_KEY
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
    };
    gptParams.prompt = prompt;
    console.log(gptParams);
    console.log(prompt);

    axios({
      method: 'post',
      url: url,
      data: gptParams,
      headers: headers
    }).then((response) => {
      parseResponse(response.data.choices[0].text, callback);
    }, (error) => {
      console.log(error);
    });
}

function parseResponse(text, callback){
  var arrayOfLines = text.match(/[^\r\n]+/g);
  console.log("Array of Lines", arrayOfLines);
  var result = {"Schlagzeile": arrayOfLines[1].substring(3), "Zusammenfassung": arrayOfLines[2].substring(3), "Hashtag": arrayOfLines[3].substring(3)};
  console.log("Result", result);
  callback(result);
  return result;
}

export default createPrompt;