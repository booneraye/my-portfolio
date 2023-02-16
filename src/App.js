import React from "react";
import { Router } from "@reach/router";
import LandingPage from "./pages/LandingPage";
import Header from "./componenst/Header";
<<<<<<< HEAD
import MyProjects from "./pages/MyProjects";
import Footer from "./componenst/Footer";
=======
import Footer from "./componenst/Footer";
import ReactJSProjects from "./pages/ReactJSProjects";
import ArduinoProjects from "./pages/ArduinoProjects";
import WordPressProjects from "./pages/WordPressProjects";
>>>>>>> 91b49b30341b4d41ac9db2abd3d4b611701685fb

const App = () => {
  return (
    <div>
      <Header/>
      <Router>
        <LandingPage path="/" />
<<<<<<< HEAD
        <MyProjects path="/my-projects"/>
=======
        <ReactJSProjects path="/react-js-projects"/>
        <ArduinoProjects path="/arduino-projects"/>
        <WordPressProjects path="/wordpress-projects"/>
>>>>>>> 91b49b30341b4d41ac9db2abd3d4b611701685fb
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
