import React from "react";
import { Row, Col } from "react-bootstrap";
import SectorButton from "./sectorButton.js";
import Stats from "./stats";
import Chanbot from './chanbot'
import IdleClicker from "./idleclicker.js";
import MultQuiz from "./multquiz.js";
import SpecialMode from "./specialmode.js";
function Home() {
  return (
    <>
    {/* <div id='home'>
      <Row noGutters>
        <Col sm={12} md={8} className="text-center mt-2">
          sm=12 md=8
          <SectorButton name="Primary Sector" color="primary"></SectorButton>
          <SectorButton name="Secondary Sector" color="info"></SectorButton>
          <SectorButton name="Tertiary Sector" color="warning"></SectorButton>
          <SectorButton name="Game Mode 1" color="danger"></SectorButton>
        </Col>
        <Col sm={12} md={4} className="text-center mt-2">
          <Stats />
        </Col>
      </Row>
      </div> */}
      <SpecialMode/>
    </>
  );
}

export default Home;
