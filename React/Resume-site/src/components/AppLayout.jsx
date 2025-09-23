// AppLayout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/Sidebar.css";
import { Button } from "react-bootstrap";

const AppLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="app-container">
      {/* Hamburger for mobile */}
      <Button
        variant="primary"
        className="d-md-none mb-3"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <ion-icon name={showSidebar ? "close-outline" : "menu-outline"}></ion-icon>
      </Button>

      {/* Sidebar */}
      <div className={`sidebar-wrapper ${showSidebar ? "open" : ""}`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="main-content">{children}</main>
    </div>
  );
};

export default AppLayout;
