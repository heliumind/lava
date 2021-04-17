import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import createPrompt from '../../utils/connectGpt3';
import article from '../../assets/samples/article.txt';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Header from '../Header';
import NewsInput from '../NewsInput';
import StoryPreview from '../StoryPreview';

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  root: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
    height: '100vh',
  },
}));

function App() {
  const classes = useStyles();
  fetch(article)
  .then(response => response.text())
  .then(text => createPrompt(text));

  return (
    <div>
      <Header />
      <Grid container component="main" className={classes.root}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          component={Paper}
          elevation={6}
          square
        >
          <NewsInput />
        </Grid>
        <Grid item xs={12} sm={8} md={5} className={classes.image}>
          <StoryPreview></StoryPreview>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
