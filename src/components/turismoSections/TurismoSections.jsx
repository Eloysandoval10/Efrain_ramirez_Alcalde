import React from "react";
import fon1 from "../../../image/fon1.jpg";
import fon2 from "../../../image/fon2.jpg";
import fon3 from "../../../image/fon3.jpg";
import "./styles/TurismoSections.css";

const TurismoSections = () => {
  return (
    <section className="containerSectionTurismo">
      <h2 className="titleSectionTurismo">
        {" "}
        <span className="spanSectionTitle1">busca el encanto de colombia</span>
        <span className="spanSectionTitle2">
          {" "}
          a travez de nuestras regiones
        </span>
      </h2>
      <section className="containerSectionTurismo_secion">
        <div className="containerSectionTurismo_divCard">
          <div className="containerSectionTurismo_divImg">
            <img src={fon3} alt="" className="imgTurismo1" />
          </div>
          <h3 className="h3Turismo">destinos con tradiciones que enamoran</h3>
          <p className="pTurismo">
            Conocimientos ancestrales y miles de aventuras más te esperan en un
            país lleno de encanto con escenarios de película.
          </p>
          <div className="containerTurismoBtn">
            <button className="turismoBtn">conoce mas</button>
          </div>
        </div>
        <div className="containerSectionTurismo_divCard">
          <div className="containerSectionTurismo_divImg">
            <img src={fon2} alt="" className="imgTurismo1" />
          </div>
          <h3 className="h3Turismo">destinos con tradiciones que enamoran</h3>
          <p className="pTurismo">
            Conocimientos ancestrales y miles de aventuras más te esperan en un
            país lleno de encanto con escenarios de película.
          </p>
          <div className="containerTurismoBtn">
            <button className="turismoBtn">conoce mas</button>
          </div>
        </div>
        <div className="containerSectionTurismo_divCard">
          <div className="containerSectionTurismo_divImg">
            <img src={fon1} alt="" className="imgTurismo3" />
          </div>
          <h3 className="h3Turismo">destinos con experiencia que enamoran</h3>
          <p className="pTurismo">
            Conocimientos ancestrales y miles de aventuras más te esperan en un
            país lleno de encanto con escenarios de película.
          </p>
          <div className="containerTurismoBtn">
            <button className="turismoBtn">conoce mas</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TurismoSections;
