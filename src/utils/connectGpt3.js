import example1 from '../assets/samples/example1.txt';
import response1 from '../assets/samples/response1.txt';
import example2 from '../assets/samples/example2.txt';
import response2 from '../assets/samples/response2.txt';

import example11 from '../assets/samples1/example1.txt';
import response11 from '../assets/samples1/response1.txt';
import example21 from '../assets/samples1/example2.txt';
import response21 from '../assets/samples1/response2.txt';
import example31 from '../assets/samples1/example3.txt';
import response31 from '../assets/samples1/response3.txt';

import satz1 from '../assets/samples2/satz1.txt';
import article1 from '../assets/samples2/article1.txt';
import abstract1 from '../assets/samples2/abstract1.txt';
import satz2 from '../assets/samples2/satz2.txt';
import article2 from '../assets/samples2/article2.txt';
import abstract2 from '../assets/samples2/abstract2.txt';

import axios from 'axios';

const baseSamples = [example1, response1, example2, response2];
const vereinfachtSamples = [example11, response11, example21, response21, example31, response31];
const komplexSamples = [satz1, article1, abstract1, satz2, article2, abstract2];
const base_endpoint = "https://api.openai.com/v1/engines/davinci/completions";
const base_params = {
  "max_tokens": 150,
  "temperature": 0.3,
  "top_p": 1,
  "presence_penalty": 1,
  "frequency_penalty": 1,
  "n": 1,
  "best_of": 1,
  "stop": "Lese diese"
};
const vereinfacht_endpoint = "https://api.openai.com/v1/engines/curie-instruct-beta/completions";
const vereinfacht_params = {
  "max_tokens": 100,
  "temperature": 0.7,
  "top_p": 0.6,
  "presence_penalty": 1,
  "frequency_penalty": 0,
  "n": 1,
  "best_of": 1,
  "stop": "\n"
};
const komplex_endpoint = "https://api.openai.com/v1/engines/curie-instruct-beta/completions";
const komplex_params = {
  "max_tokens": 120,
  "temperature": 0.7,
  "top_p": 1,
  "presence_penalty": 1,
  "frequency_penalty": 0,
  "n": 1,
  "best_of": 1,
  "stop": "\n"
};

function generateBasePrompt(text, response){
  const pretext = 'Lese diesen Zeitungsartikel und beantworte die folgenden Fragen:\n\n"""\n'
  const posttext = '\n"""\n\nFrage:\n1. Was könnte eine Schlagzeile für diesen Zeitungsartikel sein?\n2. Was könnte eine Zusammenfassung für einen Tweet sein?\n3. Wie könnten mögliche Hashtags lauten?\n'
  var prompt;
  if(response != null){
    prompt = pretext + text + posttext + response;
  }
  else{
    prompt = pretext + text + posttext;
  }
  return prompt;
}

function generateVereinfachtPrompt(text, response){
  const pretext = 'Original: '
  const posttext = '\nVereinfacht: '
  var prompt;
  if(response != null){
    prompt = pretext + text + posttext + response + "\n";
  }
  else{
    prompt = pretext + text + posttext;
  }
  return prompt;
}

function generateKomplexPrompt(satz, article, abstract){
  const pretext = "Baue aus diesem Satz mit Informationen aus dem genannten Artikel einen wissenschaftlichen Abstract:\n\"\"\"\nSatz: " 
  const betweentext = "\nArtikel: " 
  const posttext = "\n\"\"\"\nAbstract: "

  var prompt;
  if(response != null){
    prompt = pretext + satz + betweentext + article + posttext + abstract + "\n";
  }
  else{
    prompt = pretext + satz + betweentext + article + posttext;
  }
  return prompt;
}

function createPrompt(text, callbacks, stage){

  var basePrompt = generateBasePrompt(text,null);
  
  Promise.all(baseSamples.map(sample =>
    fetch(sample).then(resp => resp.text())
    )).then(texts => {
        var prompt = "";
        for(var i = 0 ; i < texts.length - 1; i=i+2){
          prompt += generateBasePrompt(texts[i],texts[i+1]);
        }
        prompt += basePrompt;
        return prompt;
    }).then(prompt => fetchGpt3Response(prompt, base_endpoint, base_params, callbacks, stage, text));
}

function createVereinfachtPrompt(text, callbacks, stage){

  var vereinfachtPrompt = generateVereinfachtPrompt(text,null);

  Promise.all(vereinfachtSamples.map(sample =>
    fetch(sample).then(resp => resp.text())
    )).then(texts => {
        var prompt = "";
        for(var i = 0 ; i < texts.length - 1; i=i+2){
          prompt += generateVereinfachtPrompt(texts[i],texts[i+1]);
        }
        prompt += vereinfachtPrompt;
        return prompt;
    }).then(prompt => fetchGpt3Response(prompt, vereinfacht_endpoint, vereinfacht_params, callbacks, stage, text));
}

// TODO: Finish this method
function createKomplexPrompt(satz_text, article_text, callbacks, stage){

  var komplexPrompt = generateKomplexPrompt(satz_text, article_text,null);

  Promise.all(komplexSamples.map(sample =>
    fetch(sample).then(resp => resp.text())
    )).then(texts => {
        var prompt = "";
        for(var i = 0 ; i < texts.length - 2; i=i+3){
          prompt += generateKomplexPrompt(texts[i],texts[i+1], texts[i+2]);
        }
        prompt += komplexPrompt;
        return prompt;
    }).then(prompt => fetchGpt3Response(prompt, komplex_endpoint, komplex_params, callbacks, stage, article_text));
}

async function fetchGpt3Response(prompt, url, gptParams, callbacks, stage, original){
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
      if(stage === "base"){
        result = parseBaseResponse(response.data.choices[0].text, callbacks[0]);
        createVereinfachtPrompt(result[2], callbacks, "vereinfacht");
        createKomplexPrompt(result[2],original, callbacks, "komplex");
      }else if(stage === "vereinfacht"){
        parseVereinfachtResponse(response.data.choices[0].text, callbacks[1]);
      }else if(stage === "komplex"){
        parseKomplexResponse(response.data.choices[0].text, callback[2]);
      }
      
    }, (error) => {
      console.log(error);
    });
}

function parseBaseResponse(text, callback){
  var arrayOfLines = text.match(/[^\r\n]+/g);
  console.log("Array of Lines", arrayOfLines);
  var result;
  if(arrayOfLines.length === 4){
    result = {"Schlagzeile": arrayOfLines[1].substring(3), "Zusammenfassung": arrayOfLines[2].substring(3), "Hashtag": arrayOfLines[3].substring(3)};
  }else{
    result = {"Schlagzeile": arrayOfLines[1].substring(3), "Zusammenfassung": arrayOfLines[2].substring(3), "Hashtag": ""};
  }
  console.log("Result", result);
  callback(result);
  return result;
}

function parseVereinfachtResponse(text, callback){
  callback(text);
  console.log(text);
}

function parseKomplexResponse(text, callback){
  callback(text);
  console.log(text);
}

export default createPrompt;