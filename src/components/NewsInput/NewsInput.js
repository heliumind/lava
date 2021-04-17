import React from 'react';
import { Formik, Field, Form } from 'formik';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  },
}));

function NewsInput(props) {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Formik
        initialValues={{
          articleURL: '',
          articleText: '',
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          console.log('submit: ', data);
          props.onClick(data);
          setSubmitting(false);
        }}
      >
        {({
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
        }) => (
          <Form className={classes.form}>
            <Typography variant="h6">Article Input</Typography>
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
            <Typography variant="body">or</Typography>
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={isSubmitting}

                >
                  Generate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="reset"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={resetForm}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewsInput;
