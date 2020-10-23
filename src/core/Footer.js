import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/footer.css";

export default function Footer() {
  return (
    <div>
      <Container fluid className="footer-container">
        <Row>
          <Col xs={12} md={12} lg={6} xl={6} className="footer-tagline mt-2">
            <p className="text-white">
              (Copyright © InnoMeet, ® InnoWise Global Technology Pvt. Ltd. All
              Rights Reserved.
            </p>
          </Col>
          <Col xs={12} md={12} lg={6} xl={6} className="mt-2 other-links">
            <a href="/" className="text-white">
              Home
            </a>

            <a href="/" className="text-white ml-4">
              Contact
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
