"use client";
import RepoCard from "../components/RepoCard";
import Link from "next/link";
import React from "react";
import AppBar from "../components/common/AppBar/AppBar";
import FilterMenu from "../components/FilterMenu";
import MobileFilterMenu from "../components/MobileFilterMenu";
import { motion } from "framer-motion";
import IssueCard from "../components/IssueCard";
import getFilteredRepos from "../Hooks/FetchRepos";
import useFilterStore from "../Store/store";
import { SparklesCore } from "@/components/ui/sparkles";
// max-h-fit
const Page = () => {
  const languages = useFilterStore((state) => state.languages);
  const domains = useFilterStore((state) => state.topics);
  const levels = useFilterStore((state) => state.difficulties);
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col items-center">
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
      <div className="hidden md:block">
        <FilterMenu className="absolute left-6 top-24" />
      </div>
      <div className="md:hidden">
        <MobileFilterMenu></MobileFilterMenu>
      </div>
      <div className="flex flex-col items-center md:w-2/3 w-4/5 max-h-fit text-white mt-4 ">
        {/* <IssueCard></IssueCard> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <Link href="/issues">
            <RepoCard
              fields={[
                "Repository Name",
                "Mohd Shahzil",
                "Make beautiful websites regardless of your design experience.",
                "https://github.com/nextui-org/nextui",
              ]}
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;

//fff
