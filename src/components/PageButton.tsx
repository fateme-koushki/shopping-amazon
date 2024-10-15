"use client";
/* eslint-disable */ 
import React, {  useEffect, useState } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import Link from "next/link";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { StateProps } from "@/types";
function PageButton() {
  const [userInfo, setUserInfo] = useState<any>([]);
  const router = useRouter();

   
  
  const logIn = () => {
    router.replace("/auth/login");
  };
  useEffect(() => {
    const userInf= Cookies.get("tokenLogin");
    if (userInf) {
      const user   = JSON.parse(userInf);
      setUserInfo(user);
    }
  }, []);

  const { productData } = useSelector((state: StateProps) => state.cart);
  return (
    <div className="fixed  top-60 right-2 z-20 flex flex-col gap-2 ">
      <button
        onClick={() => {
          !userInfo?.name  ? logIn() : toast.error("your are signed in");
        }}
        className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer "
      >
        <div className="flex justify-center items-center">
          {userInfo && userInfo?.picture ? (
            <Image
              src={userInfo?.picture}
              alt="img-profile"
              width={30}
              height={30}
              className="rounded-full -translate-x-12 group-hover:translate-x-3 transition-transform duration-200"
            />
          ) : (
            <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200 " />
          )}
          {userInfo && userInfo?.picture ? (
            <Image
              src={userInfo?.picture}
              alt="img-profile"
              width={30}
              height={30}
              className="rounded-full -translate-x-4 group-hover:translate-x-12 transition-transform duration-200"
            />
          ) : (
            <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          )}
        </div>
        {
          userInfo?.name ?  <p className="text-xs font-semibold">{userInfo?.name?.slice(0,6)}</p> : <p className="text-xs font-semibold">Profile</p>
        }
       
      </button>
      <Link
        href={"/cart"}
        className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1
       text-[#33475b] justify-center items-center shadow-testShadow
        overflow-x-hidden group cursor-pointer relative "
      >
        <div className="flex justify-center items-center">
          <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200 " />
          <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200 " />
        </div>
        <p className="text-xs font-semibold">Buy Now</p>
        <p
          className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4
         rounded-full flex items-center justify-center font-semibold"
        >
          {productData ? productData?.length : 0}
        </p>
      </Link>
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

export default PageButton;
