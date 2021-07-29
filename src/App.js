import React from "react";
// import "./App.css";
// import ReactDOM from "react-dom";
import Signup from "./Signup";
import Signin from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/forgotpassword">
            <ForgotPassword />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
