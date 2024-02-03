/* eslint-disable */
import "./App.css";
import { useEffect } from "react";
import PreSigninHomepage from "./components/PreSigninHomepage/PreSigninHomepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Signup/Register";
import Login from "./components/Login/Login";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then(console.log);
  });

  return (
    <>
      <PreSigninHomepage />
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
