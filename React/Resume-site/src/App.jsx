import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Container } from 'react-bootstrap';
import "./styles/Portfolio.css";
import { useState, useEffect } from "react";

function App() {
  const [activePage, setActivePage] = useState('about');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(false); // Close sidebar on desktop
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="app-wrapper">
      <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen}
          isMobile={isMobile}
        />
        
        <main className="main-content">
          <Navbar 
            activePage={activePage} 
            setActivePage={handlePageChange}
            onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            isSidebarOpen={isSidebarOpen}
          />
          
          <Container fluid className="page-content">
            {renderPage()}
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;