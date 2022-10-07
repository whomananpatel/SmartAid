import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <NavbarComp />
      <Slider />
      <Footer />
    </div>
  );
};

export default App;
