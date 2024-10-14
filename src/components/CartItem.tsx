"use client";
import { ProductProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImCross } from "react-icons/im";
import Price from "./Price";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { decreaseQty, deleteProduct, increaseQty } from "@/app/redux/cartSlice";
interface Props {
  item: ProductProps;
}
function CartItem({ item }: Props) {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-5 mb-4  border py-2">
      <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => {
            dispatch(deleteProduct(item?.id));
            toast.success(`${item?.title}... deleted to cart`);
          }}
          className="text-primeColor hover:text-red-500 cursor-pointer duration-300 "
        />
        <Link href={`/product/${item?.id}`}>
          <Image
            src={item?.image}
            alt="img product"
            
            width={128}
            height={128}
            className="w-32 h-32 object-cover"
          />
        </Link>
        <h1 className="font-semibold">{item?.title}</h1>
      </div>
      <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0 gap-6">
        <p className="flex items-center w-1/3 text-lg font-semibold">
          {" "}
          <Price amount={item?.price} />{" "}
        </p>
        <div className="flex w-1/3 items-center gap-6 text-lg">
          <span
            onClick={() => {
              dispatch(decreaseQty({ id: item?.id }));
              toast.success("Product reduced successully");
            }}
            className="w-6 h-6 bg-gray-100 text-2xl border-gray-300 hover:border-gray-500
                 flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] "
          >
            -
          </span>
          <p>{item?.qty}</p>
          <span
            onClick={() => {
              dispatch(increaseQty({ id: item?.id }));
              toast.success("Product added successully");
            }}
            className="w-6 h-6 bg-gray-100 text-2xl border-gray-300 hover:border-gray-500
                 flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] "
          >
            +
          </span>
        </div>
        <div className="w-1/3 flex items-center font-bold text-lg">
          <p>${item.qty * item.price}</p>
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

export default CartItem;
