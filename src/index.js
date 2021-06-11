import React,{useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SectorButton from "./sectorButton.js";
import {Container,Row,Col} from "react-bootstrap"
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
          {/* <div style={{ textAlign:"center" }}> */}
          <SectorButton name="Primary Sector" color="primary"></SectorButton>
          <SectorButton name="Secondary Sector" color="info"></SectorButton>
          <SectorButton name="Tertiary Sector" color="warning"></SectorButton>
          <SectorButton name="Game Mode 1" color="danger"></SectorButton>
          {/* </div> */}
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
            {/* <ul style={{ listStyleType: "none" }}>
              <li style={{ marginTop: "30px" }}>Param 1=Value 1</li>
              <li style={{ marginTop: "30px" }}>Param 1=Value 1</li>
              <li style={{ marginTop: "30px" }}>Param 1=Value 1</li>
              <li style={{ marginTop: "30px" }}>Param 1=Value 1</li>
              <li style={{ marginTop: "30px" }}>Param 1=Value 1</li>
              <li style={{ marginTop: "30px" }}>Param 1=Value 1</li>
            </ul> */}
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
      {/* </Container> */}
    </>
  );
}

ReactDOM.render(<FullWidthGrid />, document.getElementById("root"));
