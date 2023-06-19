import React from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
import '../Styles/styleguide.css'

function StyleGuide() {
  return (
    <div className = "styleguide-home-container">
      <h1 className="style-title">Style Guide</h1>

      <section className="style-container">
        <p>This is the style guide for the website.</p>
        <h2>Font</h2>
        <p>
          The font being used is Poppins. It is a sans-serif font that is easy
          to read on screens and has a modern feel.
        </p>
        <h2>Colors</h2>
        <p>
          The color scheme for the website includes different hues of pink,
          blue, green, yellow, and red. The Primary colours though, mainly consist of grey and a pinkish-purplish colour.
        </p>
        <section className="color-block grey"></section>
        <section className="color-block pink"></section>
        <section className="color-block blue"></section>
        <section className="color-block green"></section>
        <section className="color-block yellow"></section>
        <section className="color-block red"></section>

        <h2>Buttons</h2>
        <p>
          The buttons on the website are black with color and have white words.
          They are rounded on the edges and have a hover effect that changes the
          background color to red.
        </p>
        <a href="#" className="btn-rounded">
          Button
        </a>

        <h2>Memes</h2>
        <p>
          The website includes images of memes, which are humorous and
          relatable images that are popular on the internet.
        </p>
        <img src="meme.jpg" alt="Meme" className="meme" />
      </section>

      <section className="button-container-bottom">
          <Link to = "/Wireframe">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/IxDProcess">
            <button className="button button-right-bottom">
              Next <ArrowCircleRightIcon/>
            </button>
            </Link>       
             </section>
    </div>
  );
}

export default StyleGuide;
