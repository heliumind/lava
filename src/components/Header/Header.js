import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <InstagramIcon className={classes.menuButton} color="inherit" />
          <Typography variant="h5" className={classes.title}>
            Story Lava
          </Typography>
          <Typography variant="h6" color="inherit">
            by Team Lava
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
