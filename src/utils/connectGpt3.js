import axios from 'axios';

async function fetchGpt3Response(prompt, url, gptParams){
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
      console.log(response.data.choices[0].text);
    }, (error) => {
      console.log(error);
    });
}

export default fetchGpt3Response;