import { React, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

const Industryslider = () => {
  const [val, setVal] = useState(1);

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
          Value:
          <input
            onInput={setValSlider}
            type="number"
            min="1"
            max="100"
            value={val}
            style={{ width: "50px" }}
          ></input>
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
              <Row style={{ marginBottom: "2%" }}>
                <Col>
                  <Button size="sm" variant="info">
                    Ind1
                  </Button>
                </Col>
                <Col>
                  <Button size="sm" variant="info">
                    Ind1
                  </Button>
                </Col>
                <Col>
                  <Button size="sm" variant="info">
                    Ind1
                  </Button>
                </Col>
                <Col>
                  <Button size="sm" variant="info">
                    Ind1
                  </Button>
                </Col>
                {/* <Col>Add(+)</Col> */}
                <Col>
                  <Button size="sm" variant="info">
                    Ind1
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={4} style={{ textAlign: "center" }}>
            Graphs
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row noGutters>
          <Col sm={12} md={8} style={{ padding: "0" }}>
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
      <div className="container">
        <Row noGutters>
          <Col sm={12} md={4}>
            Res1
          </Col>
          <Col sm={12} md={4}>
            Res1
          </Col>
          <Col sm={12} md={4}>
            Res1
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SpecialMode;
