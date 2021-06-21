import React, { useState } from "react";
import {Row,Col,Button, Modal, Badge,ProgressBar} from "react-bootstrap"
import Stats from './statspopup'

function IdleClicker() {
  const [showStats, setShowStats] = useState(false)
  const [showManagers, setShowManagers] = useState(false)
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

  var i = 0;
  const animate = (props) => {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById(props);
      var width = 1;
      var id = setInterval(frame, 100);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          elem.style.width = "0%";
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }

  const IdleClickerui = (props) => {
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
              
              <Button style={{ margin: "auto 0",backgroundColor: 'rgba(0, 0, 0, 0.3)', border: 'none' }}>Buy {buyAmt}</Button>
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
          <div className="myProgress">
            <div id={props.id} className='probar'></div>
          </div>
            <Button onClick={()=>animate(props.id)} style={{backgroundColor: 'rgba(0, 0, 0, 0.3)',border: 'none',marginTop: '2%'}}>Click me </Button>
          </Col>
          {/* </Row> */}
          {/* </div> */}
          {/* </Col> */}
        </Row>
      </div>
    );
  };

  function Stats(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Stats
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center'}}>
          <div>
            <Badge className='stats-badge'>Parameter 1</Badge>:<Badge className='stats-badge' style={{backgroundColor: 'yellow',marginLeft: '1%'}}>value 1</Badge>
            <ProgressBar now='10' label='10'/>
          </div>
          <div>
            <Badge className='stats-badge'>Parameter 2</Badge>:<Badge className='stats-badge' style={{backgroundColor: 'yellow',marginLeft: '1%'}}>value 2</Badge>
            <ProgressBar now='20' label='20'/>
          </div>
          <div>
            <Badge className='stats-badge'>Parameter 3</Badge>:<Badge className='stats-badge' style={{backgroundColor: 'yellow',marginLeft: '1%'}}>value 3</Badge>
            <ProgressBar now='30' label='30'/>
          </div>
          <div>
            <Badge className='stats-badge'>Parameter 4</Badge>:<Badge className='stats-badge' style={{backgroundColor: 'yellow',marginLeft: '1%'}}>value 4</Badge>
            <ProgressBar now='40' label='40'/>
          </div>
          <div>
            <Badge className='stats-badge'>Parameter 5</Badge>:<Badge className='stats-badge' style={{backgroundColor: 'yellow',marginLeft: '1%'}}>value 5</Badge>
            <ProgressBar now='50' label='50'/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function Managers(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Managers
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='manager'>
            <img style={{width: '100px', height: '100px', borderRadius: '50px', objectFit: 'contain'}} src='http://images5.fanpop.com/image/photos/31600000/Gus-T-T-Showbizand-etc-Smooth-psych-31699715-185-272.jpg'/>
            <h4>Gus TT -</h4>
            <h4 id='managerof'>Manager of Himashu</h4>
            <p>Burton "Gus" Guster is a fictional character on Psych played by American actor Dulé Hill. </p>
            <div style={{textAlign: 'center'}}>
              <h5>Cost : $30000</h5>
              <Button>Appoint</Button>
            </div>
          </div>
          <hr/>
          <div className='manager'>
            <img style={{width: '100px', height: '100px', borderRadius: '50px', objectFit: 'contain'}} src='http://images5.fanpop.com/image/photos/31600000/Gus-T-T-Showbizand-etc-Smooth-psych-31699715-185-272.jpg'/>
            <h4>Gus TT -</h4>
            <h4 id='managerof'>Manager of Himashu</h4>
            <p>Burton "Gus" Guster is a fictional character on Psych played by American actor Dulé Hill. </p>
            <div style={{textAlign: 'center'}}>
              <h5>Cost : $30000</h5>
              <Button>Appoint</Button>
            </div>
          </div>
          <hr/>
          <div className='manager'>
            <img style={{width: '100px', height: '100px', borderRadius: '50px', objectFit: 'contain'}} src='http://images5.fanpop.com/image/photos/31600000/Gus-T-T-Showbizand-etc-Smooth-psych-31699715-185-272.jpg'/>
            <h4>Gus TT -</h4>
            <h4 id='managerof'>Manager of Himashu</h4>
            <p>Burton "Gus" Guster is a fictional character on Psych played by American actor Dulé Hill. </p>
            <div style={{textAlign: 'center'}}>
              <h5>Cost : $30000</h5>
              <Button>Appoint</Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div id='idleclick'>
    {showStats ? (
      <>
      <Stats
        show={showStats}
        onHide={() => setShowStats(false)}
      />
    </>
    ) : (
      <></>
    )}
    {showManagers ? (
      <>
      <Managers
        show={showManagers}
        onHide={() => setShowManagers(false)}
      />
    </>
    ) : (
      <></>
    )}
    <div>
      <div
      className='sm-nav'
      >
        <Button style={{ width: "85px",backgroundColor: 'rgba(0, 0, 0, 0.3)', border: 'none' }} onClick={()=>setShowStats(true)}>Stats</Button>
        <div
          style={{
            textAlign: "center",
            display: "inline-block ",
            width: "50%",
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          952,100,111
        </div>
        <div style={{ textAlign: "right", display: "inline-block" }}>
          <Button style={{ width: "85px",backgroundColor: 'rgba(0, 0, 0, 0.3)', border: 'none' }} onClick={()=>setShowManagers(true)}>Managers</Button>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          // backgroundColor: "lightblue",
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
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRight:'1px solid black',
              color: "white",
            }}
          >
            Primary
          </li>
          <li
            style={{
              display: "inline",
              padding: "1.25%",
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRight:'1px solid black',
              color: "white",
            }}
          >
            Secondary
          </li>
          <li
            style={{
              display: "inline",
              padding: "1.25%",
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: "white",
            }}
          >
            Tertiary
          </li>
        </ul>
      </div>
      <div className="container buybtn">
        <Button value={buyAmt} onClick={incAmt} style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', border: 'none'}}>
          x{buyAmt}
        </Button>
      </div>
      <IdleClickerui id='probar1'></IdleClickerui>
      <IdleClickerui id='probar2'></IdleClickerui>
      <IdleClickerui id='probar3'></IdleClickerui>
      <IdleClickerui id='probar4'></IdleClickerui>
      <IdleClickerui id='probar5'></IdleClickerui>
      <IdleClickerui id='probar6'></IdleClickerui>
      <IdleClickerui id='probar7'></IdleClickerui>
    </div>
    </div>
  );
}

export default IdleClicker;