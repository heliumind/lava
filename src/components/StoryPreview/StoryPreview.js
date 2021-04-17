import React from 'react';
import { makeStyles } from '@material-ui/styles';
import InstaStory from '../InstaStory';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '10px',
  },
  titleWrapper: {
    width: '32em',
    textAlign: 'left',
    color: '#fff',
    fontWeight: 'bold',
    margin: '1em 0',
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '2.5em',
    width: '50%'
  },
  story: {
    width: '32em',
    height: '57em',
    backgroundColor: 'red',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '20%',
    background:
      'transparent linear-gradient(180deg, #000000B2 0%, #00000000 100%) 0% 0% no-repeat padding-box',
    zIndex: '10',
  },
  storyTop: {
    position: 'absolute',
    top: '0px',
    width: '100%',
    padding: '1em',
    zIndex: '20',
  },
  storyBar: {
    width: '100%',
    height: '0.3em',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '5px',
  },
  storyBarProgress: {
    width: '50%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
  },
  storyInfo: {
    margin: '1em 0px',
    color: '#ffffff',
    fontSize: '1.2em',
  },
  storyLogo: {
    display: 'inline-block',
    marginBottom: '-0.8em',
    marginRight: '0.8em',
    width: '2.5em',
    height: '2.5em',
    borderRadius: '100%',
    backgroundColor: '#33AAFF',
  },
  storyTime: {
    display: 'inline-block',
    marginLeft: '1em',
    color: '#aaaaaa',
  },
}));

function trimSummary(storyState) {
  storyState = Object.assign({}, storyState);
  var tokens = storyState.Schlagzeile.length*2;
  var summarySplit = storyState.Zusammenfassung.split(".");
  var summary = "";




  var idx = 0;
  while(idx < summarySplit.length && tokens+summarySplit[idx].length < 300){

    summary += summarySplit[idx] + ".";
    tokens+=summarySplit[idx].length;
    idx++;
  }
  storyState.Zusammenfassung = summary.replace("..", ".");

  console.log("Tokens: " + tokens);

  return storyState;
}

function StoryPreview(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <div className={classes.title}>Vorschau</div>
        <Button size="small" color="secondary" onClick={() => { props.moveImg()}}>Bild anpassen</Button>
      </div>
      <div className={classes.story}>
        <div className={classes.storyTop}>
          <div className={classes.storyBar}>
            <div className={classes.storyBarProgress}></div>
          </div>
          <div className={classes.storyInfo}>
            <span className={classes.storyLogo}></span>
            <span>Deine Story</span>
            <span className={classes.storyTime}>3h</span>
          </div>
        </div>
        <div className={classes.gradient}></div>
        <InstaStory imgURL={props.imgURL} imgPosition={props.imgPosition} storyState={trimSummary(props.storyState)}></InstaStory>
        <InstaStory imgURL={props.imgURL} imgPosition={props.imgPosition} storyState={trimSummary(props.storyState)}></InstaStory>
      </div>
    </div>
  );
}

export default StoryPreview;
