"use client";
import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import { useQuery } from "react-query";
import axios from "axios";
import Product from "./Product";
import { ProductProps } from "@/types";

function BestSellers({ title }: any) {
  const { data } = useQuery("Bestsellres", () =>
    axios.get("http://localhost:3000/bestsellers").then((res) => res.data)
  );
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
