import { Job } from "@/data";
import Image from "next/image";
import { BiMoney } from "react-icons/bi";
import { FaMapLocation } from "react-icons/fa6";

interface Props {
  job: Job;
}
const JobCard = ({ job }: Props) => {
  return (
    <div className="p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
      <div className="flex items-center space-x-6">
        <div>
          <Image src={job?.image} alt="job" width={50} height={50} />
        </div>
        <div>
          <h1 className="text-[17px] mb-[0.4rem] font-semibold">
            {job?.title}
          </h1>
          <div className="flex items-center space-x-4 md:space-x-10">
            <div className="flex items-center space-x-2">
              <FaMapLocation className="w-[0.8rem] h-[0.8rem] text-pink-500" />
              <p className="text-[14px] text-black font-semibold text-opacity-50">
                {job?.location}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiMoney className="w-[0.8rem] h-[0.8rem] text-pink-500" />
              <p className="text-[14px] text-black font-semibold text-opacity-50">
                {job?.salary}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 mt-[1rem]">
            <div className="text-[10px] sm:text-[14px] text-black  text-opacity-50 px-3 sm:px-6 py-1 rounded-full bg-opacity-50 font-semibold capitalize bg-green-400">
              {job?.jobtype}
            </div>
            <div className="text-[10px] sm:text-[14px] text-black  text-opacity-50 px-3 sm:px-6 py-1 rounded-full bg-opacity-50 font-semibold capitalize bg-red-400">
              Private
            </div>
            <div className="text-[10px] sm:text-[14px] text-black  text-opacity-50 px-3 sm:px-6 py-1 rounded-full bg-opacity-50 font-semibold capitalize bg-blue-400">
              Urgent
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
