import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/hero";
import HomeImg from "../Asserts/Home.jpg";
import Destination from "../component/Destination";
import Trip from "../component/Trip";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        img={HomeImg}
        text="choose your favorite destination"
        title="your journey your story"
        btnText="Travel Plan"
        url="/"
        btn="show"
      />
      <Destination />
      <Trip />
    </div>
  );
};
export default Home;
