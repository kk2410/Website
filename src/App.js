import React from "react";
import "./App.css";
import TransparentImage from "./assests/image/Pic.jpg"; // Ensure this is a transparent PNG image
import LDRPLogo from "./assests/image/Logo.png"; // Imported LDRP-ITR Logo
import KSVLogo from "./assests/image/KSV.png"; // Imported KSV Logo
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container">

      {/* Header Section */}
      <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="logo-container">
          <img src={LDRPLogo} alt="LDRP-ITR Logo" className="logo" />
          <img src={KSVLogo} alt="LDRP-ITR Logo" className="logo" />
          <h1 className="h1">Power Predictor AI</h1>
        </div>
        <nav>
          <ul className="homepagelist">
            <li  className="homepagelist">
              <a href="#home" className="nav-link home-btn">Home</a>
            </li>
            <li className="homepagelist">
              <a href="#features" className="nav-link home-btn">Features</a>
            </li>
            <li className="homepagelist">
              <Link  to="/National Portals" className="nav-link home-btn">National Portals</Link>
            </li>
            <li className="homepagelist">
              <Link to="/portals" className="nav-link home-btn">Portals</Link>
            </li>
            <li className="homepagelist">
            <Link to="/Research Papers" className="nav-link home-btn">Research Papers</Link>
            </li>
            <li className="homepagelist">
              <a href="#contact" className="nav-link home-btn">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      
      <section id="home" className="home">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className="transparent-image-container">
          <img src={TransparentImage} alt="AI Load Forecasting" className="transparent-image" background/>
        </div>
        <h2 className="header-h2">Enhancing Power Distribution Efficiency with AI</h2>
        <p className="header-p">
          AI-driven models for accurate short-term and long-term electricity
          demand predictions, optimizing energy distribution, and minimizing
          power wastage.
        </p>
        <div className="buttons">
          <button className="btn learn-more"><Link to="/LearnM" className="btn-link nl-btn">Learn More</Link></button>
          <button className="btn view-dashboard"><Link to="/LS" className="btn-link nl-btn">View Dashboard</Link></button>
        </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </section>

 {/* Features Section */}
 <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature-list">
          {[{
            title: "User Authentication & Role-Based Access",
            desc: "Secure login system with personalized dashboards for DISCOMs, Smart Grid Operators, and Policy Makers."
          },
          {
            title: "Interactive Dashboard",
            desc: "Real-time electricity demand, AI-based predictions, and grid conditions displayed in an intuitive format."
          },
          {
            title: "Live Data Visualization",
            desc: "Graphs, heatmaps, and charts showing power consumption trends and future forecasts."
          },
          {
            title: "Multi-Device Compatibility",
            desc: "Access across desktop, tablets, and mobile devices for real-time monitoring."
          }].map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      {/* Contact Section */}
<section id="contact" className="er-contact">
  <h2>Contact Us</h2>
  <div className="contact-container">
    {/* Left Column: Contact Info */}
    <div className="contact-info">
      <h3>Email</h3>
      <p>Email: nexgenninjas@gmail.com</p>
      <br />
      <h4>Address</h4>
      <p>
        LDRP Institute of Technology and Research<br />
        Near KH-5, Sector-15,<br />
        Gandhinagar, Gujarat - 382016
      </p>
    </div>

    {/* Right Column: Map */}
    <div className="contact-map">
      <iframe
        title="GUVNL Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.103277098411!2d72.63615587557902!3d23.239328579022477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b933477ba9f%3A0xe440409e66bea08a!2sLDRP%20Institute%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1715503203967!5m2!1sen!2sin"
        width="100%"
        height="250"
        allowFullScreen=""
        loading="lazy"
        style={{ border: 0, borderRadius: "10px"}}
      ></iframe>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Student Power Predictor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;