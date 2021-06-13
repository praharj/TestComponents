import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Row,Col } from "react-bootstrap";
import NavBar from "./navbar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home";
import QuizApp from "./quizapp";

// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/gamemode" component={QuizApp} />
//       </Switch>
//     </BrowserRouter>
//   );
// }
function QuizApp1(){
  function checkAns(){
      let correctAns=document.getElementById("opt3")
      correctAns.style.backgroundColor="chartreuse"
      let explanation=document.getElementById("explanation")
      explanation.style.display="block"
      let correctDot=document.getElementById("progress0")
      correctDot.style.backgroundColor="chartreuse"
  }
  return (
    <div>
      <NavBar></NavBar>
      <div style={{ textAlign: "center", margin: "2%" }}>
        <span id="progress0" class="dot"></span>
        <span id="progress1" class="dot"></span>
        <span id="progress2" class="dot"></span>
        <span id="progress3" class="dot"></span>
        <span id="progress4" class="dot"></span>
        <span id="progress5" class="dot"></span>
        <span id="progress6" class="dot"></span>
        <span id="progress7" class="dot"></span>
        <span id="progress8" class="dot"></span>
        <span id="progress9" class="dot"></span>
      </div>
      <div
        style={{
          backgroundColor: "aqua",
          marginTop: "3%",
          padding: "2% 3% 2% 3%",
        }}
        className="container"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div style={{ marginTop: "5%" }} className="container">
        <Row>
          <Col style={{ marginBottom: "3%" }} sm={12} md={6}>
            <button
              style={{
                width: "100%",
                height: "100%",
                padding: "2%",
                backgroundColor: "chartreuse",
              }}
              id="opt1"
            >
              Opt1
            </button>
          </Col>
          <Col style={{ marginBottom: "3%" }} sm={12} md={6}>
            <button
              style={{
                width: "100%",
                height: "100%",
                padding: "2%",
                backgroundColor: "chartreuse",
              }}
              id="opt2"
            >
              Opt2
            </button>
          </Col>
          <Col style={{ marginBottom: "3%" }} sm={12} md={6}>
            <button
              style={{
                width: "100%",
                height: "100%",
                padding: "2%",
                backgroundColor: "white",
              }}
              onClick={checkAns}
              id="opt3"
            >
              Opt3
            </button>
          </Col>
          <Col style={{ marginBottom: "3%" }} sm={12} md={6}>
            <button
              style={{
                width: "100%",
                height: "100%",
                padding: "2%",
                backgroundColor: "#ffcccb ",
              }}
              id="opt4"
            >
              Opt4
            </button>
          </Col>
        </Row>
        <div
          style={{
            backgroundColor: "aqua",
            marginTop: "2%",
            padding: "2% 3% 2% 3%",
            display: "none",
          }}
          className="container"
          id="explanation"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div
          id="nextbtn"
          className="container"
          style={{ backgroundColor: "aquamarine"}}
        >
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<QuizApp1 />, document.getElementById("root"));
