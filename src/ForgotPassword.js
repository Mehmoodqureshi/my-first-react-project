import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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

const Forgotpassword = () => {
  const [email, setEmail] = useState();
  const [newPassword, setnewPassword] = useState();
  const [confrmnewPassword, setConfrmnewpassword] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const re = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
    );
    if (!re.test(email)) {
      alert("wrong email");
      return;
    }
    if (newPassword === confrmnewPassword) {
      //   alert("password changed");
    } else {
      alert("password not matched");
      return;
    }
    const data = {
      email: email,
      password: newPassword,
    };
    axios
      .post("http://127.0.0.1:8000/api/changePassword", data)
      .then((response) => {
        console.log(response);
        if (response.data === "") {
          alert("password not changed ");
        } else {
          alert("password change successfull");
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
            Forgot Password
          </Typography>

          <form className={classes.form}>
            <TextField
              label="Your Email"
              type="email"
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
              onChange={(e) => setnewPassword(e.target.value)}
            />
            <br />
            <br />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e) => setConfrmnewpassword(e.target.value)}
            />
            ,<br />
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Change Password
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"For Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Forgotpassword;
