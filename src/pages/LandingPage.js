import React from "react";
import FeaturedProjects from "../sections/FeaturedProjects";
import MainCover from "../sections/MainCover";
import PageContainer from "../components/PageContainer";
import Skills from "../sections/Skills";
import WorkHistory from "../sections/WorkHistory";

const LandingPage = () => {
  return (
    <PageContainer>
      <MainCover />
      <Skills/>
      <FeaturedProjects/>
      <WorkHistory />
    </PageContainer>
  );
};

export default LandingPage;
