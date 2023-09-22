import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import ServicesImg from "../Asserts/Services.jpg";
import Trip from "../component/Trip";
const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" img={ServicesImg} title="Services" btn="hide" />
      <Trip />
    </div>
  );
};

export default Services;
