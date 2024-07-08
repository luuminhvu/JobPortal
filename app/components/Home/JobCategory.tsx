import Heading from "@/app/Helper/Heading";
import JobCategoryCard from "@/app/Helper/JobCategoryCard";

const JobCategory = () => {
  return (
    <div className="pt-20 pb-12">
      <Heading
        mainHeading="Popular Job Category"
        subHeading="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center">
        <JobCategoryCard
          image="/images/icon1.png"
          category="Finance"
          openPosition="23"
        />
        <JobCategoryCard
          image="/images/icon2.png"
          category="Marketing"
          openPosition="23"
        />
        <JobCategoryCard
          image="/images/icon3.png"
          category="Developer"
          openPosition="23"
        />
        <JobCategoryCard
          image="/images/icon4.png"
          category="Design"
          openPosition="23"
        />
        <JobCategoryCard
          image="/images/icon5.png"
          category="Human Resource"
          openPosition="23"
        />
        <JobCategoryCard
          image="/images/icon6.png"
          category="Writer"
          openPosition="23"
        />
        <JobCategoryCard
          image="/images/icon7.png"
          category="Automotion"
          openPosition="23"
        />
        <JobCategoryCard
          image="/images/icon8.png"
          category="Content Writer"
          openPosition="23"
        />
        <JobCategoryCard
          image="/images/icon9.png"
          category="Sales"
          openPosition="23"
        />
      </div>
    </div>
  );
};

export default JobCategory;
