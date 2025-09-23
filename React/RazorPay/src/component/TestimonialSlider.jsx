import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // make sure this is imported

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    quote:
      "This service has transformed the way we accept payments. Smooth, secure, and hassle-free!",
    name: "Amit Shah",
    title: "CEO, FinTech Solutions",
  },
  {
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
    quote:
      "Super easy integration and our customers love the seamless checkout experience.",
    name: "Priya Mehta",
    title: "Founder, ShopEase",
  },
  {
    image:
      "https://d6xcmfyh68wv8.cloudfront.net/blog-content/uploads/2024/03/AiSensy-Blog-Banner.png",
    quote:
      "The best payment gateway we’ve used so far. Reliable and lightning fast support!",
    name: "Rahul Verma",
    title: "CTO, QuickPay",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % data.length);
      }, 4000);
    }
    return () => clearInterval(timeoutRef.current);
  }, [paused]);

  return (
    <Container fluid className="py-5 bg-light">
      <Container>
        <Row>
          <Col className="text-center mb-5">
            <h2 className="display-5 fw-bold">What Our Clients Say</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="position-relative" style={{ height: "400px" }}>
              {data.map((item, index) => (
                <Card
                  key={index}
                  className={`position-absolute top-0 start-0 w-100 h-100 border-0 shadow 
                  ${index === current ? "opacity-100 visible" : "opacity-0 invisible"}`}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  <div className="position-relative h-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex flex-column justify-content-end text-white p-4">
                      <p className="fst-italic mb-3">{item.quote}</p>
                      <h5>{item.name}</h5>
                      <small className="text-light">{item.title}</small>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Dots */}
              <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
                {data.map((_, index) => (
                  <button
                    key={index}
                    className={`btn p-0 ${index === current ? "text-white" : "text-white-50"}`}
                    onClick={() => setCurrent(index)}
                  >
                    ●
                  </button>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default TestimonialSlider;
