"use client";
import RepoCard from "../components/RepoCard";
import React from "react";
import AppBar from "../components/common/AppBar/AppBar";
import FilterMenu from "../components/FilterMenu";
import MobileFilterMenu from "../components/MobileFilterMenu";
import { motion } from "framer-motion";
import IssueCard from "../components/IssueCard";
const Page = () => {
  return (
    <div className="w-screen max-h-fit bg-black flex flex-col items-center">
      <AppBar />
      <div className="hidden md:block">
        <FilterMenu className="absolute left-6 top-24" />
      </div>
      <div className="md:hidden">
        <MobileFilterMenu></MobileFilterMenu>
      </div>
      <div className="flex flex-col items-center md:w-2/3 w-4/5 max-h-fit text-white mt-4">
        <IssueCard></IssueCard>
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <RepoCard></RepoCard>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Page;

//fff
