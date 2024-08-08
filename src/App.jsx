import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Turismo2Section from "./components/turismo2Section/Turismo2Section";
import TurismoSections from "./components/turismoSections/TurismoSections";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de contenido
    const fakeLoadTime = 500; // 2 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, fakeLoadTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container">
      {loading ? (
        <div className={`preloader ${!loading ? "hidden" : ""}`}>
          <div className="spinner"></div>
          <div className="preloader-text">Guía Turística de Becerril</div>
        </div>
      ) : (
        <>
          <div className="navbar_principal" id="navbar">
            <Navbar />
          </div>
          <div id="TurismoSections">
            <TurismoSections />
          </div>
          <div id="Turismo2Section">
            <Turismo2Section />
          </div>
        </>
      )}
    </section>
  );
}

export default App;
