import { LeftIcon, TwitterIcon } from "@/asstets/icons";
import { Icons } from "@/asstets/icons/Icons";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-40 text-[#161616]   bg-orange-light       ">
      <div className="container mx-auto max-w-7xl   w-[93%]    bg-right  bg-no-repeat   md:bg-[url('/Footer.png')] bg-contain md:p-16 py-16 text-center md:text-left justify-between h-fit md:h-[300px]  flex flex-col  gap-5">
        <div className="max-w-xl  ">
          <Input
            radius="lg"
            placeholder="Enter Your Email"
            endContent={
              <Button
                className="md:bg-orange w-[200px]  bg-transparent text-orange md:text-white "
                endContent={<LeftIcon />}
              >
                Subscribe
              </Button>
            }
          />
        </div>
        <div className="max-w-2xl">
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-end">
            <div className="flex   gap-5 flex-col">
              <h1 className="font-bold text-4xl font-arlon ">
                pti<span className="text-orange font-merry">.</span>
              </h1>
              <p className="font-medium text-xs">
                Copyright©Tripp. All Right Reserved
              </p>
            </div>
            <div className="flex py-6  gap-3 justify-center items-center">
              <Button
                isExternal
                as={Link}
                className="text-sm font-normal p-2 text-white bg-orange md:text-orange md:bg-[#FEDDBA]"
                variant="flat"
                isIconOnly
                radius="full"
              >
                <Icons.google />
              </Button>
              <Button
                isExternal
                as={Link}
                className="text-sm font-normal text-white bg-orange md:text-orange md:bg-[#FEDDBA]"
                variant="flat"
                isIconOnly
                radius="full"
              >
                <TwitterIcon />
              </Button>
              <Button
                isExternal
                as={Link}
                className="text-sm font-normal p-2 text-white bg-orange md:text-orange md:bg-[#FEDDBA]"
                variant="flat"
                isIconOnly
                radius="full"
              >
                <Icons.instagram />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
