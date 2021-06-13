import React,{useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SectorButton from "./sectorButton.js";
import {Container,Row,Col,Button,Badge,ButtonGroup} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./navbar.js"

function FullWidthGrid() {
  // const [color,setColor]=useState("")
  let color=""

  return (
    <>
      <NavBar></NavBar>
      <Row noGutters>
        <Col sm={12} md={8} className="text-center mt-2">
          sm=12 md=8
          <SectorButton name="Primary Sector" color="primary"></SectorButton>
          <SectorButton name="Secondary Sector" color="info"></SectorButton>
          <SectorButton name="Tertiary Sector" color="warning"></SectorButton>
          <SectorButton name="Game Mode 1" color="danger"></SectorButton>
        </Col>
        <Col sm={12} md={4} className="text-center mt-2">
          <div
            style={{
              margin: "10%",
              border: "2px solid black",
              backgroundColor: "#21ED7F",
            }}
          >
            <h2>Stats</h2>
            <div style={{ marginTop: "30px" }}>
              <h4 style={{ marginBottom: "20px" }}>Param 1=Value 1</h4>
              <h4 style={{ marginBottom: "20px" }}>Param 1=Value 1</h4>
              <h4 style={{ marginBottom: "20px" }}>Param 1=Value 1</h4>
              <h4 style={{ marginBottom: "20px" }}>Param 1=Value 1</h4>
              <h4 style={{ marginBottom: "20px" }}>Param 1=Value 1</h4>
              <h4 style={{ marginBottom: "20px" }}>Param 1=Value 1</h4>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

function QuizApp(){
  return (
    <div>
      <NavBar></NavBar>
      <div
        style={{ backgroundColor: "aqua", height: "100vh" }}
        className="container"
      >
        <div style={{ textAlign: "right" }}>
          <h1>
            <Badge style={{ width: "200px" }} variant="secondary">
              Timer-0:00
            </Badge>
          </h1>
          <h1>
            <Badge style={{ width: "200px" }} variant="secondary">
              Score-0
            </Badge>
          </h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            style={{
              border: "1px solid black",
              borderRadius: "4px",
              padding: "5px",
              width: "320px",
              marginTop: "30px",
            }}
            src="https://i.pinimg.com/600x315/89/c3/ec/89c3ec21ef6ca277d9108db0c3339f77.jpg"
            alt="gus"
          ></img>
          <h1 id="img-title">Gus Dancing</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            className="choicebtn"
            id="primarybtn"
            // style={{ marginLeft: "0" }}
            size="lg"
            variant="light"
          >
            Primary
          </Button>
          <Button className="choicebtn" size="lg" variant="light">
            Secondary
          </Button>
          <Button className="choicebtn" size="lg" variant="light">
            Tertiary
          </Button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<QuizApp />, document.getElementById("root"));
