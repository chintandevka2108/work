import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const sampleCards = [
    {
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      Name: 'Payment Gateway',
      description: 'Offer a seamless payment experience on your website or app',
    },
    {
      img: 'https://img.icons8.com/color/480/paypal.png',
      Name: 'Payment Button',
      description: 'Effortlessly add a Pay Now button without any coding required',
    },
    {
      img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      Name: 'Payment Link',
      description: 'Create and share links via email, text, and social for instant payments',
    },
  ];

  return (
    <div className="text-dark">
      {/* Hero Section */}
      <section className="bg-primary bg-gradient py-5">
        <Container>
          <Row className="align-items-center min-vh-50 py-5">
            <Col md={6} className="text-white">
              <h1 className="display-4 fw-bold mb-4">
                Easy In-Store Payments <br />
                <span className="text-light">for India's boldest disruptors</span>
              </h1>
              <p className="lead mb-4">
                Quick Payments | Seamless Integration | Top-tier UPI stack
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button variant="light" size="lg" className="d-flex align-items-center">
                  Sign Up Now <FaArrowRight className="ms-2" />
                </Button>
                <Button variant="outline-light" size="lg">
                  Know More
                </Button>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Payment Solutions" 
                className="img-fluid rounded shadow img-sharp"
                loading="eager"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cards Section */}
      <Container fluid className="bg-light py-5">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="display-5 fw-bold">Top Payment Products</h2>
            </Col>
          </Row>
          <Row>
            {sampleCards.map((card, i) => (
              <Col md={4} key={i} className="mb-4">
                <Card className="h-100 border-0 shadow-sm overflow-hidden">
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={card.img} 
                      alt={card.Name}
                      className="h-100 object-fit-cover img-sharp"
                      loading="lazy"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{card.Name}</Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {card.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;