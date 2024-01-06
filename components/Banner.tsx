/* eslint-disable react/no-unescaped-entities */

import { Image } from "@nextui-org/image";

const Banner = () => {
  return (
    <div className=" mb-10 text-[#161616] flex flex-col gap-16 md:bg-orange-light rounded-2xl    bg-right  bg-no-repeat   md:bg-[url('/Banner.png')]       ">
      <div className="md:p-10  text-center md:text-left justify-center h-fit md:h-[334px]  flex flex-col gap-5">
        <h2
          className="text-3xl md:text-4xl  w-full md:max-w-[400px] font-medium
        md:text-white inline-block  bg-clip-text"
        >
          Deliver Food To Your Door Step
        </h2>
        <h2 className="text-sm md:text-base  md:text-light-50  md:max-w-[450px]">
          Authentic Food, Quick Service , Fast Delivery
        </h2>
      </div>
      <div className="md:hidden bg-[#FD9460] rounded-3xl">
        <Image
          height={330}
          radius="full"
          width={400}
          src={"/Banner.png"}
          className="w-full h-full -mt-16"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
