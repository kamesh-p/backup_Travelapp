import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/hero";
import AboutImg from "../Asserts/About.jpg";
import AboutUs from "../component/AboutUs";
const About = () => {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" img={AboutImg} title="About" btn="hide" />
      <AboutUs />
    </div>
  );
};
export default About;
