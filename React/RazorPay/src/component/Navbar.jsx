import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { FiChevronDown, FiX, FiMenu } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  const menuItems = [
    {
      title: 'ACCEPT PAYMENT ONLINE',
      items: ['Payment Aggregator', 'Payment Gateway', 'Payment Link', 'Payment Button'],
      explore: 'Explore Payment Suite',
    },
    {
      title: 'RAZORPAY X - BANKING SUITE',
      items: ['Current Accounts', 'Source to Pay', 'Payroll'],
      explore: 'Explore Banking Suite',
    },
    {
      title: 'MORE',
      items: ['Engage', 'Pricing', 'Support', 'Partners', 'Resources'],
    },
  ];

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <BootstrapNavbar expand="lg" bg="white" variant="light" fixed="top" expanded={expanded} className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
            height="40"
            className="d-inline-block align-top"
            alt="Razorpay Logo"
          />
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          {expanded ? <FiX size={24} /> : <FiMenu size={24} />}
        </BootstrapNavbar.Toggle>
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((section, index) => (
              <Nav.Item key={index} className="position-relative">
                <Nav.Link 
                  href="#" 
                  className="d-flex align-items-center"
                  onClick={() => toggleSubmenu(index)}
                >
                  {section.title.split(' - ')[0]}
                  <FiChevronDown className={`ms-1 transition-all ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                </Nav.Link>
                
                {activeSubmenu === index && (
                  <div className="position-absolute top-100 start-0 mt-2 bg-white shadow-lg rounded p-3 z-3 w-100 min-w-300">
                    <p className="text-muted small text-uppercase mb-2">{section.title}</p>
                    {section.items.map((item, i) => (
                      <a key={i} href="#" className="d-block py-2 text-dark text-decoration-none">
                        {item}
                      </a>
                    ))}
                    {section.explore && (
                      <a href="#" className="d-block pt-2 mt-2 border-top text-primary text-decoration-none fw-semibold">
                        {section.explore} <FaArrowRight className="ms-1" />
                      </a>
                    )}
                  </div>
                )}
              </Nav.Item>
            ))}
          </Nav>
          
          <Nav>
            <Nav.Link href="#" className="me-3">Login</Nav.Link>
            <Button variant="primary" className="rounded-pill px-4">
              Sign Up
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;