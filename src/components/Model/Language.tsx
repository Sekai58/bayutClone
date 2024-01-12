import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { langClose } from "../../redux/features/languageModelSlice";

const LanguageModel: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-full  flex justify-center items-center`}
    >
      <div
        className={`absolute top-0 left-0 h-screen w-full z-[100] flex justify-center items-center bg-[#282828] bg-opacity-85`}
        onClick={() => {
          dispatch(langClose());
        }}
      ></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={` rounded-md border-[#494949] shadow-[#5e5e5e] shadow-md p-5 flex flex-col justify-between bg-white z-[999]`}
      >
        <p className="w-full flex justify-end text-2xl translate-y-3 cursor-pointer">
          <span
            className=" hover:bg-slate-300 rounded-md"
            onClick={() => {
              dispatch(langClose());
            }}
          >
            <IoClose />
          </span>
        </p>
        <div className="flex w-full justify-center pb-6">
          <p className="text-[20px] font-semibold">
            Select your prefered language
          </p>
        </div>

        <section className="flex gap-3">
          <button className="py-2 px-4 rounded-3xl border-[2px] border-[#bee7d3] bg-[#e9f7f0] text-[#28b16d] font-semibold">
            English
          </button>
          <button
            className="py-2 px-4 rounded-3xl border-[2px] border-[#bfc0c0] hover:bg-[#f1f1f1]"
            lang="zh-CN"
          >
            中文
          </button>
          <button
            className="py-2 px-4 rounded-3xl border-[2px] border-[#bfc0c0] hover:bg-[#f1f1f1]"
            lang="ar"
          >
            عربي
          </button>
          <button
            className="py-2 px-4 rounded-3xl border-[2px] border-[#bfc0c0] hover:bg-[#f1f1f1]"
            lang="ru"
          >
            Русский
          </button>
        </section>

        <div className="flex justify-center pt-5">
          <button
            className={`flex-1 px-4 py-1 mr-2  border-2 text-white border-[#006169] bg-[#006169] hover:bg-[#006079] rounded-md`}
            onClick={() => {
              dispatch(langClose());
            }}
          >
            Apply
          </button>
          <button
            className={`flex-1 px-4 py-1 mr-2  border-2 text-[#006169] border-[#006169] hover:bg-[#eeeeee] rounded-md`}
            onClick={() => {
              dispatch(langClose());
            }}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LanguageModel;
