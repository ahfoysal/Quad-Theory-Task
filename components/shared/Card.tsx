import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { SwiperSlide } from "swiper/react";

const CardItem = ({ item }: { item: any }) => {
  return (
    <Card
      shadow="sm"
      isPressable
      className="bg-transparent shadow-none border-none"
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="bg-transparent overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          isZoomed
          alt={item.Name}
          className="w-full object-cover h-[300px]"
          src={item.ImageUrl}
        />
      </CardBody>
      <CardFooter className="text-small justify-center">
        <b>{item.Name}</b>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
