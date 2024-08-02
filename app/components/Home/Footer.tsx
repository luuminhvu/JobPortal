import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

type Props = {};
export const Footer = ({}: Props) => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        <div>
          <h1 className="text-[24px] text-white mb-[1rem] font-bold uppercase">
            Jobify
          </h1>
          <p className="text-[14px] text-white text-opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="mt-[1.5rem] flex items-center space-x-3">
            <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-blue-500 flex items-center justify-center flex-col">
              <FaFacebookF className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-sky-500 flex items-center justify-center flex-col">
              <FaTwitter className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-red-500 flex items-center justify-center flex-col">
              <FaYoutube className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-pink-500 flex items-center justify-center flex-col">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[22px] w-fit text-white mb-[1.5rem] font-bold uppercase">
            About Us
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            Job
          </p>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            About
          </p>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            Contact
          </p>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            Help
          </p>
        </div>
        <div>
          <h1 className="text-[22px] w-fit text-white mb-[1.5rem] font-bold uppercase">
            About Us
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            Job
          </p>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            About
          </p>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            Contact
          </p>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            Help
          </p>
        </div>
        <div>
          <h1 className="text-[22px] w-fit text-white mb-[1.5rem] font-bold uppercase">
            About Us
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            Job
          </p>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            About
          </p>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            Contact
          </p>
          <p className="text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-65 mb-[0.7rem]">
            Help
          </p>
        </div>
      </div>
      <p className="text-[14px] mt-[2rem] text-white text-opacity-70 text-center">
        © 2022 Job Portal. All rights reserved
      </p>
    </div>
  );
};
