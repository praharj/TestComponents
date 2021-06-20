import React, { useState } from "react";
import {Row,Col,Button} from "react-bootstrap"
function IdleClicker() {
  const [buyAmt, setBuyAmt] = useState(1);
  const incAmt = () => {
    if (buyAmt === 1) {
      setBuyAmt(10);
    } else if (buyAmt === 10) {
      setBuyAmt(100);
    } else {
      setBuyAmt(1);
    }
  };
  const IdleClickerui = () => {
    return (
      <div
        className="container"
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          marginBottom: "1%",
          marginTop: "1%",
          padding: "0",
        }}
      >
        <Row noGutters>
          <Col sm={12} md={2} style={{ textAlign: "center" }}>
            <img
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                objectFit: "contain",
                width: "150px",
                height: "150px",
                marginBottom: "1%",
                marginTop: "1%",
              }}
              src="https://i.ibb.co/bKHs80C/rice.jpg"
            ></img>
          </Col>
          <Col sm={12} md={2} style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
              Farming<br></br>
              <br></br>
              
              <Button style={{ margin: "auto 0" }}>Buy {buyAmt}</Button>
            </div>
          </Col>
          {/* <Col sm={12} md={6}> */}
          {/* <div style={{ display: "inline-block" }}> */}
          {/* <Row style={{ display: "inline-block" }}> */}
          <Col sm={12} md={4} style={{ display: "inline-block" }}>
            Income:1000k food/run <br></br>
            Coins/Run:40<br></br>
            Current Quantity:200<br></br>
            Cost to buy next {buyAmt}:2000<br></br>
            Time for 1 Run: 10 sec
          </Col>
          <Col sm={12} md={4} style={{ display: "inline-block" }}>
            Hi This Manish Pandey,Right Arm Middle Batsman...Favourite Cricketer
            is Kevin Pietersen.
          </Col>
          {/* </Row> */}
          {/* </div> */}
          {/* </Col> */}
        </Row>
      </div>
    );
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: "chartreuse",
          textAlign: "center",
          padding: "1.5% 0",
        }}
      >
        <Button style={{ width: "85px" }}>Stats</Button>
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
          <Button style={{ width: "85px" }}>Managers</Button>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          backgroundColor: "lightblue",
          padding: "1.25%",
          // display:"inline",
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
      <div className="container buybtn">
        <Button value={buyAmt} onClick={incAmt}>
          x{buyAmt}
        </Button>
      </div>
      <IdleClickerui></IdleClickerui>
      <IdleClickerui></IdleClickerui>
      <IdleClickerui></IdleClickerui>
      <IdleClickerui></IdleClickerui>
      <IdleClickerui></IdleClickerui>
      <IdleClickerui></IdleClickerui>
      <IdleClickerui></IdleClickerui>
    </div>
  );
}

export default IdleClicker;