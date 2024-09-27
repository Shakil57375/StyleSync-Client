import React from "react";
import Newsletter from "../Components/NewsLetter";
import Policy from "../Components/Policy";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Policy />
      <Newsletter />
    </div>
  );
};

export default Home;
