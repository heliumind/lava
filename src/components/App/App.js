import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import createPrompt from '../../utils/connectGpt3';
import article from '../../assets/samples/article.txt';
import { makeStyles, withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Header from '../Header';
import NewsInput from '../NewsInput';
import StoryPreview from '../StoryPreview';

const styles = theme => ({
  storyPreview: {
    background: 'radial-gradient(circle, rgba(92,92,92,1) 0%, rgba(0,0,0,1) 100%)'
  },
  root: {
    padding: '0',
    height: '100vh',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {},
      summaries: [
        {
          Schlagzeile: '',
          Zusammenfassung: '',
          Hashtag: '',
        },
      ],
      test: true,
    };


    fetch(article)
        .then((response) => response.text())
        .then((text) => createPrompt(text));
  }

  setText(input) {
    this.setState({
      text: input,
    });
  }

  render() {
    const { classes } = this.props;
    return (<div>
      <Header />
      <Grid container component="main" className={classes.root}>
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            elevation={6}
            square
        >
          <NewsInput onClick={(input) => this.setText(input)} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} className={classes.storyPreview}>
          <StoryPreview></StoryPreview>
        </Grid>
      </Grid>
    </div>)
  }
}

export default withStyles(styles, { withTheme: true })(App);
