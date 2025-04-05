import React from "react";
import "./nationalportal.css";
import { Link } from "react-router-dom";
import LDRPLogo from "./assests/image/Logo.png"; // Imported LDRP-ITR Logo
import KSVLogo from "./assests/image/KSV.png"; // Imported KSV Logo

// Service Data
const services = [
  { name: "Northern Regional Load Despatch Centre (NRLDC)", description: "NRLDC ensures the integrated operation of the power system in India's Northern Region. Its responsibilities include monitoring system parameters, daily scheduling, facilitating power exchanges, and conducting system studies.", link: "" },
  { name: "Western Regional Load Despatch Centre (WRLDC)", description: "WRLDC oversees the integrated operation of the power system in the Western Region. It focuses on system security, operational planning, facilitating inter-regional power exchanges, and analyzing system disturbances. ", link: "" },
  { name: "Southern Regional Load Despatch Centre (SRLDC)", description: "SRLDC manages the integrated operation of the power system in the Southern Region. Its functions include system monitoring, scheduling, facilitating power exchanges, and ensuring system reliability.", link: "https://www.srldc.in/" },
  { name: "Eastern Regional Load Despatch Centre(ERLDC)", description: "ERLDC is vital entity overseeing power grid operations in their respective region. It ensure real-time electricity balancing, grid security, and seamless power transmission. By coordinating with state utilities, it help to maintain a stable and efficient power supply across the Eastern regions of India.", link: "https://erldc.in/" },
  { name: "Northern Eastern Regional Load Despatch Centre(NERLDC)", description: "NERLDC is vital entity overseeing power grid operations in their respective region. It ensure real-time electricity balancing, grid security, and seamless power transmission. By coordinating with state utilities, it help to maintain a stable and efficient power supply across the North Eastern regions of India.", link: "https://www.nerldc.in/" },
  { name: "Akshay Urja", description: "An initiative by the Ministry of New and Renewable Energy (MNRE), Akshay Urja promotes awareness and adoption of renewable energy sources in India. It highlights advancements in solar, wind, hydro, and bioenergy, encouraging sustainable energy solutions for a greener future.", link: "https://akshayurja.gov.in/" },
];

const ServiceCard = ({ name, description, link }) => (
  <div className="np-service-card">
    <h2>{name}</h2>
    <p>{description}</p>
    <a href={link}>Learn More →</a>
  </div>
);

function nationalportal() {
  return (
    <div className="np-container">
      <header className="np-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
               <div className="logo-container">
                <img src={LDRPLogo} alt="LDRP-ITR Logo" className="np-logo" />
                <img src={KSVLogo} alt="LDRP-ITR Logo" className="np-logo" />
                 <h1 className="h1">National Portals</h1>
               </div>
               <nav>
                 <ul className="homepagelist">
                   <li  className="homepagelist">
                   <Link  to="/" className="nav-link home-btn">Home</Link>
                   </li>
                   <li className="homepagelist">
                    <Link  to="/portals" className="nav-link home-btn">Portals</Link>
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
      <section className="np-services">
      <br></br>
      <br></br>

        <div className="np-service-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </section>

       {/* Contact Section */}
<section id="contact" className="zr-contact">
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
        
      <footer className="wp-footer">
        <p className="pp-p">© 2025 Student Power Predictor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default nationalportal;
