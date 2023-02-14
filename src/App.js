import React from "react";
import { Router } from "@reach/router";
import LandingPage from "./pages/LandingPage";
import Header from "./componenst/Header";
import MyProjects from "./pages/MyProjects";
import Footer from "./componenst/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <Router>
        <LandingPage path="/" />
        <MyProjects path="/my-projects"/>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
