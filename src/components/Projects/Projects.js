import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.jpg";
//import suicide from "../../Assets/Projects/suicide.png";
//import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Tracking System using CNN"
              description="Developed an Facial Recognition and Tracking System using CNN and biometric markers for real-time surveillance. The solution significantly improved monitoring efficiency and accuracy in diverse environments."
              ghLink="https://github.com/Abinesh12-1/Facial-Recognition-and-Tracking-System-Using-CNN.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
