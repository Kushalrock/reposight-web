"use client";
import React from "react";
import { Input, Textarea } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Checkbox,
  CheckboxGroup,
  Button,
} from "@nextui-org/react";
import Difficulty from "./Difficulty";
import { FaStar } from "react-icons/fa";
const IssueCard: React.FC = () => {
  return (
    <Card className="w-full h-full p-2 m-2 bg-[#2c2b2b] text-white ">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md text-6xl">Repository Name</p>
          <p className=" text-4xl mt-5 text-default-500">Mohd Shahzil</p>
        </div>
      </CardHeader>
      {/* <Divider className="bg-slate-500 h-[1.5px] " /> */}
      <CardBody>
        <p className="text-2xl">
          Make beautiful websites regardless of your design experience.
        </p>
      </CardBody>

      <div className="flex ml-3 text-2xl gap-4 flex-row ">
        <div className="mb-4 flex-col flex">
          <div>Issue rating</div>
          <div className="mt-3">200</div>
        </div>
        <Divider orientation="vertical" className=" bg-slate-700 w-1 h-20 "></Divider>

        <div className="mb-4 flex-col flex">
          <div>Fork</div>
          <div className="mt-3">200</div>
        </div>
        <Divider orientation="vertical" className=" bg-slate-700 w-1 h-20 "></Divider>
        
        <div className="mb-4 flex-col flex">
          <div>Rating</div>
          <div className="mt-3">200</div>
        </div>
        <Divider orientation="vertical" className=" bg-slate-700 w-1 h-20 "></Divider>
        <div className="mb-4 flex flex-col">
          Star 
          <div className="flex flex-row mt-3 ">
            <FaStar className="text-yellow-500 text-3xl" />
            <FaStar className="text-yellow-500 text-3xl" />
            <FaStar className="text-yellow-500 text-3xl" />
          </div>
        </div>
      </div>
      <div className="m-3 mb-2">
      <Button className="bg-zinc-100 rounded-xl text-3xl  font-semibold  fon hover:bg-zinc-200">
        Share
      </Button>
    </div> 

      <div className="flex flex-col  justify-center text-white">
        <div className=" w-11/12  ml-3 ">
          {/* Difficulty Checkboxes */}
          <div className="flex md:flex-row flex-col justify-between mb-6">
            <div className="flex items-center mt-2 bg-black w-40 bg-opacity-50 rounded-lg p-4">
              <Checkbox></Checkbox>
              <label className="text-2xl" htmlFor="easyCheckbox">
                Easy
              </label>
            </div>
            <div className="flex items-center mt-2 bg-black w-40 bg-opacity-50 rounded-lg p-4">
              <Checkbox></Checkbox>
              <label className="text-2xl" htmlFor="mediumCheckbox">
                Medium
              </label>
            </div>
            <div className="flex items-center mt-2 bg-black w-40 bg-opacity-50 rounded-lg p-4">
              <Checkbox></Checkbox>
              <label className="text-2xl" htmlFor="hardCheckbox">
                Hard
              </label>
            </div>
          </div>

          <Card className="p-2 bg-[#424141] w-full h-32 text-white">
          <div className="flex flex-row  gap-2">
          <div>Begnier</div>
          <Divider orientation="vertical" className="bg-slate-500  h-auto " />
          <div>Intermediate</div>
          <Divider orientation="vertical" className="bg-slate-500  h-auto " />
          <div>Advance</div>
        </div>
          </Card>
        </div>
      </div>

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

export default IssueCard;
