'use client'
import { useState } from "react";
// import close from "@/assets/nav-assets/close"; 
// import logo from "@/assets/nav-assets/logo"; 
// import menu from "@/assets/nav-assets/menu"; 
import { navLinks } from "@/constants/nav-constants";
import Image from 'next/image';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="md:w-full flex py-4 sm:justify-between items-center navbar bg-transparent ">
      {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
      {/* <Img></Img> */}
      <Image src="/logo.svg" alt="logo"  width={60} height={30} />
      {/* <div className="text-white" >Logo</div> */}
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
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        /> */}
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
