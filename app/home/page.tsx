"use client";
import React from "react";
import Searchbar from "../components/searchbar";
import Dropdown from "../components/common/dropdowns";
const page = () => {
  const containerStyle = {
    background:
      "rgb(234, 157, 204) radial-gradient(circle, rgba(234, 157, 204, 1) 21%, rgba(20, 20, 20, 1) 84%)",
  };

  return (
    <main
      className="h-screen w-screen flex items-center flex-col"
      style={containerStyle}
    >
      <Searchbar />
      <div className="flex flex-row gap-2 mt-2 items-center justify-center">
        <Dropdown label="Language" options={["C", "C++", "JS","TS","Python","Rust"]} />
        <Dropdown label="Topics" options={["Finance", "Cars", "Truck"]} />
        <Dropdown label="Difficulty" options={["Beginner", "Intermediate", "Advanced"]} />
      </div>
    </main>
  );
};

export default page;
