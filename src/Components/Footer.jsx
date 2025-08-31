import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
          <Col className="text-center" style={{ fontSize: "13px" }}>
            © {new Date().getFullYear()} Personal portfolio. All Rights Reserved.
        </Col>
    </footer>
  );
};

export default Footer;
