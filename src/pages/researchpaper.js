import React from "react";
import "./researchpaper.css";
import { TiDocumentText } from "react-icons/ti";
import LDRPLogo from "./assests/image/Logo.png"; // Imported LDRP-ITR Logo
import KSVLogo from "./assests/image/KSV.png"; // Imported KSV Logo
import { Link } from "react-router-dom";

const researchpaper = () => {
  const papers = [
    { 
      title: "Energy Research - MDPI", 
      link: "https://www.mdpi.com/1996-1073/18/2/227", 
      description: "This study introduces a Prophet–BO–XGBoost model for short-term load forecasting, enhancing accuracy and adaptability in complex power systems. It integrates XGBoost for nonlinear feature modeling, Prophet for time-series predictions, and Bayesian optimization (BO) for hyperparameter tuning. A regional case study confirms its improved efficiency and predictive performance."
    },
    { 
      title: "Expert Systems with Applications - ScienceDirect", 
      link: "https://www.sciencedirect.com/science/article/pii/S0957417423018572", 
      description: "This study explores Empirical Mode Decomposition (EMD) to simplify complex residential energy load profiles for more accurate short-term forecasting. A deep learning framework combining CNN, LSTM, and Bayesian optimization enhances prediction accuracy. Tested on case studies in Fintry, Scotland, the model outperforms traditional methods like Random Forest and GBDT, demonstrating improved efficiency and precision across multiple forecast horizons."
    },
    { 
      title: "IEEE Paper on Load Forecasting", 
      link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10879489", 
      description: "This study conducts a bibliometric and systematic review of energy forecasting methods, analyzing key variables, techniques, and time horizons used in past research. It highlights challenges in utility demand estimation due to data limitations and complex influencing factors. The findings help in selecting the most effective models and strategies for accurate energy forecasting and resource planning."
    },
    { 
      title: "AI-based Load Prediction - IEEE", 
      link: "https://ieeexplore.ieee.org/abstract/document/10630814", 
      description: "This study reviews short-term load forecasting (STLF) methods, including time series, regression, ANN, and hybrid models. It proposes a CNN-LSTM framework that enhances feature extraction and temporal sequence prediction. Tested on Pakistan’s NTDC grid, the model outperforms previous approaches, achieving high accuracy and improving reserve management and grid balancing in modern power systems."
    },
    { 
      title: "MDPI Research Paper", 
      link: "https://www.mdpi.com/897884", 
      description: "This study reviews and compares power load forecasting techniques, focusing on methods like ANN, Support Vector Regression, Decision Trees, Linear Regression, and Fuzzy Sets. It highlights the importance of accurate forecasting for power system planning and operation, especially with the rise of renewable energy integration. The review provides insights to guide future research in intelligent power forecasting systems."
    },
    { 
      title: "Smart Grid Load Prediction - IEEE", 
      link: "https://ieeexplore.ieee.org/abstract/document/10616221", 
      description: "This study investigates smart grid load prediction techniques, emphasizing machine learning-based approaches and their advantages over conventional models. It explores real-time data processing and predictive analytics to enhance grid reliability and efficiency."
    }
  ];

  return (
    <div className="rp-container">
       <header className="rp-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
               <div className="logo-container">
                <img src={LDRPLogo} alt="LDRP-ITR Logo" className="rp-logo" />
                <img src={KSVLogo} alt="LDRP-ITR Logo" className="rp-logo" />
                 <h1 className="h1">Research Papers</h1>
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
                    <Link to="/portals" className="nav-link home-btn">Portals</Link>
                   </li>
                   <li className="homepagelist">
                  <a href="#contact" className="nav-link home-btn">Contact Us</a>
                   </li>
                 </ul>
               </nav>
             </header>

      <div className="urp-container">
        <div className="urp-list">
          {papers.map((paper, index) => (
            <div className="urp-item" key={index}>
              <hr className="partition" />
              <a className="urp-link" href={paper.link} target="_blank" rel="noopener noreferrer">
                <TiDocumentText className="urp-icon"/>
                  {paper.title}
                </a>
              <p className="urp-description">{paper.description}</p>
            </div>
          ))}
        </div>
      </div>

       {/* Contact Section */}
<section id="contact" className="br-contact">
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



      <footer className="rp-footer">
        <p className="rp-p">&copy; {new Date().getFullYear()} Research Papers Collection. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default researchpaper;