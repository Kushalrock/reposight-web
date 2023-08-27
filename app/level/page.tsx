"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const options = ["Beginner", "Intermediate", "Advanced"];

const Page: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      <div className="bg-zinc-950 w-screen min-h-screen flex justify-center items-center flex-col text-white">
        <div className="text-6xl text-center mb-2">Level Preference</div>
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-10 p-6">
          {options.map((option, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-row items-center justify-center px-2 border rounded-full text-2xl cursor-pointer transition duration-300 lg:h-20 h-10 ${
                selectedOptions.includes(option)
                  ? "bg-white text-black"
                  : "hover:bg-white hover:text-black"
              }`}
              onClick={() => toggleOption(option)}
            >
              {option}
            </motion.li>
          ))}
        </div>
        <Link href="/domain">
          <motion.li
            className="bg-white text-black text-2xl m-4 lg:ml-96 rounded-xl h-10 w-24 list-none p-0 flex justify-center items-center cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Next
          </motion.li>
        </Link>
      </div>
    </>
  );
};

export default Page;
