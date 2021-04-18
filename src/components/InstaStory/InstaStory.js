import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  story: {
    width: '32em',
    height: '57em',
    backgroundColor: 'rgb(220,220,220)',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
  },
  storyImg: {
    position: 'relative',
    height: '55%',
    width: '100%',
    backgroundImage: (props) => 'url("' + props.imgURL + '")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: (props) => props.imgPosition,
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
    padding: '2em 3em',
    backgroundColor: '#FFF',
    textAlign: 'center',
  },
  storyTitleWrapper: {
    fontSize: '2em',
    fontWeight: 'bold',
    lineHeight: '1.75em',
  },
  storyTitle: {
    display: 'inline',
    color: '#fff',
    backgroundColor: '#000',
    padding: '0.15em',
    boxDecorationBreak: 'clone',
    WebkitBoxDecorationBreak: 'clone'
  },
  storyText: {
    textAlign: 'left',
    fontSize: '1.5em',
  },
}));

function getNthHashtag(hashtags, index) {
  hashtags = hashtags.split(', ');
  var ht = hashtags.length > index ? hashtags[index] : '';
  if(ht.length > 2 &&  !ht.startsWith("#")) {
    ht = "#" + ht;
  }
  return ht;
}

function InstaStory(props) {
  const classes = useStyles(props);

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
            <span className={classes.storyTitle}>
              {props.storyState.Schlagzeile}
            </span>
          </div>
          <div className={classes.storyText}>
            <p>{props.storyState.Zusammenfassung}</p>
          </div>
        </div>
      </div>
  );
}

export default InstaStory;
