/* eslint-disable react/no-unescaped-entities */

const Banner = () => {
  return (
    <div className=" mb-10 text-[#161616]  bg-orange-light rounded-2xl    bg-right  bg-no-repeat   bg-[url('/Banner.png')]       ">
      <div className="md:p-10 p-4 text-center md:text-left justify-center h-fit md:h-[334px]  flex flex-col gap-5">
        <h2
          className="text-3xl md:text-4xl  w-full md:max-w-[400px] font-medium
        bg-gradient-to-r from-white via-white to-white inline-block text-transparent bg-clip-text"
        >
          Deliver Food To Your Door Step
        </h2>
        <h2 className="text-base text-light-50  max-w-[450px]">
          Authentic Food, Quick Service , Fast Delivery
        </h2>
      </div>
    </div>
  );
};

export default Banner;
