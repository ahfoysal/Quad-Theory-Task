import { LeftIcon, TwitterIcon } from "@/asstets/icons";
import { Icons } from "@/asstets/icons/Icons";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-40 text-[#161616]   bg-orange-light       ">
      <div className="container mx-auto max-w-7xl       bg-right  bg-no-repeat   bg-[url('/Footer.png')] bg-contain md:p-16 p-4 text-center md:text-left justify-between h-fit md:h-[300px]  flex flex-col  gap-5">
        <div className="max-w-xl  ">
          <Input
            radius="lg"
            placeholder="Enter Your Email"
            endContent={
              <Button
                className="bg-orange text-white "
                endContent={<LeftIcon />}
              >
                Subscribe
              </Button>
            }
          />
        </div>
        <div className="max-w-2xl">
          <div className="flex justify-between items-end">
            <div className="flex gap-5 flex-col">
              <h1 className="font-bold text-4xl font-arlon ">
                pti<span className="text-orange font-merry">.</span>
              </h1>
              <p className="font-medium text-xs">
                Copyright©Tripp. All Right Reserved
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                isExternal
                as={Link}
                className="text-sm font-normal p-2 text-orange bg-[#FEDDBA]"
                variant="flat"
                isIconOnly
                radius="full"
              >
                <Icons.google />
              </Button>
              <Button
                isExternal
                as={Link}
                className="text-sm font-normal text-orange bg-[#FEDDBA]"
                variant="flat"
                isIconOnly
                radius="full"
              >
                <TwitterIcon />
              </Button>
              <Button
                isExternal
                as={Link}
                className="text-sm font-normal p-2 text-orange bg-[#FEDDBA]"
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
