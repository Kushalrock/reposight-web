"use client";
import React from "react";
import Searchbar from "../components/searchbar";
import RepoCard from "../components/card";
import FilterMenu from "../components/FilterMenu"; // Import your FilterMenu component

const Page = () => {
  const containerStyle = {
    background:
      "rgb(234, 157, 204) radial-gradient(circle, rgba(234, 157, 204, 1) 21%, rgba(20, 20, 20, 1) 84%)",
  };

  return (
    <main
      className="h-screen w-screen flex items-center flex-col"
      style={containerStyle}
    >
      <FilterMenu />

      <Searchbar />
      <div className="mt-4">
        <RepoCard
          repoName="Kanishk"
          language="Python"
          description="hi, this is a sample repo"
          stars={5}
          forks={50}
          url="www.exidge.com"
        />
      </div>
      <div className="mt-4">
        <RepoCard
          repoName="Kanishk"
          language="Python"
          description="hi, this is a sample repo"
          stars={5}
          forks={50}
          url="www.exidge.com"
        />
      </div>
      <div className="mt-4">
        <RepoCard
          repoName="Kanishk"
          language="Python"
          description="hi, this is a sample repo"
          stars={5}
          forks={50}
          url="www.exidge.com"
        />
      </div>
    </main>
  );
};

export default Page;
