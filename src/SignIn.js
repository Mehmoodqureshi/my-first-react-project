import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  body: {
    height: "100vh",
    // backgroundColor: "yellow",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const re = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
    );
    if (!re.test(email)) {
      alert("wrong email");
      return;
    }
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://127.0.0.1:8000/api/signIn", data)
      .then((response) => {
        if (response.data === "") {
          alert("Wrong password");
        } else {
          alert("login successfull");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const classes = useStyles();
  return (
    <Grid container className={classes.body}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form className={classes.form}>
            <TextField
              id="email"
              label="Your Email"
              type="email"
              fullWidth
              autoComplete="email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <TextField
              id="password"
              label="Password"
              type="password"
              fullWidth
              autoComplete="current-password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <br />
            <br />
            <Button
              type="submit"
              halfWidth
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/forgotpassword" variant="body2">
                  {"Forgot Password?"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signin;
