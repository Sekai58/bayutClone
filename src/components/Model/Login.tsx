import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loginClose } from "../../redux/features/loginModelSlice";
import { UserLoginSchema } from "../../validation/user.types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IoClose } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const LoginModel: React.FC = () => {
  const dispatch = useDispatch();
  type LoginParams = z.infer<typeof UserLoginSchema>;
  const {
    register,
    // handleSubmit,
    // reset,
    // setError,
    formState: { errors },
  } = useForm<LoginParams>();
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-full flex justify-center items-center`}
    >
      <div
        className={`absolute top-0 left-0 h-screen w-full z-[100] flex justify-center items-center bg-[#282828] bg-opacity-70`}
        onClick={() => {
          dispatch(loginClose());
        }}
      ></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={` rounded-md border-[#494949] shadow-[#5e5e5e] shadow-md bg-white z-[999] w-[22rem]`}
      >
        <div
          className={`w-full sm:rounded-r-md bg-transparent h-full flex justify-center items-center relative`}
        >
          <div className="w-full p-4">
            <p className="w-full flex justify-end text-[1.8rem]  cursor-pointer mb-1">
              <span
                className=" hover:bg-slate-300 rounded-md"
                onClick={() => {
                  dispatch(loginClose());
                }}
              >
                <IoClose />
              </span>
            </p>
            <button
              type="submit"
              className="w-full px-2 py-[10px] border border-[#006169]  text-[#006169] rounded-md text-center mb-4 font-semibold relative flex justify-center items-center gap-2"
            >
              <span className="text-2xl text-[#17A9FD]">
                <FaFacebook />{" "}
              </span>
              Continue with Facebook
            </button>

            <button
              type="submit"
              className="w-full px-2 py-[10px] border border-[#006169]  text-[#006169] rounded-md text-center mb-4 font-semibold flex justify-center items-center gap-2"
            >
              <span className="text-2xl">
                <FcGoogle />
              </span>
              Continue with Google
            </button>
            <form className="flex flex-col gap-4 w-full h-full bg-transparent ">
              <div>
                <input
                  type="text"
                  placeholder="Email*"
                  {...register("email")}
                  className={`mb-2 py-2 px-2 border border-[#888787]  focus:border-[#006169] focus:outline-none w-full rounded-md`}
                />
                {errors.email && (
                  <p className="text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password*"
                  {...register("password")}
                  className={`mb-3 py-2 px-2  border border-[#888787]  focus:border-[#006169] focus:outline-none w-full rounded-md`}
                />
                {errors.password && (
                  <p className="text-red-400">{errors.password.message}</p>
                )}
              </div>

              <div className="flex justify-between">
                <div>
                  <input type="checkbox" /> Remember Me
                </div>
                <div>
                  <a
                    href="#"
                    className={` flex-1 hover:scale-105 text-[#006169] font-semibold`}
                  >
                    Forget Password?
                  </a>
                </div>
              </div>

              <div className="flex justify-center w-full">
                <button
                  type="submit"
                  className="w-full px-2 py-[10px] border-2 border-[#ebeaea] bg-[#ebeaea] text-[#757575] rounded-md text-center"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="h-full text-center ">
              <p className="py-7">
                ARE YOU NEW TO BAYUT ?
                <button
                  type="submit"
                  className="w-full px-2 py-[10px] mt-4 border border-[#006169]  text-[#006169] rounded-md text-center font-semibold"
                >
                  Sign Up{" "}
                </button>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginModel;
