import { useState } from "react";
import Link from "next/link"; // Import Link component
import { navLinks } from "@/constants/nav-constants";
import Image from 'next/image';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="md:w-full flex py-4 sm:justify-between items-center navbar bg-transparent absolute">
      <div className="text-white p-5 text-3xl">Reposight</div> 
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-5" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        {/* Add Link for About */}
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        {/* Add Link for Privacy Policy */}
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white">
          <Link href="/privacyPolicy">
            <a>Privacy Policy</a>
          </Link>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
         <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            width={28}
            height={28}
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar  `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            {/* Add Link for About */}
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            {/* Add Link for Privacy Policy */}
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white">
              <Link href="/privacyPolicy">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
