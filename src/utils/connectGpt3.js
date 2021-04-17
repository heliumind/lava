import axios from 'axios';

async function fetchGpt3Response(url, prompt, max_tokens, temperature,frequency_penalty ){
    const apiKey = process.env.REACT_APP_OPENAI_SECRET_KEY
    const params = {
      "prompt": prompt,
      "max_tokens": max_tokens,
      "temperature": temperature,
      "frequency_penalty": frequency_penalty
    };
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
    };

    axios({
      method: 'post',
      url: url,
      data: params,
      headers: headers
    }).then((response) => {
      return response.data.choices[0].text;
    }, (error) => {
      console.log(error);
    });
}

export default fetchGpt3Response;