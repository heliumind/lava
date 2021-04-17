import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '10px'
  },
  titleWrapper: {
    width: '32em',
    textAlign: "left",
    color: "#fff",
    fontWeight: 'bold',
    margin: '1em 0'
  },
  title: {
      fontSize: '2.5em'
  },
  story: {
    width: '32em',
    height: '57em',
    backgroundColor: "red",
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
    background: 'transparent linear-gradient(180deg, #000000B2 0%, #00000000 100%) 0% 0% no-repeat padding-box',
    zIndex: '10'
  },
  storyTop: {
    position: 'absolute',
    top: '0px',
    width: '100%',
    padding: '1em',
    zIndex: '20'

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
    fontSize: '1.2em'

  },
  storyLogo: {
    display: 'inline-block',
    marginBottom: '-0.8em',
    marginRight: '0.8em',
    width: '2.5em',
    height: '2.5em',
    borderRadius: '100%',
    backgroundColor: '#33AAFF'
  },
storyTime: {
    display: 'inline-block',
    marginLeft: '1em',
    color: '#aaaaaa'
    },
storyImg: {
    position: 'relative',
    height: '55%',
    width: '100%',
    backgroundImage: 'url("https://img.br.de/66e5975b-3efc-49c8-bbd7-9522b0658815.jpeg?q=80&rect=8%2C174%2C5255%2C2958&w=2000")',
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
        background: 'linear-gradient(0deg, rgba(0,0,0,0.798739564185049) 0%, rgba(0,0,0,0) 100%)',
        color: '#fff',
        fontSize: '1.2em'
    },
    hashtag: {
        marginRight: '1.2em'
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
    backgroundColor: '#222'
},
storyTitle: {
    color: '#fff'
},
storyText: {
    textAlign: 'left',
    fontSize: '1.5em',
},

}));

function StoryPreview() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <div className={classes.titleWrapper}>
            <div className={classes.title}>Vorschau</div>
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
            <div className={classes.storyImg}>
                <div className={classes.hashtagsWrapper}>
                    <div>
                        <span className={classes.hashtag}>#Bundestagswahl</span>
                        <span className={classes.hashtag}>#Söder</span>
                        <span className={classes.hashtag}>#Laschet</span>
                    </div>
                </div>
            </div>
            <div className={classes.storyContent}>
                <div className={classes.storyTitleWrapper}>
                    <div className={classes.storyTitle}>"Stimmung aggressiv"</div>
                </div>
                <div className={classes.storyText}>
                <p>
                Im Kampf um die Unions-Kanzlerkandidatur ist weiter keine Einigung zwischen CDU-Chef Laschet und dem CSU-Vorsitzenden Söder in Sicht.
                </p>
                </div>

            </div>
        </div>
    </div>
  );
}

export default StoryPreview;
