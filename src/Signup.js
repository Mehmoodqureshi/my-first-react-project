import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
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
const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confrmpassword, setConfrmpassword] = useState();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const re = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
    );
    console.log(re.test(email));
    if (!re.test(email)) {
      alert("wrong email");
      return;
    }
    alert("succseefully ");
    const data = {
      email: email,
      password: password,
      fname: FirstName,
      lname: LastName,
      gender: gender,
    };
    axios
      .post("http://127.0.0.1:8000/api/post", data)
      .then((response) => {
        console.log(response);
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
            Sign Up
          </Typography>

          <form className={classes.form}>
            <TextField
              label="Your Email"
              type="email"
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /> <br />
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
            <br /> <br />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e) => setConfrmpassword(e.target.value)}
            />
            <br />
            <br />
            <TextField
              label="First Name"
              type="text"
              variant="outlined"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              type="text"
              variant="outlined"
              onChange={(e) => setLastName(e.target.value)}
            />
            <br /> <br />
            <FormControl>
              <RadioGroup row>
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
                {/* <FormControlLabel
                  vale="Other"
                  control={<Radio />}
                  label="Other"
                /> */}
              </RadioGroup>
            </FormControl>
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Already have account?Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
