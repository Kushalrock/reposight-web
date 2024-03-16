import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const words1 = `At Reposight, we are committed to simplifying the journey of
open-source contribution. Our platform leverages cutting-edge
technology to streamline the process of finding and engaging with
open-source projects.`;
const words2 = `Reposight is on a mission to empower individuals and organizations to contribute meaningfully to the world of open source. By leveraging our innovative capabilities, we aim to make the process of discovering and engaging with projects seamless and efficient.`;
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
const page = () => {
  return (
    <div className="bg-black w-full min-h-screen flex  justify-center">
      <div className="w-11/12">
        <div className="md:h-28 h-12"></div>
        <div className="p-2 grid gap-4 ">
          <h1 className="text-neutral-300 text-4xl md:text-6xl font-semibold my-3">
            Who we are ?
          </h1>{" "}
          <div className="text-neutral-400 text-2xl md:text-4xl text-justify my-3 ">
            <TextGenerateEffect words={words1} />
          </div>
          <h1 className="text-neutral-300 text-4xl md:text-6xl font-semibold my-3">
            Our Mission
          </h1>
          <div className="text-neutral-400 text-2xl md:text-4xl text-justify my-3 ">
            <TextGenerateEffect words={words2} />
          </div>
          <h1 className="text-neutral-300 text-4xl md:text-6xl font-semibold my-5">
            The Team
          </h1>
          <div className="flex flex-row">
            <AnimatedTooltip items={people} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
