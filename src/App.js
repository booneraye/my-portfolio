import React from "react";
import { Router } from "@reach/router";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <div>
      <Router>
        <LandingPage path="/" />
      </Router>
    </div>
  );
};

export default App;
