import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SignUp from './components/SignUp/SignUp'
import Demo from './components/demo'
import Signup from './components/SignUp/Signup.js'
import Signin from './components/SignIn/Signin.js'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/signup" component={Signup}/>  
        </Switch>
      </Router>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
