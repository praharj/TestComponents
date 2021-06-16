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
function QuizApp1() {
  function checkAns() {
    let correctAns = document.getElementById("opt3");
    correctAns.style.backgroundColor = "chartreuse";
    let explanation = document.getElementById("explanation");
    explanation.style.display = "block";
    let correctDot = document.getElementById("progress0");
    correctDot.style.backgroundColor = "chartreuse";
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
          style={{ backgroundColor: "aquamarine" }}
        >
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
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

function IdleClicker() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "chartreuse",
          textAlign: "center",
          padding: "1.5% 0",
        }}
      >
        <Button>Stats</Button>
        <div
          style={{
            textAlign: "center",
            display: "inline-block ",
            width: "50%",
          }}
        >
          952,100,111
        </div>
        <div style={{ textAlign: "right", display: "inline-block" }}>
          <Button>Managers</Button>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          backgroundColor: "lightblue",
          padding: "1.25%",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            textAlign: "center",
            padding: "0",
            margin: "0",
          }}
        >
          <li
            style={{
              display: "inline",
              padding: "1.25%",
              backgroundColor: "grey",
              borderLeft: "2px solid black",
              borderBottom: "2px solid black",
              color: "white",
            }}
          >
            Primary
          </li>
          <li
            style={{
              display: "inline",
              padding: "1.25%",
              backgroundColor: "grey",
              borderLeft: "2px solid black",
              borderBottom: "2px solid black",
              color: "white",
            }}
          >
            Secondary
          </li>
          <li
            style={{
              display: "inline",
              padding: "1.25%",
              backgroundColor: "grey",
              borderLeft: "2px solid black",
              borderBottom: "2px solid black",
              color: "white",
            }}
          >
            Tertiary
          </li>
        </ul>
      </div>
      <div>
        <img
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            objectFit: "contain",
            width: "150px",
            height: "150px",
          }}
          src="https://i.ibb.co/bKHs80C/rice.jpg"
        ></img>
      </div>
      <div>
        <img
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            objectFit: "contain",
            width: "150px",
            height: "150px",
          }}
          src="https://i.ibb.co/bKHs80C/rice.jpg"
        ></img>
      </div>
      <div>
        <img
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            objectFit: "contain",
            width: "150px",
            height: "150px",
          }}
          src="https://i.ibb.co/bKHs80C/rice.jpg"
        ></img>
      </div>
      <div>
        <img
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            objectFit: "contain",
            width: "150px",
            height: "150px",
          }}
          src="https://i.ibb.co/bKHs80C/rice.jpg"
        ></img>
      </div>
      <div>
        <img
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            objectFit: "contain",
            width: "150px",
            height: "150px",
          }}
          src="https://i.ibb.co/bKHs80C/rice.jpg"
        ></img>
      </div>
      <div>
        <img
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            objectFit: "contain",
            width: "150px",
            height: "150px",
          }}
          src="https://i.ibb.co/bKHs80C/rice.jpg"
        ></img>
      </div>
      <div>
        <img
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            objectFit: "contain",
            width: "150px",
            height: "150px",
          }}
          src="https://i.ibb.co/bKHs80C/rice.jpg"
        ></img>
      </div>
      <div>
        <img
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            objectFit: "contain",
            width: "150px",
            height: "150px",
          }}
          src="https://i.ibb.co/bKHs80C/rice.jpg"
        ></img>
      </div>
      <div>
        <img
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            objectFit: "contain",
            width: "150px",
            height: "150px",
          }}
          src="https://i.ibb.co/bKHs80C/rice.jpg"
        ></img>
      </div>
    </div>
  );
}
ReactDOM.render(<IdleClicker />, document.getElementById("root"));
