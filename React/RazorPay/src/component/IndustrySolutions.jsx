import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  FaShoppingCart,
  FaGraduationCap,
  FaUniversity,
  FaLaptopCode,
  FaUserTie
} from 'react-icons/fa';

const IndustrySolution = () => {
  return (
    <>
      <Container fluid className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="display-4 fw-semibold mb-4">
                Powering every industry.<br />
                Powering all disruptors.
              </h2>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-around align-items-center py-4">
                <FaShoppingCart className="text-primary fs-1" />
                <FaGraduationCap className="text-primary fs-1" />
                <FaUniversity className="text-primary fs-1" />
                <FaLaptopCode className="text-primary fs-1" />
                <FaUserTie className="text-primary fs-1" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="display-5 fw-bold mb-4">
              Empower your <span className="text-success">e-commerce business</span>
            </h2>
            <p className="lead text-muted mb-4">
              Streamline payment management with a unified dashboard, enabling both
              online and in-person payment collection while enhancing conversion
              rates and minimizing fraud.
            </p>
            <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
              <img src="https://framerusercontent.com/images/x2Zm6zi427C3aYm224pjFo5WA.png?scale-down-to=2048" alt="Nykaa" height="30" />
              <img src="https://framerusercontent.com/images/NLUTOlvMNLQrms90Dn203naq8.png?scale-down-to=2048" alt="Decathlon" height="30" />
              <img src="https://framerusercontent.com/images/k5UdVvwCfB0xBQ9CvoCFo8B8Nx4.png" alt="Zomato" height="30" />
              <img src="https://framerusercontent.com/images/kysqFYZar2auXuCuRNXifiHezBI.png" alt="Flipkart" height="50" />
              <span className="text-muted small">+70,000 others</span>
            </div>
            <Button variant="primary" size="lg">
              See Solutions →
            </Button>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="https://framerusercontent.com/images/F3BzYQjHmEPoe0X0YmHXSTO2hiE.png"
              alt="Hero"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IndustrySolution;