import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import DoctorLogin from "./components/Doctor/DoctorLogin";
import PatientLogin from "./components/Patient/PatientLogin";
import AdminLogin from "./components/Admin/AdminLogin";

const App = () => {
  return (
    <div className="App">
      <AdminLogin/>

    </div>
  );
};

export default App;
