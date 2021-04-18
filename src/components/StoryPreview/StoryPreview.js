import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import InstaStory from '../InstaStory';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
  storyMockup: {
    width: '32em',
    height: '57em',
    backgroundColor: 'red',
    borderRadius: '8px',
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
  arrowWrapper: {
      position: 'absolute',
      top: '50%',
      width: '100%',
      display:'flex',
      justifyContent: 'space-between',
      zIndex: '100',

  },
  arrowLeft: {
      width:'30px',
      height: '30px',
      backgroundColor: 'rgba(0,0,0,0.2)',
      marginLeft: '-50px',
      borderRadius: '100%',
      minWidth: '0px',
      padding: '0'
  },
  arrowRight: {
    width:'30px',
    height: '30px',
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginRight: '-50px',
    borderRadius: '100%',
    minWidth: '0px',
    padding: '0'
  },
  arrowIconLeft: {
    marginTop: '6px',
    marginLeft: '7px'
  },
  arrowIconRight: {
    marginTop: '6px',
    marginLeft: '4px'
},
    instaStories: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
}
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

function selectStoryState(storyState, storyIdx) {
  switch (storyIdx) {
    case 1:
      return trimSummary(storyState.summaryHard);
    case 2:
      return trimSummary(storyState.summaryEasy);
    default:
      return trimSummary(storyState.summaryMain);
  }
}

function StoryPreview(props) {
  const classes = useStyles();
  const [storyIdx, setStoryIdx] = useState(0);

  console.log("State:");
  console.log(props.storyState);

  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <div className={classes.title}>Vorschau</div>
        <Button size="small" color="secondary" onClick={() => { props.moveImg()}}>Bild anpassen</Button>
      </div>
      <div className={classes.storyMockup}>
          <div className={classes.arrowWrapper}>
              <Button className={classes.arrowLeft} onClick={() => setStoryIdx((storyIdx + 1)%3)}>
                  <div  className={classes.arrowIconLeft}>
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                  </div>
                  
              </Button>
              <Button className={classes.arrowRight} onClick={() => setStoryIdx((storyIdx + 2)%3)}>
                <div  className={classes.arrowIconRight}>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </div>
              </Button>
          </div>
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
        <div className={classes.instaStories}>

          <InstaStory imgURL={props.imgURL} imgPosition={props.imgPosition} storyState={selectStoryState(props.storyState, storyIdx)}></InstaStory>
        </div>
      </div>
    </div>
  );
}

export default StoryPreview;
