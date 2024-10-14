"use client";
import { ProductProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import axiosClient from "./GlobalApi";

function Banner() {
  const { data} = useQuery("Banner", () =>
    axiosClient.get("/banner").then((res) => res.data)
  );
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  return (
    <div className="relative">
      <Slider {...settings}>
        {data?.map((item : ProductProps) => (
          <Link href={"/shope"} key={item?.id} >
            <Image
              src={item?.image}
              alt="img-banner"
              width={2000}
              height={2000}
              className=" w-full max-h-[650px] object-cover"
            />
            <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20" />
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
