"use client";
import Banner from "@/components/Banner";
import CardSlider from "@/components/CardSlider";
import { useGetPopularQuery } from "@/redux/api/foodApi";

export default function Home() {
  const { data, isLoading } = useGetPopularQuery("");

  return (
    <div>
      <Banner />
      <CardSlider
        title="Popular"
        isLoading={isLoading}
        data={data?.filter((item: any) => item.IsPopular === true)}
      />
      <CardSlider
        title="Recommended"
        isLoading={isLoading}
        data={data?.filter((item: any) => item.IsRecommended === true)}
      />
    </div>
  );
}
