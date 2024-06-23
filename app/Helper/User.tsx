/* eslint-disable @next/next/no-img-element */
"use client";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
interface Props {
  session: Session | null;
}
const User = ({ session }: Props) => {
  return (
    <div
      onClick={() => {
        signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_AUTH_URL}/signup` });
      }}
      className="flex items-center space-x-4 cursor-pointer"
    >
      <img
        src={session?.user?.image!}
        alt="user"
        className="w-[50px] h-[50px] rounded-full"
      />
    </div>
  );
};
export default User;
