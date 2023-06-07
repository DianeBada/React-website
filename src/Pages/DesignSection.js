import React from "react";
import '../Styles/design.css'
import { Link } from "react-router-dom";

function DesignSection() {
  return (
    <div>
      <section className="design-title-container">
        <p className="design-title">WELCOME TO MY DESIGN SECTION</p>
      </section>

      <section className="button-container">
        <Link to = "/Wireframe">
        <button className="button">WireFrames</button>
        </Link>
        <Link to = "/StyleGuide">
        <button className="button">Style Guide</button>
        </Link>
        <Link to = "/IxDProcess">
        <button className="button">IxD Process</button>
        </Link>
       
      </section>
    </div>
  );
}

export default DesignSection;
