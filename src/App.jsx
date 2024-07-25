import "./App.css";
import Navbar from "./components/layout/Navbar";
import TurismoSections from "./components/turismoSections/TurismoSections";

function App() {
  return (
    <section className="container">
      <div className="navbar_principal" id="navbar">
        <Navbar />
      </div>
      <div id="TurismoSections">
        <TurismoSections />
      </div>
      {/* <div id='main'>
        <Main/>
      </div>
      <div id='redes'>
        <Footer/>
      </div> */}
    </section>
  );
}

export default App;
