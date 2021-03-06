import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Material UI imports
import {Avatar, Button, CssBaseline, TextField, Grid, LockOutlinedIcon, makeStyles, Container} from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// React Functions

const Register = () => {
  const classes = useStyles(); // using material UI Styles

  // essentially your state, with the this.setState. Use State returns 2 vals
  // set form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData; // destructuring the values in the form

  // set the form data, but update the target val
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value }); // for tracking changes in the form

  // Function that will submit to database
  const onSubmit = async (e) => {
    // on submit, will make post request to localhost 3000
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        console.log(body);
        const res = await axios.post(
          "http://localhost:3000/api/users",
          body,
          config
        ); // make axios post requests
        console.log(res.data);
        alert("Authenticated! Go to Dashboard");
        // need to figure out redirect
      } catch (err) {
        alert("Authentication failed");
        console.error(err.response);
      }
    }
  };

  // jsut create a go to dashboard

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                onChange={(e) => onChange(e)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="password2"
                autoComplete="current-password"
                onChange={(e) => onChange(e)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Authenticate
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            <Link
              to={{
                pathname: "/",
                email: email 
              }}
            >
              Go To Dashboard
            </Link>
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
