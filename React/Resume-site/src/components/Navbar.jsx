import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = ({ activePage, setActivePage }) => {
  const navItems = [
    { key: 'about', label: 'About' },
    { key: 'resume', label: 'Resume' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'contact', label: 'Contact' }
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand className="d-lg-none">Chintan Devka</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map(item => (
              <Nav.Link 
                key={item.key} 
                active={activePage === item.key}
                onClick={() => setActivePage(item.key)}
                className="mx-2"
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;