"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import useFilterStore from "../Store/store";
interface RepoCardProps {
  fields: string[];
}

const RepoCard: React.FC<RepoCardProps> = ({ fields }) => {
  const [repoId, repoName, ownerName, description, githubLink] = fields;
  const difficulties=useFilterStore((state)=>state.difficulties);
  const queryString = `?repoId=${repoId}&repoName=${encodeURIComponent(
    repoName
  )}&repoDesc=${encodeURIComponent(description)}&difficulty=${encodeURIComponent(difficulties.join(','))}`;
  console.log(decodeURIComponent(queryString));
  return (
    <Card className="w-full p-2 m-2 bg-[#3c3c3c] text-black ">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <Link href={`/issues${queryString}`}>
            <p className="text-md">{repoName}</p>
          </Link>
          <p className="text-small text-default-500">{ownerName}</p>
        </div>
      </CardHeader>
      <Divider className="bg-slate-500 h-[1.5px] " />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <div className="flex justify-center"></div>
      <CardFooter className="flex  flex-col md:flex-row justify-between">
        <Link
          isExternal
          showAnchorIcon
          href={githubLink}
          className="text-yellow-400"
        >
          Visit source code on GitHub.
        </Link>
        <div className="flex flex-row gap-2">
          <div>Issues</div>
          <Divider orientation="vertical" className="bg-slate-500  h-auto " />
          <div>Stars</div>
          <Divider orientation="vertical" className="bg-slate-500  h-auto " />
          <div>Forks</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RepoCard;
