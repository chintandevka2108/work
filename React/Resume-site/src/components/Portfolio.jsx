import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Portfolio = () => {
  const projects = [
    {
      title: 'Netflix-Clone',
      category: 'web-development',
      image: 'Netflix-clone.png',
      description: 'Web Development',
      link: 'https://netlfix-clone-chintan.netlify.app/'
    },
    {
      title: 'Expense-tracker',
      category: 'web-development',
      image: 'expense tracker.png',
      description: 'Web Development',
      link: 'https://expense-tracker98.netlify.app/'
    },
    {
      title: 'Estate-site',
      category: 'web-design',
      image: 'Estate.png',
      description: 'Web Design',
      link: 'https://keen-pika-e99610.netlify.app/'
    },
    {
      title: 'Razor-Pay',
      category: 'Website',
      image: 'Razor-pay.png',
      description: 'Website',
      link: 'https://superb-stroopwafel-3a7b36.netlify.app/'
    },
    {
      title: 'Digitalweb-Agency',
      category: 'web-design',
      image: 'Digitalweb-Agency.png',
      description: 'Website',
      link: 'https://astounding-souffle-b1faf1.netlify.app/'
    },
    {
      title: 'University-site',
      category: 'web-design',
      image: 'University-site.jpg',
      description: 'Website',
      link: 'https://storied-treacle-e12ea5-bootstrap-of-u.netlify.app/'
    },
    {
      title: 'Laptop-ui',
      category: 'web-development',
      image: 'Laptop-ui.png',
      description: 'Web Development',
      link: 'https://willowy-dragon-339c5a.netlify.app/'
    },
    {
      title: 'Top-hotel',
      category: 'website',
      image: 'Top-hotel.jpg',
      description: 'website',
      link: 'https://famous-kitten-6cc0b7.netlify.app/'
    },
    {
      title: 'Animated slider',
      category: 'Animation of slider',
      image: 'Slider.png',
      description: 'Slider',
      link: 'https://benevolent-gumption-cbb7d6.netlify.app/'
    }
  ];

  return (
    <article className="portfolio active" data-page="portfolio">
      <header className="mb-4">
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <Row>
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="project-item h-100">
                <a 
                  href={project.link || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                </a>
                <Card.Body>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category text-muted">{project.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </article>
  );
};

export default Portfolio;
