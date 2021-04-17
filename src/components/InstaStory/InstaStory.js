import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  story: {
    width: '32em',
    height: '57em',
    backgroundColor: 'red',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
  },
  storyImg: {
    position: 'relative',
    height: '55%',
    width: '100%',
    backgroundImage:
      'url("https://img.br.de/66e5975b-3efc-49c8-bbd7-9522b0658815.jpeg?q=80&rect=8%2C174%2C5255%2C2958&w=2000")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
  },
  hashtagsWrapper: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    minHeight: '20%',
    padding: '0.5em 3em',
    display: 'flex',
    alignItems: 'flex-end',
    background: 'rgb(0,0,0)',
    background:
      'linear-gradient(0deg, rgba(0,0,0,0.798739564185049) 0%, rgba(0,0,0,0) 100%)',
    color: '#fff',
    fontSize: '1.2em',
  },
  hashtag: {
    marginRight: '1.2em',
  },
  storyContent: {
    height: '45%',
    width: '100%',
    padding: '3em',
    backgroundColor: '#FFF',
    textAlign: 'center',
  },
  storyTitleWrapper: {
    fontSize: '2em',
    fontWeight: 'bold',
    backgroundColor: '#222',
  },
  storyTitle: {
    color: '#fff',
  },
  storyText: {
    textAlign: 'left',
    fontSize: '1.5em',
  },
}));

function getNthHashtag(hashtags, index) {
  hashtags = hashtags.split(', ');
  return hashtags.length > index ? hashtags[index] : '';
}

function InstaStory(props) {
  const classes = useStyles();

  return (
      <div className={classes.story}>
        <div className={classes.storyImg}>
          <div className={classes.hashtagsWrapper}>
            <div>
              <span className={classes.hashtag}>
                {getNthHashtag(props.storyState.Hashtag, 0)}
              </span>
              <span className={classes.hashtag}>
                {getNthHashtag(props.storyState.Hashtag, 1)}
              </span>
              <span className={classes.hashtag}>
                {getNthHashtag(props.storyState.Hashtag, 2)}
              </span>
            </div>
          </div>
        </div>
        <div className={classes.storyContent}>
          <div className={classes.storyTitleWrapper}>
            <div className={classes.storyTitle}>
              {props.storyState.Schlagzeile}
            </div>
          </div>
          <div className={classes.storyText}>
            <p>{props.storyState.Zusammenfassung}</p>
          </div>
        </div>
      </div>
  );
}

export default InstaStory;
