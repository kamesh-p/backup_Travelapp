import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/hero";
import ContactImg from "../Asserts/Contact.jpg";
import ContaactForm from "../component/ContaactForm";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" img={ContactImg} title="Contact" btn="hide" />
      <ContaactForm />
    </div>
  );
};

export default Contact;
