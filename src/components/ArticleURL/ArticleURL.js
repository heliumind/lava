import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import clsx from 'clsx';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import extractSiteContent from '../../utils/htmlextractor';

const useStyles = makeStyles((theme) => ({
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

function ArticleURL(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  return (
    <Formik
      initialValues={{ articleURL: '' }}
      onSubmit={(data, { resetForm }) => {
        setSuccess(false);
        setLoading(true);
        // get text
        extractSiteContent(data.articleURL, (out) => {
          props.onClick(out.img);
          props.onExtract(out.text);
        });
        setLoading(false);
        setSuccess(true);
        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, resetForm }) => (
        <Form className={classes.form}>
          <Typography variant="h6">Article Input</Typography>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Field
                variant="outlined"
                margin="normal"
                fullWidth
                id="url"
                label="Article URL"
                name="articleURL"
                type="url"
                as={TextField}
              />
            </Grid>
            <Grid item>
              <div className={classes.submit}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={buttonClassname}
                  disabled={loading}
                >
                  Extract
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </Grid>
          </Grid>
          <Typography variant="body">or</Typography>
        </Form>
      )}
    </Formik>
  );
}

export default ArticleURL;
