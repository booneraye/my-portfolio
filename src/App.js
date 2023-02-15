import React from "react";
import { Router } from "@reach/router";
import LandingPage from "./pages/LandingPage";
import Header from "./componenst/Header";
import Footer from "./componenst/Footer";
import ReactJSProjects from "./pages/ReactJSProjects";

const App = () => {
  return (
    <div>
      <Header/>
      <Router>
        <LandingPage path="/" />
        <ReactJSProjects path="/react-js-projects"/>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
