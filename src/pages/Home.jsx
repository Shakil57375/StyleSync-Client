import React from "react";
import Newsletter from "../Components/NewsLetter";
import Policy from "../Components/Policy";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Policy />
      <Newsletter />
    </div>
  );
};

export default Home;
