import React from 'react';
import './App.css';
import createPrompt from '../../utils/connectGpt3';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../Header';
import NewsInput from '../NewsInput';
import StoryPreview from '../StoryPreview';


const styles = (theme) => ({
  storyPreview: {
    background:
      'radial-gradient(circle, rgba(92,92,92,1) 0%, rgba(0,0,0,1) 100%)',
  },
  root: {
    padding: '0',
    height: '100vh',
  },
});

function trimArticle(text) {
  var trimmed = text.split('.');
  var shortned = "";

  var idx = 0;
  while(shortned.split(' ').length < 80 && idx < trimmed.length) {
    shortned += trimmed[idx] + ".";
    idx++;
  }
  console.log("Shortened: " + shortned);
  return shortned;
}

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          imgURL: '',
          imgPosition: '',

          summaries: {
              summaryMain: {
                  Schlagzeile: 'Schlagzeile',
                  Zusammenfassung: 'Zusammenfassung',
                  Hashtag: '#, #, #',
              },
              summaryEasy: {
                  Schlagzeile: 'Schlagzeile',
                  Zusammenfassung: 'Zusammenfassung',
                  Hashtag: '#, #, #',
              },
              summaryHard: {
                  Schlagzeile: 'Schlagzeile',
                  Zusammenfassung: 'Zusammenfassung',
                  Hashtag: '#, #, #',
              }
          }
      };
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Grid container component="main" className={classes.root}>
          <Grid item xs={false} sm={4} md={7} elevation={6} square>
            <NewsInput
              onExtract={(img) => {
                this.setState({
                    imgURL: img,
                    imgPosition: 'center',
                });
              }}
              onClick={(input) => {
                createPrompt(trimArticle(input['articleText']), [
                    (response) => {
                      this.setState({
                          summaries:{
                              summaryMain: response,
                              summaryEasy: response,
                              summaryHard: response
                      }})
                    },
                    (response) => {
                    console.log("Easy: " + response)
                      var obj = Object.assign({}, this.state.summaries.summaryMain);
                      obj.Zusammenfassung = response;

                        this.setState({
                            summaries:Object.assign(this.state.summaries, {
                                summaryEasy: obj
                            })
                        })
                    },
                    (response) => {
                        console.log("Hard: " + response)
                        var obj = Object.assign({}, this.state.summaries.summaryMain);
                        obj.Zusammenfassung = response;
                        this.setState({
                            summaries:Object.assign(this.state.summaries, {
                                summaryHard: obj
                            })
                        })
                    }], 'base')
              }}

            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} className={classes.storyPreview}>
            {console.log(this.state.imgURL)}
            <StoryPreview storyState={this.state.summaries}
                          imgURL={this.state.imgURL}
                          imgPosition={this.state.imgPosition}
                          moveImg={() => {
                              switch (this.state.imgPosition) {
                                  case 'right':
                                      this.setState({
                                          imgPosition: 'center',
                                      });
                                      break;
                                  case 'center':
                                      this.setState({
                                          imgPosition: 'left',
                                      });
                                      break;
                                  default:
                                      this.setState({
                                          imgPosition: 'right',
                                      });
                              }
                          }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
