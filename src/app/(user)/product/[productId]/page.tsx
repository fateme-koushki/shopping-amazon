"use client";
import Onsale from "@/components/Onsale";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { useQuery } from "react-query";
import ProductInfo from "@/components/ProductInfo";
import Container from "@/components/Container";
import axiosClient from "@/components/GlobalApi";

function SingeProduct() {
  const { productId } = useParams();
  // for onsale
  const { data: product } = useQuery("productsId", () =>
   axiosClient.get(`/products/${productId}`)
      .then((res) => res.data)
  );
  //for product info
  const { data } = useQuery("allProducts", () =>
    axiosClient.get(`/products`).then((res) => res.data)
  );
  return (
    <Container className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4">
        <div>
          <Onsale products={data} />
        </div>
        <div className="h-full xl:col-span-2">
          <Image
            src={product?.image}
            alt="product image"
            className="w-full h-full object-contain"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
          <ProductInfo productInfo={product} />
        </div>
      </div>
    </Container>
  );
}

export default SingeProduct;
