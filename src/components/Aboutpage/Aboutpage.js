import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              I'm a self-taught Front End cum Full stack developer . I build
              websites with a focus on creativity and availability for everyone
              using them. Curious to learn more about developing optimised and
              responsive websites, love problem solving, and care about writing
              a clean and maintainable code.
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <li>HTML5/CSS3</li>
                  <li>JavaScript</li>
                  <li>Bootsrap 5</li>
                  <li>React Js</li>
                  <li>React-Bootsrap</li>
                </Col>
                <Col md={5}>
                  <li>Material-ui</li>
                  <li>Python</li>
                  <li>MySQL</li>
                  <li>Mongo DB</li>
                  <li>Git/Github</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
