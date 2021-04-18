# Lava Instagram Story Creator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

1. Install Docker and docker-compose.
1. Run `docker-compose build app`. This will build the environment.

## OpenAI API Key

1. Create an `.env` file in the root of the project:

```
└── public
└── src
.env
...
```

2. Inside the `.env` file add `REACT_APP_OPENAI_SECRET_KEY`

`.env`:

```
REACT_APP_API_KEY=your_api_key
```

> :warning: **DON'T** post your GPT-3 API key anywhere in internet, especially in your code, when you push it to GitHub.

## Dev

1. Make sure to have set up you [OpenAI API Key](#OpenAI-API-key) properly
1. Spin the container, `docker-compose start`
1. Dev server is then available at `localhost:3001`
1. Happy Coding!
1. To stop, `docker-compose stop`
1. To restart, `docker-compose start`
1. To remove the container, `docker-compose down`

## Production

Production pipeline has not been implemented yet. Preview only in Development mode.
