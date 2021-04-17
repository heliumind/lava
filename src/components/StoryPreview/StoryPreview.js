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
  },
  title: {
    textAlign: "left"
  },
  story: {
    width: '450px',
    height: '800px',
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
    padding: '15px',
    zIndex: '20'

  },
  storyBar: {
    width: '100%',
    height: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '5px',
  },
  storyBarProgress: {
    width: '50%',
    height: '5px',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
  },
  storyInfo: {
    margin: '20px 0px',
    color: '#ffffff'

  },
  storyLogo: {
    display: 'inline-block',
    marginBottom: '-10px',
    marginRight: '10px',
    width: '30px',
    height: '30px',
    borderRadius: '100%',
    backgroundColor: '#33AAFF'
  },
storyTime: {
    display: 'inline-block',
    marginLeft: '15px',
    color: '#aaaaaa'
    },
    storyImg: {
        height: '60%',
        width: '100%',
        backgroundImage: 'url("https://img.br.de/66e5975b-3efc-49c8-bbd7-9522b0658815.jpeg?q=80&rect=8%2C174%2C5255%2C2958&w=2000")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',

        },
    storyContent: {
        height: '40%',
        width: '100%',
        padding: '45px',
        backgroundColor: '#FFF',
        textAlign: 'center',
    },
    storyTitleWrapper: {
        fontSize: '2rem',
        fontWeight: 'bold',
        backgroundColor: '#222'
    },
    storyTitle: {
        color: '#fff'
    },
    storyText: {
        textAlign: 'left',
        fontSize: '1.2rem',
    },

}));

function StoryPreview() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <h2 className={classes.title}>Vorschau</h2>
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
            <div className={classes.storyImg}></div>
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
        <p>StoryPreview</p>
    </div>
  );
}

export default StoryPreview;
