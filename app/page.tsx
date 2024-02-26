"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
const page = () => {
  const words = [
    {
      text: "Find",
      className: "text-white",
    },
    {
      text: "Opensource",
      className: "text-white",
    },
    {
      text: "projects",
      className: "text-white",
    },
    {
      text: "with",
      className: "text-white",
    },
    {
      text: "Reposight.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <TypewriterEffectSmooth words={words} />
    </div>
  );
};

export default page;
