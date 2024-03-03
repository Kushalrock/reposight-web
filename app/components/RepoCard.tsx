import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import AppBar from "../components/common/AppBar/AppBar";
import { SparklesCore } from "@/components/ui/sparkles";

interface RepoCardProps {
  fields: string[];
}

const RepoCard: React.FC<RepoCardProps> = ({ fields }) => {
  const [repoName, ownerName, description, githubLink] = fields;

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
    <Card className="w-full p-2 m-2 bg-[#3c3c3c] text-white ">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{repoName}</p>
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
  </div>
  );
};

export default RepoCard;
