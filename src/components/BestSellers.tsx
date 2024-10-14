"use client";
/* eslint-disable */ 

import React, { useState } from "react";
import Container from "./Container";
import Heading from "./Heading";
import { useQuery } from "react-query";
import Product from "./Product";
import { ProductProps } from "@/types";
import axiosClient from "./GlobalApi";
interface Props {
  title?: string;
}
function BestSellers({ title  } : Props) {
  const { data } = useQuery("Bestsellres", () => {
   return axiosClient.get("/bestsellers").then((res) => res.data)
 },{
  refetchOnWindowFocus: true,   
    refetchInterval: 10000,        
 } );
  return (
    <Container className="w-full pb-20">
      <Heading heading={title} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {data?.map((item: ProductProps) => (
          <Product key={item?.id} product={item} bg="#ffffff" />
        ))}
      </div>
    </Container>
  );
}

export default BestSellers;
