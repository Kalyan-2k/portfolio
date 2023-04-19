import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import blog from "../../Assets/blog.png";
import proct from "../../Assets/proctoring.png";
import lib from "../../Assets/library.png";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={blog}
                isBlog={false}
                title="Tech's Blog"
                description="Tech's Blog is created using Python, Mongo DB, Flask and uses Mongoengine as an ORM for Python and Mongo DB Connectivity. This application consists of Profile page, Home page & create-a-post page and search functionality."
                ghLink="https://github.com/Kalyan-2k/Blog"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={proct}
                isBlog={false}
                title="Proctoring System"
                description="Proctoring system is a deep learning project created using python as backend and flutter as frontend. The frontend is used to register & login in to students accounts and capture their face biometrics while registration and also during examination."
                ghLink="https://github.com/Kalyan-2k/Proctoring-System"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={lib}
                isBlog={false}
                title="Libraray Management"
                description="It is a updated version of traditional library softwares. It has all the neccessary functionalities that a regular library software should contain but with minimal no. of steps.
                It also contains voice based search functinalithy as an added feature."
                ghLink="https://github.com/Kalyan-2k/Library_Management"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
