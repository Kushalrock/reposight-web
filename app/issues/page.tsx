"use client"
import React from "react";
import AppBar from "../components/common/AppBar/AppBar";
import { SparklesCore } from "@/components/ui/sparkles";
import { Divider } from "@nextui-org/react";
import IssueCard from "@/components/ui/IssueCard/IssueCard";
import useFilterStore from "../Store/store";
import { useSearchParams } from "next/navigation";
const IssueCardPage: React.FC = () => {
  const searchparams=useSearchParams();
  const repoId=searchparams.get("repoId");
  const difficulty=searchparams.get("difficulty");
  console.log(typeof(difficulty));
  // You can fetch other necessary data from store or elsewhere if needed

  return (
    <div className="w-full min-h-screen bg-black">
      <AppBar />
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />

      <div className="w-full md:p-4 p-3 ">
        <div className="w-full md:w-3/4 md:ml-52 flex flex-col md:mb-4 mb-2">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {searchparams.get("repoName")}
          </h1>
          <div className="flex flex-row items-center text-white text-3xl md:my-4 mt-2 mb-2 gap-3">
            <div className="text-white text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Issues
            </div>
            <Divider orientation="vertical" className="text-white bg-white h-7" />
            <div className="text-white text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
              Fork
            </div>
            <Divider orientation="vertical" className="text-white bg-white h-7 " />
            <div className="text-white text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Stars
            </div>
          </div>
          <div className="text-white text-2xl md:mt-4 mt-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {searchparams.get("repoDesc")}
          </div>
          <IssueCard repoId={repoId as string} difficulty={difficulty as string}/>
        </div>
      </div>
    </div>
  );
};

export default IssueCardPage;
