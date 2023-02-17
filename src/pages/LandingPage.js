import React from "react";
import MainCover from "../componenst/MainCover";
import PageContainer from "../componenst/PageContainer";
import Skills from "../componenst/Skills";
import WorkHistory from "../componenst/WorkHistory";

const LandingPage = () => {
  return (
    <PageContainer>
      <MainCover />
      <Skills/>
      <WorkHistory />
    </PageContainer>
  );
};

export default LandingPage;
