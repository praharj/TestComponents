import { React, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

const Industryslider = () => {
  const [val, setVal] = useState(0);

  const setValSlider = (event) => {
    setVal(event.target.value);
  };
  return (
    <Row>
      <Col sm={12} md={3}>
        Hi
      </Col>
      <Col sm={12} md={9}>
        <div class="slidecontainer">
          <input
            onInput={setValSlider}
            type="range"
            min="1"
            max="100"
            value={val}
            class="slider"
            id="myRange"
          />
          <p>Value:{val}</p>
        </div>
      </Col>
    </Row>
  );
};

function SpecialMode() {
  return (
    <div>
      <div
        className="container"
        style={{
          backgroundColor: "lightblue",
          marginTop: "2%",
          textAlign: "center",
          padding: "2%",
        }}
      >
        <Button style={{ marginRight: "2%" }}>Primary</Button>
        <Button style={{ marginRight: "2%" }}>Secondary</Button>
        <Button style={{ marginRight: "2%" }}>Tertiary</Button>
      </div>
      <div className="container" style={{ backgroundColor: "chartreuse" }}>
        <Row>
          <Col sm={12} md={8}>
            <div className="container">
              Industries
              <Row>
                <Col>ind1</Col>
                <Col>ind1</Col>
                <Col>ind1</Col>
                <Col>ind1</Col>
                <Col>Add(+)</Col>
                {/* <Col>ind1</Col> */}
              </Row>
            </div>
          </Col>
          <Col sm={12} md={4} style={{textAlign:"center"}}>
            Graphs
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row noGutters>
          <Col sm={12} md={8} style={{padding:"0"}}>
            <div
              style={{
                textAlign: "center",
                paddingTop: "3% ",
                backgroundColor: "lightgrey",
              }}
            >
              <Industryslider></Industryslider>
              <Industryslider></Industryslider>
              <Industryslider></Industryslider>
              <Industryslider></Industryslider>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SpecialMode;
