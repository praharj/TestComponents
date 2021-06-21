import { React, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import NavBar from "./navbar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home";
import QuizApp from "./quizapp";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";

function Trial() {
  const [count, setCount] = useState(0);
  function decrement() {
    if (count === 0) {
      setCount((prevCount) => prevCount);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  }
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hi</h1>
      <Button onClick={decrement}>-</Button>
      <span
        style={{ width: "50px", display: "inline-block", textAlign: "center" }}
      >
        {count}
      </span>
      <Button onClick={increment}>+</Button>
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));
