"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AppBar from "../components/common/AppBar/AppBar";
import FilterMenu from "../components/FilterMenu";
import MobileFilterMenu from "../components/MobileFilterMenu";
import { motion } from "framer-motion";
import fetchReposAndIssues from "../Hooks/FetchRepos";
import useFilterStore from "../Store/store";
import RepoCard from "../components/RepoCard";

interface Repo {
  repo_id: string;
  repo_name: string;
  repo_desc: string;
  repo_url: string; // Include repo_url in Repo interface
}

const Page: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const languages = useFilterStore((state) => state.languages);
  const difficulty = useFilterStore((state) => state.difficulties);
  const topics = useFilterStore((state) => state.topics);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const fetchedRepos = await fetchReposAndIssues(
          languages,
          difficulty,
          topics
        );
        const reposData: Repo[] = fetchedRepos.map((repo: any) => ({
          repo_id: repo.repo_id,
          repo_name: repo.repo_name,
          repo_desc: repo.repo_desc,
          repo_url: repo.repo_url,
        }));
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };
    fetchRepos();
  }, [languages, difficulty, topics]);

  return (
    <div className="w-screen min-h-screen bg-black flex flex-col items-center">
      <AppBar />
      <div className="hidden md:block">
        <FilterMenu className="absolute left-6 top-24" />
      </div>
      <div className="md:hidden">
        <MobileFilterMenu></MobileFilterMenu>
      </div>
        <div className="flex flex-col items-center md:w-2/3 w-4/5 max-h-fit text-white mt-4 ">
          {repos.map((repo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <RepoCard
                key={repo.repo_id}
                fields={[repo.repo_name, "", repo.repo_desc, repo.repo_url]}
              />
            </motion.div>
          ))}
        </div>
    </div>
  );
};

export default Page;
