import React from "react";
import "./styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutme_container">
        <div className="aboutme_container_efrain_img">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJEw2VppXEhyK1X5LdRZOrgYQb3HLPvClDzgIA2JHbEbAIdxC6-NLKdxGOdOUaUHKK_Muz22Fy10zH5qwa4Ktb9qChOPiUUayFwsxdOLXuScGiAUkxHALwNKf0Eq1iGUhpXuEOGaLJ4cJasRj1s-P7fx4A29FAQeEM2QZos2K_F7Evrd3W6AE3BJtPa_hW/s718/340224595_619048492982216_2137371348555710503_n.jpg"
            alt=""
          />
        </div>
        <div>
          <h6>Sobre Mi</h6>
          <p className="aboutme_container_efrain_p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            facere adipisci nisi veritatis sed ullam excepturi architecto dolore
            nihil praesentium? Qui accusamus repudiandae, harum animi voluptatem
            amet labore dolorem! Adipisci!
          </p>
        </div>
    </section>
  );
};

export default AboutMe;
