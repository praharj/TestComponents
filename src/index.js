import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./navbar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home";
import QuizApp from "./quizapp";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gamemode" component={QuizApp} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
