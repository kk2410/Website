import React from "react";
import "./learnmore.css";
import system from "./assests/image/sa.png";
import model from "./assests/image/ma.png";
import { Link } from "react-router-dom";
import LDRPLogo from "./assests/image/Logo.png"; // Imported LDRP-ITR Logo
import KSVLogo from "./assests/image/KSV.png"; // Imported KSV Logo

const learnmore = () => {
  return (
    <div className="learn-more-container">
      <header className="hp-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
               <div className="logo-container">
                <img src={LDRPLogo} alt="LDRP-ITR Logo" className="hp-logo" />
                <img src={KSVLogo} alt="LDRP-ITR Logo" className="hp-logo" />
                 <h1 className="h1">Learn More</h1>
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
                 </ul>
               </nav>
             </header>

      <main>
        {/* 1. Overview of the Problem */}
        <section className="highlight-section">
          <h2>Overview of the Problem</h2>
          <p><strong>Problem Statement ID:</strong> PS000150</p>
          <p><strong>Domain:</strong> Power Distribution and Smart Grid</p>
          <p><strong>Issued by:</strong> Gujarat Urja Vikas Nigam Limited</p>
          <p><strong>Core Issue:</strong> Inaccurate load forecasting leads to overloading, wastage, and inefficiencies in the power grid.</p>
        </section>

        {/* 2. Our Solution */}
        <section className="split-section">
          <div className="split-text">
            <h2>Our Solution</h2>
            <ul>
              <li>Uses AI models like BiLSTM, Transformer, and DAIN</li>
              <li>Enhances power distribution and reduces energy wastage</li>
              <li>Improves real-time forecasting accuracy</li>
            </ul>
          </div>
          <div className="split-image cropped">
            <img src={model} alt="Model Architecture" />
          </div>
        </section>

        {/* 3. Key Features */}
        <section className="features-section">
          <h2>Key Features</h2>
          <div className="card-grid aligned">
            <div className="card">24-hour to 7-day demand predictions</div>
            <div className="card">Smart Grid Optimization</div>
            <div className="card">Renewable Energy Integration</div>
            <div className="card">Interactive Graphs and Dashboards</div>
            <div className="card">Downloadable CSV/PDF Reports</div>
            <div className="card">User-Friendly Interface</div>
          </div>
        </section>

        {/* 4. Technology Stack */}
        <section className="info-block">
          <h2>Technology Stack</h2>
          <ul>
            <li><strong>Front-end:</strong> React.js, Syncfusion (for dashboard)</li>
            <li><strong>Back-end:</strong> Python, Flask/Django</li>
            <li><strong>Models Used:</strong> BiLSTM, GRU, Transformer, CNN</li>
            <li><strong>Libraries:</strong> TensorFlow/PyTorch, NumPy, Pandas, Scikit-learn</li>
            <li><strong>Tools:</strong> Git, CodeSandbox</li>
          </ul>
        </section>

        {/* 5. Architecture */}
        <section className="split-section">
          <div className="split-text">
            <h2>System Architecture</h2>
            <p className="split-p">Our modular system combines real-time sensors, cloud-based AI models, and intuitive web interfaces to provide live insights and decision-making support.</p>
          </div>
          <div className="split-image cropped">
            <img src={system} alt="System Architecture" />
          </div>
        </section>

        {/* 6. Comparison with Existing Methods */}
        <section className="info-block alt">
          <h2>Comparison with Existing Methods</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Accuracy</th>
                <th>Scalability</th>
                <th>Computational Cost</th>
                <th>Adaptability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ARIMA</td>
                <td>Low</td>
                <td>Moderate</td>
                <td>Low</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Random Forest + XGBoost</td>  
                <td>Moderate</td>
                <td>Moderate</td>
                <td>Moderate</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Attention-Based LSTM+CNN</td>
                <td>Moderate</td>
                <td>High</td>
                <td>High</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td>Our Hybrid Model</td>
                <td>High</td>
                <td>High</td>
                <td>Moderate</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 7. Impact & Benefits */}
        <section className="info-block">
          <h2>Impact & Benefits</h2>
          <ul>
            <li>Grid Stability</li>
            <li>Cost Savings</li>
            <li>Improved Decision Making for Utility Providers</li>
            <li>Better Renewable Energy Utilization</li>
          </ul>
        </section>

        {/* 8. Challenges Faced */}
        <section className="info-block alt">
          <h2>Challenges Faced</h2>
          <ul>
            <li>Data Accessibility</li>
            <li>Real-time Processing Requirements</li>
            <li>Handling Data Quality Issues</li>
            <li>Integration with Existing Infrastructure</li>
          </ul>
        </section>
      </main>

      <footer className="wp-footer">
        <p className="hp-p">© 2025 Student Power Predictor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default learnmore;