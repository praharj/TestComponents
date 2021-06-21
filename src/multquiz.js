import {React} from "react"
import {Row,Col,Button} from "react-bootstrap"

function MultQuiz() {
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
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
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
        {/* <div className="content"> */}
        <div
          style={{
            marginTop: "3%",
            padding: "2% 3% 2% 3%",
          }}
          className="container content"
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
      {/* </div> */}
      <div style={{ marginTop: "5%" }} className="container">
        <Row>
          <Col style={{ marginBottom: "3%" }} sm={12} md={6}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                padding: "2%",
                // backgroundColor: "chartreuse",
              }}
              id="opt1"
              variant="outline-dark"
            >
              Opt1
            </Button>
          </Col>
          <Col style={{ marginBottom: "3%" }} sm={12} md={6}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                padding: "2%",
                // backgroundColor: "chartreuse",
              }}
              variant="outline-dark"
              id="opt2"
            >
              Opt2
            </Button>
          </Col>
          <Col style={{ marginBottom: "3%" }} sm={12} md={6}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                padding: "2%",
                // backgroundColor: "white",
              }}
              onClick={checkAns}
              variant="outline-dark"
              id="opt3"
            >
              Opt3
            </Button>
          </Col>
          <Col style={{ marginBottom: "3%" }} sm={12} md={6}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                padding: "2%",
                // backgroundColor: "#ffcccb ",
              }}
              variant="outline-dark"
              id="opt4"
            >
              Opt4
            </Button>
          </Col>
        </Row>
        <div
          style={{
            // backgroundColor: "aqua",
            marginTop: "2%",
            padding: "2% 3% 2% 3%",
            display: "none",
          }}
          className="container content"
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
          // style={{ backgroundColor: "aquamarine" }}
        >
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default MultQuiz;