"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";

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
        <blockquote className="text-center italic text-gray-400 flex flex-col items-center justify-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</blockquote>
    </div>
    <div className="flex mt-8 flex-col sm:flex-row">
        <div className="text-white mr-4 flex-col sm:w-1/2" style={{ flex: 1, fontSize: '1.5rem', maxWidth: "600px" }}>
            <p className="mt-4" style={{ padding: '0 60px' }}>Lorem ipsum dolor sit amet, ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="text-white mr-4 flex-col sm:w-1/2" style={{ flex: 1, fontSize: '2rem', maxWidth: "600px" }}>
            <p className="mt-4 flex-col" style={{ padding: '0 120px' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>  
    <style jsx>{`
    @media only screen and (max-width: 768px) {
            .text-white p {
                font-size: 0.8rem;
            }

            blockquote{
                font-size: 0.8rem;
            }
        }
    `}</style>
    </div>
     
  );
};

export default page;
