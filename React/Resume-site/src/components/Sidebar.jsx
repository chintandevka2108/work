import React from "react";
import { Card, Image, Button, Badge } from "react-bootstrap";
import '../styles/Sidebar.css'; // Your custom styles

const contactItems = [
  { icon: "mail-outline", title: "Email", content: "chinangadhavi511@gmail.com", link: "mailto:chinangadhavi511@gmail.com" },
  { icon: "call-outline", title: "Phone", content: "+91 75750 46239", link: "tel:+917575046239" },
  { icon: "location-outline", title: "Location", content: "Rajkot, India" },
];

const socialItems = [
  { icon: "logo-github", link: "https://github.com/chintandevka2108/dev-portfolio", color: "#333" },
  { icon: "logo-linkedin", link: "https://www.linkedin.com/in/chintan-devka/", color: "#0077b5" },
];

const skills = [
  { name: "React", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "HTML/CSS", level: 95 },
];

const Sidebar = () => {
  return (
   <aside className="sidebar p-4 sidebar-modern">
  {/* Profile Card */}
  <Card className="sidebar-info text-center border-0 shadow-lg rounded-4 mb-4 bg-gradient">
    <Card.Body className="p-2">
      <div className="avatar-box position-relative mb-3">
        <Image
          src="/PHOTO.jpg"
          alt="Chintan Devka"
          width="120"
          height="120"
          roundedCircle
          className="border border-white shadow"
        />
        <Badge bg="success" className="avatar-badge"></Badge>
      </div>
      <h4 className="sidebar-name">Chintan Devka</h4>
      <p className="sidebar-role">Web Developer</p>
      <Button
        variant="primary"
        size="sm"
        className="w-100 sidebar-download"
        href="/resume.pdf"
        download="Chintan-Devka-Resume.pdf"
      >
        <ion-icon name="download-outline" class="me-1"></ion-icon>
        Download CV
      </Button>
    </Card.Body>
  </Card>

  {/* Contact Info */}
  <Card className="mb-4 border-0 shadow-sm rounded-4 bg-white">
    <Card.Body className="p-4">
      <h5 className="sidebar-section-title">
        <ion-icon name="person-circle-outline" className="me-2"></ion-icon>
        Contact Info
      </h5>
      <ul className="list-unstyled">
        {contactItems.map((item, idx) => (
          <li key={idx} className="contact-item mb-2 d-flex align-items-center">
            <div className="icon-box sidebar-icon">
              <ion-icon name={item.icon}></ion-icon>
            </div>
            <div className="contact-info flex-grow-1">
              <p className="contact-title">{item.title}</p>
              {item.link ? (
                <a href={item.link} className="contact-link">{item.content}</a>
              ) : (
                <span className="contact-link">{item.content}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Card.Body>
  </Card>

  {/* Skills */}
  <Card className="border-0 shadow-sm rounded-4 mb-4 bg-white">
    <Card.Body>
      <h6 className="sidebar-section-title">
        <ion-icon name="stats-chart-outline" className="me-2"></ion-icon>
        Skills
      </h6>
      {skills.map((skill, idx) => (
        <div key={idx} className="mb-3">
          <div className="d-flex justify-content-between small mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="progress" style={{ height: "6px" }}>
            <div
              className="progress-bar sidebar-progress"
              role="progressbar"
              style={{ width: `${skill.level}%` }}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      ))}
    </Card.Body>
  </Card>

  {/* Social Links */}
  <Card className="border-0 shadow-sm rounded-4 bg-white">
    <Card.Body className="text-center">
      <h6 className="sidebar-section-title">Me</h6>
      <div className="d-flex justify-content-center gap-3">
        {socialItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="sidebar-social"
            style={{
              backgroundColor: item.color,
            }}
          >
            <ion-icon name={item.icon}></ion-icon>
          </a>
        ))}
      </div>
    </Card.Body>
  </Card>
</aside>

  );
};

export default Sidebar;