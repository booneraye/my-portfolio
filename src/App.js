import React from "react";
import { Router } from "@reach/router";
import LandingPage from "./pages/LandingPage";
import ReactJSProjects from "./pages/ReactJSProjects";
import ArduinoProjects from "./pages/ArduinoProjects";
import WordPressProjects from "./pages/WordPressProjects";

const App = () => {
  return (
    <div>
      <Router>
        <LandingPage path="/" />
        <ReactJSProjects path="/react-js-projects"/>
        <ArduinoProjects path="/arduino-projects"/>
        <WordPressProjects path="/wordpress-projects"/>
      </Router>
    </div>
  );
};

export default App;
