import React from "react";
import Slider from "react-slick";
import fon1 from "../../../image/fon1.jpg";
import fon2 from "../../../image/fon2.jpg";
import fon3 from "../../../image/fon3.jpg";
import fonPag from "../../../image/fondoPag.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/TurismoSections.css";
import { Link } from "react-router-dom";

const TurismoSections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Cambia este valor para ajustar el punto de ruptura
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Cambia este valor para ajustar el punto de ruptura
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="containerSectionTurismo">
      <div className="otherPhotos">
        <img src={fonPag} alt="Photo 1" className="photo" />
        <img src={fonPag} alt="Photo 2" className="photo" />
        <img src={fonPag} alt="Photo 3" className="photo" />
        <img src={fonPag} alt="Photo 4" className="photo" />
        <img src={fonPag} alt="Photo 5" className="photo" />
        <img src={fonPag} alt="Photo 6" className="photo" />
        <img src={fonPag} alt="Photo 7" className="photo" />
        <img src={fonPag} alt="Photo 8" className="photo" />
        <img src={fonPag} alt="Photo 9" className="photo" />
        <img src={fonPag} alt="Photo 10" className="photo" />
        <img src={fonPag} alt="Photo 11" className="photo" />
        <img src={fonPag} alt="Photo 12" className="photo" />
      </div>
      <h2 className="titleSectionTurismo">
        <span className="spanSectionTitle1">busca el encanto de colombia</span>
        <span className="spanSectionTitle2">
          {" "}
          a través de nuestras regiones
        </span>
      </h2>
      <div className="carouselContainer">
        <Slider {...settings}>
          <div className="containerSectionTurismo_divCard">
            <div className="containerSectionTurismo_divImg">
              <img src={fon3} alt="" className="imgTurismo1" />
            </div>
            <h3 className="h3Turismo">destinos con tradiciones que enamoran</h3>
            <p className="pTurismo">
              Conocimientos ancestrales y miles de aventuras más te esperan en
              un país lleno de encanto con escenarios de película.
            </p>
            <div className="containerTurismoBtn">
              <Link to="/destinos1">
                <button className="turismoBtn">conoce más</button>
              </Link>
            </div>
          </div>
          <div className="containerSectionTurismo_divCard">
            <div className="containerSectionTurismo_divImg">
              <img src={fon2} alt="" className="imgTurismo1" />
            </div>
            <h3 className="h3Turismo">destinos con tradiciones que enamoran</h3>
            <p className="pTurismo">
              Conocimientos ancestrales y miles de aventuras más te esperan en
              un país lleno de encanto con escenarios de película.
            </p>
            <div className="containerTurismoBtn">
              <Link to="/destinos2">
                <button className="turismoBtn">conoce más</button>
              </Link>
            </div>
          </div>
          <div className="containerSectionTurismo_divCard">
            <div className="containerSectionTurismo_divImg">
              <img src={fon1} alt="" className="imgTurismo3" />
            </div>
            <h3 className="h3Turismo">
              destinos con experiencias que enamoran
            </h3>
            <p className="pTurismo">
              Conocimientos ancestrales y miles de aventuras más te esperan en
              un país lleno de encanto con escenarios de película.
            </p>
            <div className="containerTurismoBtn">
              <Link to="/destinos3">
                <button className="turismoBtn">conoce más</button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TurismoSections;
