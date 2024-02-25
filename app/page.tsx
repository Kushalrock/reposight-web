"use client";
import React from "react";

import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import ArrowSVG from "@/assets/SVG/ArrowSVG";
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
    <>
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
          <button className="inline-flex text-xl  z-50 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white   transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Get Started{" "}
            <div className="transition-transform transform hover:translate-x-2">
              {" "}
              <ArrowSVG></ArrowSVG>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
