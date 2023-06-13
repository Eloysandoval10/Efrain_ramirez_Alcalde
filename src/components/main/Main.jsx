import React from "react";
import "./styles/Main.css";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";

const Main = () => {
  return (
    <main className="container_main">
        <Card1/>
        <Card2/>
        <Card3/>
        {/* <div>
          <div>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVJ-l_1zdfLmHTn3vA_JwMRA8ngJQCnWsDVPaCqhhRuysnP4dxB_f7gpwkga4TK9JFdzeLMLELrwoSfLqIwHSFf1YpBc_yujXv5dXp2W0nOyRR8bCVfsHn_1HRXCFyslOLouVrVkAjto__3WvGY7QaagKdFfGSqK6Jm2-hc2MOrTemOdCVpW2_uUzHuA/s1600/WhatsApp%20Image%202023-06-08%20at%206.35.26%20PM.jpeg" alt="" />
          </div>
        </div> */}
        <Card4/>
        <Card5/>
        <Card6/>
    </main>
  );
};

export default Main;
