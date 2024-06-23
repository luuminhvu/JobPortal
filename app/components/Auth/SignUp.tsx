"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="overflow-hidden h-[84vh] flex flex-col items-center justify-center">
      <Image src="/images/chair.jpg" alt="signup" width={400} height={200} />
      <button
        onClick={() => {
          signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_AUTH_URL! });
        }}
        className="px-12 py-3 mt-[2rem] rounded-lg hover:bg-blue-600 text-white bg-purple-500 transition-all duration-300"
      >
        Sign Up Now
      </button>
    </div>
  );
};

export default SignUp;
