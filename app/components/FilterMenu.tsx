"use client"
import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const FilterMenu = () => {
  const [isMobile, setIsMobile] = useState(true);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div>
      <button
        className="absolute top-2 right-2 text-white cursor-pointer "
        onClick={toggleMobile}
      >
        {isMobile ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>
      {isMobile && (
        <div className="fixed top-0 left-0 h-full  w-[20vw]  flex flex-col p-4 shadow-lg bg-black bg-opacity-40">
          <div className="text-white">shahzil</div>
          <div className="text-white">shahzil</div>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
