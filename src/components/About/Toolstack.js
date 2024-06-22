import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJenkins,
  SiVisualstudiocode,
  // SiPostman,
  // SiSlack,
  // SiVercel,
  // SiMacos,
} from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiApachetomcat } from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
    <SiLinux />
     </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
  <SiDocker />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiApachetomcat />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiJenkins />
</Col>

  
    </Row>
  );
}

export default Toolstack;
