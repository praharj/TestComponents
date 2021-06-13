import React from "react";
import { Row, Col } from "react-bootstrap";
import SectorButton from "./sectorButton.js";
import Stats from "./stats";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
