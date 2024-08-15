import React from "react";
import "./style/SectionMaps.css";

const SectionMaps = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1vFcx250URuZfpRgLkf0hA8aJ-tRrqCg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default SectionMaps;
