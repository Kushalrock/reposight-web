"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const page = () => {
  const words = [
    {
      text: "About",
      className: "text-white  ",
    },
    {
      text: "Us.",
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
          particleColor="#FFFFFF"
        />
      </div>

      <TypewriterEffectSmooth
        
        words={words}
      />
    <div className="text-white mt-8 px-4 flex flex-col items-center justify-center" style={{ display: 'flex' }}>
        <blockquote className="text-center italic text-gray-400 flex flex-col items-center justify-center">Find Open Source Projects that defines you and suits you</blockquote>
    </div>
    <div className="flex mt-8 flex-col sm:flex-row">
        <div className="text-white mr-4 flex-col sm:w-1/2" style={{ flex: 1, fontSize: '1.0rem', maxWidth: "600px" }}>
            <p className="mt-4" style={{ padding: '0 60px' }}>Reposight leverages its capabilities to streamline the process of finding open-source projects to contribute to. Probot seamlessly integrates with GitHub's API, enabling Reposight to provide efficient search functionality, customizable filters, and comprehensive project information. The Reposight app ensures a seamless and intuitive user experience, empowering contributors to discover and engage with open-source projects effortlessly.</p>
        </div>
        <div className="text-white mr-4 flex-col sm:w-1/2" style={{ flex: 1, fontSize: '2.0rem', maxWidth: "600px" }}>
            <p className="mt-4 flex-col text-xxxl" style={{ padding: '0 120px'}}>Find Open Source Project that defines you, impresses you, suits your needs.</p>
        </div>
    </div>  
    
    </div>
     
  );
};

export default page;
