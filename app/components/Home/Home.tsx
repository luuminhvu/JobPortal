import React from "react";
import Hero from "./Hero";
import JobCategory from "./JobCategory";
import FeatureJob from "./FeatureJob";
import { Footer } from "./Footer";
const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <JobCategory />
        <FeatureJob />
        <Footer />
      </div>
    </>
  );
};

export default Home;
