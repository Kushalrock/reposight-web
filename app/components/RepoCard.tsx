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

const RepoCard: React.FC = () => {
  return (
    <Card className="w-full p-2 m-2 bg-black text-white border ">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Repository Name</p>
          <p className="text-small text-default-500">Mohd Shahzil</p>
        </div>
      </CardHeader>
      <Divider className="bg-slate-500 h-[1.5px] " />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <div className="flex justify-center"></div>
      <CardFooter className="flex  flex-col md:flex-row justify-between">
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
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
