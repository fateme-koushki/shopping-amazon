"use client";

import Price from "./Price";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";
import { ProductProps } from "@/types";
import  { Toaster } from "react-hot-toast";

interface Props {
  productInfo: ProductProps;
}

function ProductInfo( {productInfo} : Props) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-semibold ">{productInfo?.title}</h2>
      <div className="flex items-center gap-4 ">
        <p className="text-lg font-normal text-gray-500 line-through">
          <Price amount={productInfo?.rowprice} />
        </p>
        <Price amount={productInfo?.price} className="text-lg font-bold " />
        <p className="text-sm">
          you saved{" "}
          <Price
            className="bg-green-700 text-white px-2 rounded-md"
            amount={productInfo?.rowprice - productInfo?.price}
          />{" "}
          from this item{" "}
        </p>
      </div>
      <p className="text-sm tracking-wide text-gray-600">
        {productInfo?.discribtion}
      </p>
      <p className="text-sm text-gray-500">Be the first to leave a review.</p>
      <button
        onClick={() => {
          dispatch(addToCart(productInfo));
        }}
        className="w-full py-4 bg-primeColor
         hover:bg-black duration-300 text-white text-lg rounded-md "
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium">Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
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

export default ProductInfo;
