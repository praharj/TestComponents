import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MdClose } from "react-icons/md";

function Chanbot() {
  const [showBot, setShowBot] = useState(false);
  const [opacity, setOpacity] = useState(1);

  // const Opac = {
  //   opacity: {opacity},
  //   textAlign: 'center'
  // }

  function callChanbot() {
    //   setOpacity(0.6)
    document.getElementById("home").style.opacity = "0.6";
    setShowBot(true);
  }

  function closeChanbot() {
    //   setOpacity(1)
    document.getElementById("home").style.opacity = "1";
    setShowBot(false);
  }

  return (
    <div>
      {/* <div id='chanbot' style={Opac}> */}
      {/* <h1>Chanbot says hi</h1>
        <h1>Chanbot says hi</h1>
        <h1>Chanbot says hi</h1>
        <Button onClick={callChanbot}>Chanbot</Button> */}
      <Button id="float-btn" onClick={callChanbot}>
        <img src="https://i.imgur.com/LmRc2Rr.png"></img>
      </Button>
      {/* </div> */}
      {showBot ? (
        <div className="bochak">
          <div className="chan-box">
            <div className="close-icon">
              <MdClose
                size="2em"
                style={{ cursor: "pointer" }}
                onClick={closeChanbot}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eget eros quis odio dictum porta. Maecenas tincidunt pretium purus
              ut bibendum. Etiam hendrerit velit ultricies, dapibus est quis,
              malesuada tortor. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div id="chanakya">
            <img src="https://i.imgur.com/WKFJfD3.png" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Chanbot;
