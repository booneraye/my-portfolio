import React from "react";
import Footer from "../componenst/Footer";
import Header from "../componenst/Header";
import MainCover from "../componenst/MainCover";
import Skills from "../componenst/Skills";
import WorkHistory from "../componenst/WorkHistory";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <MainCover />
      <Skills/>
      <WorkHistory />
      <Footer/>
    </div>
  );
};

export default LandingPage;
