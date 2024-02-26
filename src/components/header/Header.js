import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleOpen = () => {
    setShowNavbar(true);
  };
  const handleClose = () => {
    if (window.innerWidth >= 917) {
      setShowNavbar(false);
    }
    setShowNavbar(false);
  };
  useEffect(() => {
    // Add an event listener to handle window resize
    window.addEventListener("resize", handleClose);
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <header className="header_section">
      <div className="container">
        <div className="logo">
          <h2>
            <Link to="/">OIC Eduction</Link>
          </h2>
        </div>
        <div className="nav_elements">
          <ul
            className={
              showNavbar ? "show_element_container" : "element_container"
            }
          >
            <li>
              <Link to="/" className="nav_link">
                Home
              </Link>
            </li>
            <li>About</li>
            <li className="nav_link">
              Courses
              <ul className="dropdown">
                <li>Web Development</li>
                <li>App Development</li>
                <li>Graphics Design</li>
                <li>Networking</li>
              </ul>
            </li>
            <li>Events</li>
            <li>Gallery</li>
            <li className="nav_link">
              Blog
              <ul className="dropdown">
                <li>AI</li>
                <li>ML</li>
                <li>Cloud</li>
                <li>Development</li>
              </ul>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="menu_bar" onClick={handleOpen}>
          <i className="fa-solid fa-bars" />
        </div>
        <div className={showNavbar ? "close" : "not"} onClick={handleClose}>
          ×
        </div>
      </div>
    </header>
  );
};

export default Header;
