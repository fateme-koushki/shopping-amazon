"use client";
/* eslint-disable */
import React from "react";
import Container from "./Container";
import Slider from "react-slick";
import { useQuery } from "react-query";
import axios from "axios";
import Product from "./Product";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { ProductProps } from "@/types";


function NewArrival() {
  const { data } = useQuery("allProducts", () =>
    axios.get("http://localhost:3000/products").then((res) => res.data)
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Container className="-mt-60">
      <div className="">
        <Slider {...settings}>
          {data &&
            data?.map((item: ProductProps) => (
              <div key={item?.id} className="px-2">
                <Product product={item} />
              </div>
            ))}
        </Slider>
      </div>
    </Container>
  );
}

export default NewArrival;
