import React from "react";
import SectionMaps from "../maps/SectionMaps";
import Turismo2Section from "../turismo2Section/Turismo2Section";
import TurismoSections from "../turismoSections/TurismoSections";

const Main = () => {
  return (
    <div>
      <div id="TurismoSections">
        <TurismoSections />
      </div>
      <div id="Turismo2Section">
        <Turismo2Section />
      </div>
      <div id="SectionMaps">
        <SectionMaps />
      </div>
    </div>
  );
};

export default Main;
