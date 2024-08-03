import ApplyButton from "@/app/Helper/ApplyButton";
import JobCard from "@/app/Helper/JobCard";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import Link from "next/link";

const JobDetails = async ({ params }: { params: { id: string } }) => {
  const singleJob = JobData.find((job) => job.id.toString() == params.id);
  const session = await getServerSession(authOptions);
  const firstFourJobs = JobData.slice(0, 4);
  return (
    <div className="mt-20 mb-12">
      <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7]">
          <JobCard job={singleJob!} />
        </div>
        {session && <ApplyButton />}
        {!session && (
          <Link href="/signup">
            <button className="py-3 px-8 bg-pink-500 text-white font-semibold rounded-lg">
              Sign Up To Apply
            </button>
          </Link>
        )}
      </div>

      <div className="w-[80%] mx-auto mt-12">
        <div className="mb-[2rem]">
          <h1 className="font-semibold">Similar Jobs</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {firstFourJobs.map((job) => {
            return (
              <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
                <JobCard job={job} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
