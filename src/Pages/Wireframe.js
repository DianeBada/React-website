import React, { useEffect } from "react";
import "../Styles/wireframe.css";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import "swiper/swiper-bundle.min.css";
import Swiper from "swiper";
import homeWire from "../images/HomeWire.PNG";
import IntroTo from "../images/IntroInternet.png";
import blogsWire from "../images/blogsWire.png";
import memeswire from "../images/MemesWire.png";
import screen226 from "../images/Screenshot (226).png";
import screen227 from "../images/Screenshot (227).png";
import screen228 from "../images/Screenshot (228).png";

const Wireframe = () => {
  useEffect(() => {
    const swiper = new Swiper(".design-content", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    
    });

    return () => {
    };
  }, []);

  return (
    <div className = "wireframe-home-container">
      <section className="hp_wireframe_container swiper">
        <h1>DESIGN</h1>
        <h2>WIREFRAME</h2>
        <p className = "drag-title"> Drag across to navigate through wireframes </p>


        <section className="style-container">
          <section className="design-container">
            <section className="design-content">
              <section className="card-wrapper swiper-wrapper">
                <section className="swiper-slide">
                  <img
                    src={homeWire}
                    alt="an image showing wireframe of homepage"
                  />
                </section>
                <section className="swiper-slide">
                  <img
                    src={IntroTo}
                    alt="an image showing wireframe of intro to internet"
                  />
                </section>
                <section className="swiper-slide">
                  <img
                    src={blogsWire}
                    alt="an image showing wireframe of blog page"
                  />
                </section>
                <section className="swiper-slide">
                  <img
                    src={memeswire}
                    alt="an image showing wireframe of internet art"
                  />
                </section>
                <section className="swiper-slide">
                  <img
                    src={screen226}
                    alt="an image showing wireframe of design page"
                  />
                </section>
                <section className="swiper-slide">
                  <img
                    src={screen227}
                    alt="an image showing wireframe of blog page"
                  />
                </section>
                <section className="swiper-slide">
                  <img
                    src={screen228}
                    alt="an image showing wireframe of blog page"
                  />
                </section>
              </section>
            </section>
          </section>

        </section>
      </section>

      <section className="button-container-bottom">
        <Link to="/DesignSection">
          <button className="button button-left-bottom">
            <ArrowCircleLeftIcon /> Previous
          </button>
        </Link>
        <Link to="/StyleGuide">
          <button className="button button-right-bottom">
            Next <ArrowCircleRightIcon />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Wireframe;
