"use client";
import { useReducer, useRef } from "react";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { type Swiper } from "swiper";
import ChevronLeft from "@/asstets/ChevronLeftIcon";
import ChevronRight from "@/asstets/ChevronRightIcon";
import { Button } from "@nextui-org/button";
import Loading from "@/app/loading";
import CardItem from "./shared/Card";

const CardSlider = ({
  isLoading,
  data,
  title,
}: {
  isLoading: any;
  data: any;
  title: string;
}) => {
  const swiperRef = useRef<Swiper | null>(null);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
    forceUpdate();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
    forceUpdate();
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col  text-center justify-around ">
      <div className="flex w-full justify-between">
        <h1 className="text-xl  font-medium  text-center md:text-left">
          {title}
        </h1>
        <div className="mt-5 md:my-0  gap-3 flex ">
          <Button
            variant="flat"
            isIconOnly
            className={`cursor-pointer bg-transparent rounded-full p-1.5 swiper-button-prev
            ${swiperRef.current?.isBeginning && "text-[#808080]"}
            `}
            onClick={handlePrev}
            isDisabled={swiperRef.current?.isBeginning}
          >
            <ChevronLeft />
          </Button>
          <Button
            isIconOnly
            variant="flat"
            className={`cursor-pointer bg-transparent  rounded-full p-1.5 swiper-button-next ${
              swiperRef.current?.isEnd && "text-[#808080]"
            }`}
            onClick={handleNext}
            disabled={swiperRef.current?.isEnd}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="mt-5">
        <SwiperReact
          ref={swiperRef as any}
          slidesPerView={5}
          speed={500}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data?.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <CardItem item={item} />
            </SwiperSlide>
          ))}
        </SwiperReact>
      </div>
    </div>
  );
};

export default CardSlider;
