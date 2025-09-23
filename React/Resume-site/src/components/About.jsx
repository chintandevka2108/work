import React from 'react';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';

const About = () => {
  const services = [
    {
      icon: 'https://i.postimg.cc/4389jZkP/icon-design.png',
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using HTML, CSS, Bootstrap, jQuery, JavaScript, React.js, and Next.js.'
    },
    {
      icon: 'https://i.postimg.cc/ZqgqrqzG/icon-dev.png',
      title: 'Backend Development',
      description: 'Developing scalable server-side applications with Node.js and Express.js, ensuring performance and security.'
    },
    {
      icon: 'https://i.postimg.cc/xjLdzYxZ/icon-app.png',
      title: 'Fullstack Solutions',
      description: 'Delivering complete web solutions from UI/UX to backend APIs, integrating modern frameworks and best practices.'
    },
    {
      icon: 'https://i.postimg.cc/0NL8zHpx/icon-photo.png',
      title: 'Continuous Learning',
      description: 'Always improving by keeping up with the latest trends in web technologies and frameworks.'
    }
  ];

  return (
    <article className="about active" data-page="about">
      <header className="mb-4">
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text mb-5">
        <p>
          I'm a passionate Fullstack Developer specializing in creating modern, user-friendly, and scalable web applications. 
          I enjoy turning complex problems into simple, elegant solutions while focusing on clean code and intuitive design.
        </p>
        <p>
          My expertise covers both frontend and backend development — from crafting responsive UIs to building powerful APIs.
          I work with technologies like <strong>HTML, CSS, jQuery, Bootstrap, JavaScript, React.js, Node.js, Express.js, and Next.js</strong>.
        </p>
      </section>

      <section className="service mb-5">
        <h3 className="h3 service-title mb-4">What I'm doing</h3>

        <Row>
          {services.map((service, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="h-100 service-item shadow-sm">
                <Card.Body className="d-flex align-items-start">
                  <div className="service-icon-box me-4 p-3 bg-light rounded">
                    <Image src={service.icon} alt={service.title} width="40" />
                  </div>
                  <div>
                    <h4 className="h4 service-item-title">{service.title}</h4>
                    <p className="service-item-text text-muted">{service.description}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </article>
  );
};

export default About;
