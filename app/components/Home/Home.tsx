import React from "react";
import Hero from "./Hero";
import JobCategory from "./JobCategory";
import FeatureJob from "./FeatureJob";
const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <JobCategory />
        <FeatureJob />
      </div>
    </>
  );
};

export default Home;
