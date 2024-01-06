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
import { Skeleton } from "@nextui-org/skeleton";
import { useDisclosure } from "@nextui-org/modal";
import AddItem from "./modal/AddItem";

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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col  text-center justify-around ">
      <div className="flex mt-3 w-full justify-between items-center">
        <h1 className="text-base md:text-xl  font-medium  text-center md:text-left">
          {title}
        </h1>
        <div className=" md:my-0  gap-0 flex ">
          <AddItem />
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
      <div className="mt-2">
        {!isLoading ? (
          <SwiperReact
            ref={swiperRef as any}
            speed={500}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              300: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              350: {
                slidesPerView: 2.3,
                spaceBetween: 10,
              },
              767: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1023: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
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
        ) : (
          <div className="flex gap-5">{renderSkeletons()}</div>
        )}
      </div>
    </div>
  );
};

export default CardSlider;
const renderSkeletons = () => {
  return Array.from({ length: 5 }, (_, index) => (
    <div key={index} className="w-full">
      <Skeleton className="rounded-lg">
        <div className="h-[300px] rounded-lg bg-default-300"></div>
      </Skeleton>
    </div>
  ));
};
