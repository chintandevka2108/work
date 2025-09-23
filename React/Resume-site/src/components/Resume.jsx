import React from 'react';
import { Row, Col, Card, ProgressBar, Button } from 'react-bootstrap';

const Resume = () => {
  const education = [
    {
      title: 'Bachelor of Commerce (B.Com)',
      period: '2022 - 2024',
      description:
        'Completed my graduation in Commerce, gaining knowledge of business, finance, and management while building strong problem-solving and analytical skills.'
    },
    {
      title: 'Fullstack Development',
      period: '2024 - 2025',
      description:
        'Specialized in modern fullstack web development, learning HTML, CSS, JavaScript, React.js, Node.js, Express.js, Next.js, and MongoDB to build complete end-to-end web applications.'
    }
  ];

  const experience = [
    {
      title: 'Fullstack Developer (Live Projects)',
      period: '2024 - Present',
      description:
        'Worked on live projects involving frontend and backend development. Built responsive UIs with React.js and Next.js, developed REST APIs using Node.js and Express.js, and implemented databases with MongoDB.'
    }
  ];

  const skills = [
    { name: 'HTML', value: 95 },
    { name: 'CSS', value: 90 },
    { name: 'JavaScript', value: 85 },
    { name: 'React.js', value: 80 },
    { name: 'Node.js', value: 70 },
    { name: 'Next.js', value: 70 },
    { name: 'MongoDB', value: 70 }
  ];

  return (
    <article className="resume active" data-page="resume">
      {/* Header */}
      <header className="mb-4 d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2">
        <h2 className="h2 article-title">Resume</h2>

        <div className="d-flex flex-column flex-sm-row gap-2 w-100 w-sm-auto">
          {/* Download Resume */}
          <Button
            variant="primary"
            href="/resume.pdf"
            download="Chintan-Resume.pdf"
            className="w-100 w-sm-auto"
          >
            Download PDF
          </Button>

          {/* View Resume */}
          <Button
            variant="outline-primary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-100 w-sm-auto"
          >
            View Resume
          </Button>
        </div>
      </header>

      {/* PDF Preview */}
      <section className="mb-5">
        <h3 className="h3 mb-3">Resume Preview</h3>
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          style={{ width: '100%', height: '500px', border: '1px solid #ddd', borderRadius: '8px' }}
        />
      </section>

      {/* Education */}
      <section className="timeline mb-5">
        <div className="title-wrapper d-flex align-items-center mb-4">
          <div className="icon-box me-3">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        {education.map((item, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span className="text-muted">{item.period}</span>
              <p className="timeline-text mt-2">{item.description}</p>
            </Card.Body>
          </Card>
        ))}
      </section>

      {/* Experience */}
      <section className="timeline mb-5">
        <div className="title-wrapper d-flex align-items-center mb-4">
          <div className="icon-box me-3">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        {experience.map((item, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span className="text-muted">{item.period}</span>
              <p className="timeline-text mt-2">{item.description}</p>
            </Card.Body>
          </Card>
        ))}
      </section>

      {/* Skills */}
      <section className="skill">
        <h3 className="h3 skills-title mb-4">My Skills</h3>

        <Row>
          {skills.map((skill, index) => (
            <Col md={6} key={index} className="mb-3">
              <Card className="skills-item">
                <Card.Body>
                  <div className="title-wrapper d-flex justify-content-between mb-2">
                    <h5 className="h5">{skill.name}</h5>
                    <span>{skill.value}%</span>
                  </div>
                  <ProgressBar now={skill.value} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </article>
  );
};

export default Resume;
