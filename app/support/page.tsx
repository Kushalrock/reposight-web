"use client";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div className="bg-black min-w-screen min-h-screen flex  justify-center">
      <div className="   md:w-2/3 p-1">
        <iframe
          data-tally-src="https://tally.so/embed/3qdjZ8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="996"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Reposight Support"
        ></iframe>
        <Script
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          onLoad={() => {
            Tally.loadEmbeds();
          }}
        />
      </div>
    </div>
  );
};

export default page;
