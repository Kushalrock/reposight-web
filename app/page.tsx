"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
const page = () => {
  const words = [
    {
      text: "Find",
      className: "text-white ",
    },
    {
      text: "OpenSource",
      className: "text-white",
    },
    {
      text: "Projects",
      className: "text-white",
    },
    {
      text: "with",
      className: "text-white",
    },
    {
      text: "Reposight",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#d3d3d3"
        />
      </div>

      <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <p className="text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>
    </div>
  );
};

export default page;
