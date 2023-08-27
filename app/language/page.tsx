"use client";
import React, { useState } from "react";
import Link from "next/link";

const options = ["C/C++", "C#", "Javascript", "Java", "Python", "Typescript"];

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
    <div className="bg-zinc-950 w-screen min-h-screen flex justify-center items-center flex-col text-white">
      <div className="text-6xl text-center mb-2">Language Preference</div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-10 p-6">
        {options.map((option, index) => (
          <button
            key={index}
            className={`flex flex-row items-center justify-center px-2 border rounded-full text-2xl cursor-pointer transition duration-300 lg:h-20 h-10 ${
              selectedOptions.includes(option)
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
            onClick={() => toggleOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <Link href="/level">
        <button className="bg-white text-black text-2xl m-4 rounded-xl h-10 w-24">
          Next
        </button>
      </Link>
    </div>
  );
};

export default Page;
