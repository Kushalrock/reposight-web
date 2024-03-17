"use client";
import React, { useState,useEffect } from "react";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Display from "./Display"
type Description = {
  heading: string;
  description: string;
  code:string;
};

const Foo: React.FC = () => {
  

  const description:Description[]=[
    {
      heading: 'Heading 1',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio, culpa, illo sed enim id, qui harum quidem velit molestias aspernatur! Tempore illum pariatur nostrum quaerat eum non? Vero, ipsa!',
      code:`class Test
      {
          public static void main(String []args)
          {
              System.out.println("My First Java Program.");
          }
      };`
      
    },
    {
      heading: 'Heading 2',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolor debitis. Odit, officia ea quae placeat ipsum alias consequuntur maxime, molestias minus voluptas nihil modi dignissimos quod ex asperiores quo.',
      code:`class Test
      {
          public static void main(String []args)
          {
              System.out.println("My First Java Program.");
          }
      };`
    }
  ];

  const [showDescription, setShowDescription] = useState<Record<string, boolean>>({
    'Heading 1': false,
    'Heading 2': false,
  });

  const handleButtonClick = (description: Description) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [description.heading]: !prevState[description.heading],
    }));
    const heading = document.querySelector('.index') as HTMLElement | null;;
  if (heading) {
    heading.innerText = `index.js > ${description.heading}`;
  }
  };

  return (
    <div>
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <Display/>
  </div>
  <div className="min-h-screen relative w-full bg-black flex flex-col overflow-hidden opacity-95">
    <h1 className="index flex justify-center text-white text-2xl mt-4">index.js</h1>
    <ol className="text-white flex-start text-l list-disc list-inside mx-4">
    <div>
      {description.map((item, index) => (
        <div key={index}>
          <li className="mt-4 text-slate-400 hover:text-white"><button onClick={() => handleButtonClick(item)}>{item.heading}</button></li>
          {showDescription[item.heading] && (
            <div >
              <p className="p-4">{item.description}</p>
            {item.code && <div className="mx-4 bg-sky-500/[.19] rounded-lg flex "><pre className="mx-2 overflow-auto"><p className="text-xl ">Code:</p><p >{item.code}</p></pre></div>}
            </div>
          )
          }
        </div>
      ))}
    </div>
    </ol>
  </div>
</div>

  );
};

export default Foo;
