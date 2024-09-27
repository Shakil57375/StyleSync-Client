import React from "react";
import Newsletter from "../Components/NewsLetter";
import Policy from "../Components/Policy";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSallers from "../Components/BestSallers";

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSallers/>
      <Policy />
      <Newsletter />
    </div>
  );
};

export default Home;
