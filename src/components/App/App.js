import React from 'react';
import logo from '../../assets/logo.svg';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Header from '../Header';

const useStyles = makeStyles({
  mainContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container spacing={2} className={classes.mainContainer}>
        <Grid item xs={8}>
          <Typography variant="h6" gutterBottom>
            Text input
          </Typography>
        </Grid>
        <Grid item xs={4}>
          Instagram stroy preview
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
