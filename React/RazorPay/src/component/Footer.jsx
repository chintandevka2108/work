import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const footerLinks = {
  // ... (same footerLinks structure)
};

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3 mt-5 border-top">
      <Container>
        <Row>
          {Object.entries(footerLinks).map(([section, links]) => (
            <Col xs={6} md={4} lg={2} key={section} className="mb-4">
              <h6 className="fw-semibold mb-3 text-primary">{section}</h6>
              <ul className="list-unstyled">
                {links.map((link) => (
                  <li key={link} className="mb-2">
                    <a href="#" className="text-decoration-none text-secondary small">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <Row className="mt-4 pt-3 border-top">
          <Col md={6}>
            <p className="small text-muted mb-0">
              © {new Date().getFullYear()} Razorpay Software Pvt. Ltd. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <a href="#">
                <img src="https://img.icons8.com/ios-filled/24/000000/facebook-new.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/ios-filled/24/000000/twitter.png" alt="Twitter" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/ios-filled/24/000000/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png" alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;