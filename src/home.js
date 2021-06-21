import React from "react";
import { Row, Col, Card, CardDeck, Button } from "react-bootstrap";
import SectorButton from "./sectorButton.js";
import Stats from "./stats";
import Chanbot from "./chanbot";
import IdleClicker from "./idleclicker.js";
import MultQuiz from "./multquiz.js";
import SpecialMode from "./specialmode.js";
import NavBar from "./navbar.js";
import { Link } from "react-scroll";
import ContactForm from "./contactus.js";
import AboutUs from "./aboutus.js";
function Home() {
  return (
    <>
      {/* <div id="home">
        <NavBar></NavBar>
        <div className="background curved">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <h1>Tales Of ArthShastra</h1>
          <h3>Learn Economic Principles by Playing,and Enjoying!</h3>
          <p>
            Multiple game modes,to relax,have fun,and learn,all at the same
            time!!
          </p>
          <Link
            className="btn btn-light"
            activeClass="active"
            to="gamemodelist"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
            delay={1000}
          >
            Play Now!
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,256L80,224C160,192,320,128,480,138.7C640,149,800,235,960,261.3C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div
          name="gamemodelist"
          className="container"
          style={{ marginBottom: "3%" }}
        >
          <Row noGutters style={{ marginTop: "2%" }}>
            <Col sm={12} md={8} className="text-center mt-2">
              <CardDeck>
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXbBAs_ApjFcZwLJCumLKDnlltPi0DyXQaQ&usqp=CAU"
                  />
                  <Card.Body>
                    <Card.Title>Guess The Sector</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <div className="playbtnhome">
                      <Button>Play</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXbBAs_ApjFcZwLJCumLKDnlltPi0DyXQaQ&usqp=CAU"
                  />
                  <Card.Body>
                    <Card.Title>Who Will Become The Economist</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                    <div className="playbtnhome">
                      <Button>Play</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXbBAs_ApjFcZwLJCumLKDnlltPi0DyXQaQ&usqp=CAU"
                  />
                  <Card.Body>
                    <Card.Title>Idle Clicker:Country Edition</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                    <div className="playbtnhome">
                      <Button>Play</Button>
                    </div>
                  </Card.Body>
                </Card>
              </CardDeck>
              <CardDeck style={{ marginTop: "3%" }}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXbBAs_ApjFcZwLJCumLKDnlltPi0DyXQaQ&usqp=CAU"
                  />
                  <Card.Body>
                    <Card.Title>Country Simulator</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <div className="playbtnhome">
                      <Button>Play</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXbBAs_ApjFcZwLJCumLKDnlltPi0DyXQaQ&usqp=CAU"
                  />
                  <Card.Body>
                    <Card.Title>Coming Soon!</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                    <div className="playbtnhome">
                      <Button>Play</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXbBAs_ApjFcZwLJCumLKDnlltPi0DyXQaQ&usqp=CAU"
                  />
                  <Card.Body>
                    <Card.Title>About Us</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                    <div className="playbtnhome">
                      <Button>Play</Button>
                    </div>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
            <Col sm={12} md={4} className="text-center mt-2">
              <Stats />
            </Col>
          </Row>
        </div>
      </div> */}
      <AboutUs />
      {/* </div> */}
    </>
  );
}

export default Home;
