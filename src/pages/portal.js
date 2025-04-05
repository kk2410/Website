import React from "react";
import "./portal.css";
import { Link } from "react-router-dom";
import LDRPLogo from "./assests/image/Logo.png"; // Imported LDRP-ITR Logo
import KSVLogo from "./assests/image/KSV.png"; // Imported KSV Logo

// Service Data
const services = [
  { name: "GPRD", description: "GPRD focuses on research, training, and education in the power sector, enhancing knowledge and skill development for sustainable energy solutions.", link: "https://gprd.in/" },
  { name: "GUVNL", description: "GUVNL is the holding company managing power generation, transmission, and distribution across Gujarat, ensuring efficient electricity supply.", link: "https://www.guvnl.com/" },
  { name: "SLDC", description: "SLDC monitors and controls real-time power grid operations in Gujarat, ensuring load balancing and reliable electricity distribution.", link: "https://www.sldcguj.com/" },
  { name: "WRLDC", description: "WRLDC operates under POSOCO, overseeing power transmission, grid stability, and demand management for the western region of India.", link: "https://wrldc.in/" },
  { name: "PGVCL", description: "PGVCL is responsible for power distribution in western Gujarat, ensuring electricity supply to residential, commercial, and industrial consumers.", link: "https://www.pgvcl.com/" },
  { name: "UGVCL", description: "UGVCL handles power distribution in northern Gujarat, focusing on efficient energy management and consumer service.", link: "https://www.ugvcl.com/" },
];

const ServiceCard = ({ name, description, link }) => (
  <div className="service-card">
    <h2>{name}</h2>
    <p>{description}</p>
    <a href={link}>Learn More →</a>
  </div>
);

function portal() {
  return (
    <div id="root">
    <div className="por-container">
      <header className="pp-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
               <div className="logo-container">
                <img src={LDRPLogo} alt="LDRP-ITR Logo" className="pp-logo" />
                <img src={KSVLogo} alt="LDRP-ITR Logo" className="pp-logo" />
                 <h1 className="h1">Portals</h1>
               </div>
               <nav>
                 <ul className="homepagelist">
                   <li  className="homepagelist">
                   <Link  to="/" className="nav-link home-btn">Home</Link>
                   </li>
                   <li className="homepagelist">
                    <Link  to="/National Portals" className="nav-link home-btn">National Portals</Link>
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
      <section className="services">
          <br></br>
          <br></br>
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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




      <footer className="pp-footer">
        <p className="pp-p">© 2025 Student Power Predictor. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}

export default portal;