import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
export const Navbar = () => {
  return (
    <nav className="p-5 bg-sky-950 text-white">
      <div className="flex flex-row justify-between mx-10">
        <h1>Uoichiba</h1>
        <div>
          <ul className="flex flex-row gap-8">
            <Link
              href={""}
              className="mr-4 text-lg flex flex-row items-center gap-1 hover:font-bold"
            >
              <FaRegUser></FaRegUser>
              Account
            </Link>
            <Link href={""} className="mr-4 text-lg hover:font-bold">
              Sign In
            </Link>
            <Link href={""} className="mr-4 text-lg hover:font-bold">
              Sign Up
            </Link>
            <Link href={""} className="mr-4 text-lg hover:font-bold">
              Category
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
