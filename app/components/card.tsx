// components/RepoCard.tsx

import React from "react";

interface RepoCardProps {
  repoName: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

const RepoCard: React.FC<RepoCardProps> = ({
  repoName,
  description,
  language,
  stars,
  forks,
  url,
}) => {
  return (
    <div className="lg:w-[50rem] rounded-lg shadow-lg bg-black bg-opacity-40 p-4">
      <h2 className="text-xl font-semibold text-white">{repoName}</h2>
      <p className="text-gray-300">{description}</p>
      <div className="flex mt-4">
        <div className="text-blue-500">
          {language}
        </div>
        <div className="ml-4">
          <span className="text-yellow-400">Stars: {stars}</span>
          <span className="ml-2 text-yellow-400">Forks: {forks}</span>
        </div>
      </div>
      <a
        href={url}
        className="mt-4 text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default RepoCard;
