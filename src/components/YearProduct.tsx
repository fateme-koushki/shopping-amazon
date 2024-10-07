import React from "react";
import Container from "./Container";
import Image from "next/image";
import productImg from "@/assets/productOfTheYear.webp";
import Link from "next/link";
function YearProduct() {
  return (
    <div className="w-full hidden md:inline-block bg-[#f3f3f3]">
      <Container className="md:bg-transparent relative py-0 mb-10">
        <Image
          src={productImg}
          alt="product"
          className="w-full h-full object-cover hidden md:inline-block"
        />
        <div
          className="w-full md:w-2/3 xl:w-1/2 h-80 px-4 md:px-0 absolute top-0 right-0 flex flex-col items-start 
        gap-6 justify-center "
        >
          <h1 className="text-3xl text-primeColor font-semibold">
            product of the year
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            eveniet magnam quos porro omnis, ipsam ut mollitia quaerat
            cupiditate ratione?
          </p>
          <Link
            href={"/shope"}
            className="bg-primeColor text-white font-bold flex items-center justify-center rounded-md
             text-lg w-[185px] h-[50px] hover:bg-black duration-300"
          >
            shop now
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default YearProduct;
