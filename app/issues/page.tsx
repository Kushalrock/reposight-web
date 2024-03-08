"use client";

import AppBar from "../components/common/AppBar/AppBar";
import { SparklesCore } from "@/components/ui/sparkles";
import { Divider } from "@nextui-org/react";
import IssueCard from "@/components/ui/IssueCard/IssueCard";
import fetchReposAndIssues from "../Hooks/FetchRepos";
import useFilterStore from "../Store/store";
import { useEffect, useState } from "react";

interface Repo {
  repo_name: string;
  repo_desc: string;
}

const IssueCardPage = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const languages = useFilterStore((state) => state.languages);
  const difficulty = useFilterStore((state) => state.difficulties);
  const topics = useFilterStore((state) => state.topics);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repos = await fetchReposAndIssues(languages, difficulty, topics);
        const reposData: Repo[] = repos.map((repo: any) => ({
          repo_name: repo.repo_name,
          repo_desc: repo.repo_desc,
        }));
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };
    fetchData();
  }, []);

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
          <h1 className="text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            {repos.length > 0 && repos[0].repo_name}
          </h1>
          <div className="flex flex-row items-center  text-white text-3xl md:my-4 mt-2 mb-2 gap-3">
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
            {repos.length > 0 && repos[0].repo_desc}
          </div>
          <IssueCard></IssueCard>
        </div>
      </div>
    </div>
  );
};

export default IssueCardPage;
