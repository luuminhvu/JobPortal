import Heading from "@/app/Helper/Heading";
import JobCard from "@/app/Helper/JobCard";
import JobData from "@/data";
import Link from "next/link";

const FeatureJob = () => {
  return (
    <>
      <div className="pt-20 pb-12">
        <Heading
          mainHeading={"Feature Jobs"}
          subHeading={"Know more about our jobs"}
        />
        <div className="mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {JobData.map((job) => {
            return (
              <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
                <JobCard job={job} />
              </Link>
            );
          })}
        </div>
        <Link href="/job/alljobs">
          <div className="text-center mt-[3rem]">
            <button className="py-2 px-8 bg-pink-500 text-white font-semibold rounded-lg">
              See All Jobs
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default FeatureJob;
