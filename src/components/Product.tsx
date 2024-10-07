"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";
import { ProductProps } from "@/types";
interface Props {
  product: ProductProps;
  bg?: string;
}
function Product({ product, bg }: Props) {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full relative  group border-[1px] border-gray-400 hover:shadow-lg duration-200
       shadow-gray-500 rounded-md overflow-hidden group"
    >
      <div className="w-full h-70 sm:h-50 flex items-center justify-center bg-white overflow-hidden">
        <div className={`relative ${bg}`}>
          <Link href={`/product/${product?.id}`}>
            <Image
              src={product?.image}
              height={500}
              width={500}
              alt="img-product"
              className="w-72 h-72 object-contain"
            />
          </Link>
          <div
            className=" flex bottom-0 items-center gap-5 justify-center text-center translate-y-[100%]
                group-hover:-translate-y-2 transition-transform duration-300"
          >
            <button
              onClick={() => {
                dispatch(addToCart(product));
                toast.success(`{${product?.title}... added to cart}`);
              }}
              className="bg-gray-800  text-gray-200 px-4 py-2 text-xs flex items-center 
                gap-1 hover:bg-gray-950 hover:text-white duration-200 rounded-full "
            >
              <span>
                <AiOutlineShopping />
              </span>
              Add to Bag
            </button>
            <Link
              href={`/product/${product?.id}`}
              className="bg-gray-800  text-gray-200 px-4 py-2 text-xs flex items-center 
                gap-1 hover:bg-gray-950 hover:text-white duration-200 rounded-full "
            >
              <span>
                <BsArrowsFullscreen />
              </span>
              Quick view
            </Link>
          </div>
          {product?.isnew && (
            <div className="absolute top-2 right-2 z-50 ">
              <p
                className="bg-primeColor px-4 py-1 text-white flex items-center justify-center
                       text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md"
              >
                New
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-80 flex flex-col py-6 gap-1 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-primeColor font-bold">
            {product?.title}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-xs text-[#767676] line-through">
              ${product?.rowprice}
            </p>
            <p className="font-semibold">${product?.price}</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-[#767676]">
            product by a{" "}
            <span className="font-semibold text-primeColor">
              {product?.brand}
            </span>
          </p>
          <div className="flex items-center gap-1">
            <MdOutlineStarPurple500 className="text-lg text-yellow-500" />
            <span className="font-medium text-sm">{product?.rating}</span>
          </div>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default Product;
