"use client";
import React, { useState,useEffect } from "react";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import "./style.css"



const Display:React.FC =()=>{
    const words = [
        {
          text: "Meet",
          className: "text-white",
        },
        {
          text: "Documentation",
          className: "text-white",
        },
        {
          text: "Reposight.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];

      const description=[
        {
            text:"This is a general decription of the documentation",
            className:"text-white"
        }
      ]
      const [scope, animate] = useAnimate();
      const isInView = useInView(scope);
      useEffect(() => {
        if (isInView) {
          animate(
            "span",
            {
              display: "inline-block",
              opacity: 1,
            },
            {
              duration: 0.3,
              delay: stagger(0.1),
              ease: "easeInOut",
            }
          );
        }
      }, [isInView]);
    
    return(
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
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex">
        <h1 className="main text-3xl flex flex-wrap">Meet Documentation <div className="flex-wrap text-blue-500 dark:text-blue-500">&nbsp;Reposight</div></h1>
      </div>
      </div>
      <div className="-translate-y-16 ml-4 text-xs head2"  >
      <TypewriterEffectSmooth words={description} />
      </div>
    </div>
    )

}


export default Display;