"use client";
/* eslint-disable */ 
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logoBlack.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import SearchComponent from "./Searchbar";
import { CgClose } from "react-icons/cg";

function Navbar() {
  const pathName = usePathname();
  const [userInfo, setUserInfo] = useState<any>([]);
  const [menuNav, setMenuNav] = useState(false);
    // for logout

  // get cookie
  useEffect(() => {
    const userInf = Cookies.get("tokenLogin");
    if (userInf) {
      const user = JSON.parse(userInf);
      setUserInfo(user);
    }
  }, []);
  //logout data
  const logout = () => {
    Cookies.remove("tokenLogin");
    location.reload();
  };
  const navbarList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shope",
      link: "/shope",
    },
    {
      title: "Cart",
      link: "/cart",
    },
  ];
  return (
    <div className="w-full  transition ease-in duration-300 delay-150 h-20 border-b-[1px] bg-white border-gray-400 sticky top-0 z-50 ">
      <nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-20 flex-1" />
        </Link>
        <div className="">
          <SearchComponent
            className={`"text-primeColor relative hidden w-full md:flex items-center justify-center md:w-[450px] lg:w-[600px]  h-10  gap-2 rounded-md border-[1px] border-black px-6 text-base "`}
          />
        </div>
        <div
          className={`bg-white z-40 md:inline-flex  md:items-center md:gap-2  md:static  md:w-auto  w-full min-w-[170px] md:min-w-0 left-0 flex justify-center absolute md:p-0 p-2     transition-all  ease duration-500 ${menuNav ? " top-20" : "top-[-490px] "
            } `}
        >
          {navbarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className={`flex hover:font-medium md:w-20 md:h-6 h-10  max-w-12
                    justify-center items-center px-8 md:px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] 
                    hover:text-gray-950 md:border-r-[2px] md:border-r-gray-500 duration-200 last:border-r-0 ${pathName === item?.link && "text-gray-950 underline  "
                }`}
            >
              {item.title}
            </Link>
          ))}
          {userInfo && userInfo?.name && (
            <button
              onClick={()=>logout()}
              className=" hover:font-medium md:w-20 md:h-6 h-10 justify-center items-center px-3  max-w-12
               text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-red-600
                md:border-r-[2px] border-r-gray-300 duration-200 last:border-r-0"
            >
              Logout
            </button>
          )}
        </div>
        <div
          className={`p-2 transition-all duration-500 bg-white  w-full left-0 z-40 absolute md:hidden ${menuNav ? " top-[128px]" : "top-[-490px] "
            }`}
        >
          <SearchComponent
            className={`text-primeColor relative mx-auto flex w-full  items-center justify-center   h-10  gap-2  outline-none  border-black border-b-[1px] px-6 text-base `}
          />
        </div>
        {menuNav ? (
          <CgClose
            className="inline-flex md:hidden 0 cursor-pointer w-8 h-6"
            onClick={() => setMenuNav(!menuNav)}
          />
        ) : (
          <HiMenuAlt2
            onClick={() => setMenuNav(!menuNav)}
            className="inline-flex md:hidden 0 cursor-pointer w-8 h-6"
          />
        )}
      </nav>
    </div>
  );
}

export default Navbar;
