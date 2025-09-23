import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "9dbee341-accc-4df2-8bd0-cae992310cb0"); // Your Web3Forms key

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            alert("Form Submitted Successfully!");
            event.target.reset();
        } else {
            alert("There was an error submitting the form.");
            console.error("Submission error:", data);
        }

        setResult("");
    };

    return (
        <article className="contact active" data-page="contact">
            <header className="mb-4">
                <h2 className="h2 article-title">Contact</h2>
            </header>

            {/* Google Map */}
            <section className="mapbox mb-5">
                <Card>
                    <Card.Body className="p-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.456025281886!2d70.76871147518327!3d22.260709044329506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbf23dc0951f%3A0x4d672f0b07e234b0!2sCity%20Classic!5e0!3m2!1sen!2sin!4v1738236236114!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        ></iframe>
                    </Card.Body>
                </Card>
            </section>

            {/* Contact Form */}
            <section className="contact-form">
                <h3 className="h3 form-title mb-4">Contact Form</h3>
                <p className="mb-3">
                    <ion-icon name="call-outline" class="me-2"></ion-icon>
                    <a href="tel:+917575046239" className="text-decoration-none">
                        +91 75750 46239
                    </a>
                </p>

                <Card>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={!!result}>
                                <ion-icon name="paper-plane" className="me-2"></ion-icon>
                                {result ? result : "Send Message"}
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </section>
        </article>
    );
};

export default Contact;
