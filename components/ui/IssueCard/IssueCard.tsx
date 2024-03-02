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
const IssueCard = () => {
  return (
    <div>
      {" "}
      <Card className="w-full mt-8 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        <CardHeader className="flex gap-3">
        
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            {/* <p className="text-small text-default-500">nextui.org</p> */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default IssueCard;
