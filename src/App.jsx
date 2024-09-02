import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Destinos1 from "./page/Destinos1";
import Destinos2 from "./page/Destinos2";
import Destinos3 from "./page/Destinos3";

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
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/destinos1" element={<Destinos1 />} />
            <Route path="/destinos2" element={<Destinos2 />} />
            <Route path="/destinos3" element={<Destinos3 />} />
          </Routes>
          <div id="Footer">
            <Footer />
          </div>
        </>
      )}
    </section>
  );
}

export default App;
