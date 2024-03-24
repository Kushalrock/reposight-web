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
    name: "Kushal Agrawal",
    designation: "Project Lead",
    image: "https://i.ibb.co/pdFqc9z/kushal-pic.jpg",
  },
  {
    id: 2,
    name: "Mohammad Shahzil",
    designation: "Frontend Lead",
    image: "https://i.ibb.co/CVFC8zL/IMG-0097.jpg",
  },
  {
    id: 3,
    name: "Kanishk Sharma",
    designation: "Backend Lead",
    image: "https://i.ibb.co/51bwMgQ/kanishk-pic.jpg",
  },
  {
    id: 4,
    name: "Aviral Srivastava",
    designation: "Frontend Developer",
    image: "https://i.ibb.co/m0fB8Vs/aviral-pic-jpeg.jpg",
  },
  {
    id: 5,
    name: "Siddharth Tripathi",
    designation: "Frontend Developer",
    image: "https://i.ibb.co/R2qnkNx/siddharth-pic.jpg",
  },
  {
    id: 6,
    name: "Kalp Patel",
    designation: "Frontend Developer",
    image: "https://i.ibb.co/bQ0cXXb/kalp-pic.jpg",
  },
  {
    id: 7,
    name: "Raazi Faisal",
    designation: "UI/UX Designer",
    image: "https://i.ibb.co/nCFTydw/raazi-pic.jpg",
  },
  {
    id: 8,
    name: "Mohd Zaid Husain",
    designation: "UI/UX Designer",
    image: "https://i.ibb.co/bQ0cXXb/kalp-pic.jpg",
  },
  {
    id: 9,
    name: "Priyanshu Teotia",
    designation: "App Dev Lead",
    image: "https://i.ibb.co/GWvtjHn/priyanshu-pic.jpg",
  },
  {
    id: 10,
    name: "Lakshya Mehta",
    designation: "Social Media Manager",
    image: "https://i.ibb.co/GxxDvQ2/lakshya-pic.jpg",
  },
  {
    id: 11,
    name: "Manvi Agrawal",
    designation: "Frontend Developer",
    image: "https://i.ibb.co/djpH1PS/manvi-pic.jpg",
  },
];
const page = () => {
  return (
    <div className="bg-black min-w-screen min-h-screen flex  justify-center">
      <div className="md:w-2/3 p-1 ">
        <div className="md:h-4 h-4"></div>
        <div className="p-2 grid gap-4 ">
          <h1 className="text-neutral-300 text-4xl md:text-5xl font-semibold my-3">
            Who we are ?
          </h1>{" "}
          <div className="text-neutral-400 text-2xl md:text-3xl text-justify my-3 ">
            <TextGenerateEffect words={words1} />
          </div>
          <h1 className="text-neutral-300 text-4xl md:text-5xl font-semibold my-3">
            Our Mission
          </h1>
          <div className="text-neutral-400 text-2xl md:text-3xl text-justify my-3 ">
            <TextGenerateEffect words={words2} />
          </div>
          <h1 className="text-neutral-300 text-4xl md:text-5xl font-semibold my-5">
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
