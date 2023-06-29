import React from "react";
import '../Styles/design.css'
import { Link } from "react-router-dom";

function DesignSection() {
  return (
    <section className="design-section">
      <section className="design-title-container">
        <h1 className="design-title">Welcome to My Design Section</h1>
        <p className="design-description">Explore the beauty and creativity behind the chaos of student design.</p>
      </section>

      <section className="button-container">
        <Link to="/Wireframe" className="button-link">
          <button className="button">Wireframes</button>
        </Link>
        <Link to="/StyleGuide" className="button-link">
          <button className="button">Style Guide</button>
        </Link>
        <Link to="/IxDProcess" className="button-link">
          <button className="button">IxD Process</button>
        </Link>
      </section>
    </section>
  );
}

export default DesignSection;
