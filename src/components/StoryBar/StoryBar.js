import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    storyBar: {
      width: '100%',
      height: '0.3em',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '5px',
    },
    storyBarProgress: {
      width: '100%',
      height: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: '5px',
      display: (props) => props.isVisible ? 'block' : 'none'
    },

  }));
  function StoryBar(props) {
    const classes = useStyles(props);

  
    return (
            <div className={classes.storyBar}>
              <div className={classes.storyBarProgress}></div>
            </div>
    );
  }
  
  export default StoryBar;
  