import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArticleURL from '../ArticleURL';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

function NewsInput(props) {
  const classes = useStyles();
  const [article, setArticle] = useState('');

  const buttonClassname = clsx({
    [classes.buttonSuccess]: props.success,
  });

  return (
    <div className={classes.paper}>
      <ArticleURL
        onClick={(input) => props.onExtract(input)}
        onExtract={(text) => setArticle(text)}
      />
      <Formik
        enableReinitialize="true"
        initialValues={{
          articleText: article,
        }}
        onSubmit={(data) => {
          props.onGenerate(true, false);
          // make async call
          console.log('submit: ', data);
          props.onClick(data);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, resetForm }) => (
          <Form className={classes.form}>
            <Field
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline="true"
              rows={6}
              name="articleText"
              label="Article Text"
              id="article"
              autoFocus
              as={TextField}
            />
            <Grid container spacing={2}>
              <Grid item>
                <div className={classes.submit}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={buttonClassname}
                    disabled={props.loading}
                  >
                    Generate
                  </Button>
                  {props.loading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </Grid>
              <Grid item>
                <Button
                  type="reset"
                  variant="outlined"
                  color="primary"
                  className={classes.submit}
                  onClick={() => {
                    setArticle('');
                    props.onGenerate(false, false);
                    resetForm();
                  }}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewsInput;
