"use client";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GrGoogle } from "react-icons/gr";
import Cookies from "js-cookie";
function AuthButton() {

 const [isButtonDisabled, setButtonDisabled] = useState(false);  
 const handleClick = () => {  
  setButtonDisabled(true);  

  setTimeout(() => {  
      setButtonDisabled(false);  
  }, 3000);  
};  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name : "",
      email: "",
      password: "",
    },
  });
  // User information by form...
  const handlerSubmit = async (data) => {
    await axios.post("http://localhost:3000/users", { data: data  }).then((res)=>{
      Cookies.set("tokenLogin", JSON.stringify(res.data.data))
      window.location.href = "/";
    }  );

  };
  // User information by Google...
  const login = useGoogleLogin({
    onSuccess: async (tokenRespone) => {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo`,
        {
          headers: {
            Authorization: `Bearer${tokenRespone.access_token}`,
          },
          
        }
      );
      //save token the cookie
      Cookies.set("tokenLogin", JSON.stringify(res.data));
      window.location.href = "/";
    },
  });
  return (
    <>
      <div
        data-dialog-backdrop="sign-in-modal"
        data-dialog-backdrop-close="true"
        className="  grid h-screen w-screen mt-6 place-items-centerbackdrop-blur-sm transition-opacity duration-300"
      >
        <div
          data-dialog="sign-in-modal"
          className="relative mx-auto w-full max-w-[24rem]  rounded-lg overflow-hidden shadow-sm"
        >
          <form onSubmit={handleSubmit(handlerSubmit)}>
            <div className="relative flex flex-col border-[1px] border-gray-400 rounded-lg bg-white">
              <div className="flex flex-col gap-4 p-6">
              <div className="w-full max-w-sm min-w-[200px]">
                  <label className="block mb-2 text-sm text-slate-600">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Name"
                    {...register("name", {
                      required: "وارد کردن نام الزامی است",
                      minLength: {
                        value: 4,
                        message: "نام باید حداقل 4 کارکتر باشد",
                      },
                      maxLength: {
                        value: 10,
                        message: "نام باید حداکثر 10 کارکتر باشد",
                      }
                     
                    })}
                  />
                  <span className="text-sm text-red-500">
                    {errors.name && errors.name.message}
                  </span>
                </div>
                <div className="w-full max-w-sm min-w-[200px]">
                  <label className="block mb-2 text-sm text-slate-600">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "وارد کردن ایمیل الزامی است",
                      minLength: {
                        value: 13,
                        message: "ایمیل باید حداقل 10 کارکتر باشد",
                      },
                      maxLength: {
                        value: 30,
                        message: "ایمیل باید حداکثر 30 کارکتر باشد",
                      },
                      pattern: {
                        value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                        message: "ایمیل وارد شده معتبر نمی باشد",
                      },
                    })}
                  />
                  <span className="text-sm text-red-500">
                    {errors.email && errors.email.message}
                  </span>
                </div>

                <div className="w-full max-w-sm min-w-[200px]">
                  <label className="block mb-2 text-sm text-slate-600">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Your Password"
                    {...register("password", {
                      required: "وارد کردن پسوورد الزامی است ",
                      minLength: {
                        value: 5,
                        message: "پسوورد باید حداقل 5 کارکتر باشد",
                      },
                      maxLength: {
                        value: 12,
                        message: "پسوورد باید حداکثر 12 کارکتر باشد",
                      },
                    })}
                  />
                  <span className="text-sm text-red-500">
                    {errors.password && errors.password.message}
                  </span>
                </div>
              </div>
              <div onClick={handleClick}  className={`p-6 pt-0 flex flex-col justify-center items-center gap-2 ${isButtonDisabled ? "disabled" : ""} ` }>
                <button 
                  className="w-full rounded-md bg-primeColor py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:bg-black  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
          <div className="flex items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">Or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <button
            className="w-full  flex justify-center items-center mt-2 rounded-md bg-primeColor py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:bg-black  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={login}
          >
            login with google{" "}
            <GrGoogle className="ml-1" color="white" width={20} height={20} />{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default AuthButton;
