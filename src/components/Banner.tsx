"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";

function Banner() {
  const { data} = useQuery("Banner", () =>
    axios.get("http://localhost:3000/banner").then((res) => res.data)
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
        {data?.map((item: any) => (
          <Link href={"/shope"} key={item?.id} >
            <Image
              src={item?.src}
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
