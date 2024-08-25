import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1} className="card relative overflow-hidden flex flex-col flex-shrink-0 w-[14vw] h-[30vh] rounded-[30px] bg-[#1119] cursor-pointer">
        <div className="icon w-[100%] h-[7vh] text-white text-xl flex items-end px-4">
          <FaRegFileAlt />
        </div>
        <div className="data w-[100%] h-[13vh] overflow-hidden text-white text-[0.85rem] px-4 py-3">
          {data.desc}
        </div>
        <div className="mb w-[100%] h-[5vh] flex">
          <div className="left w-1/2 h-full tracking-wider text-white text-[0.8rem] flex items-center px-5">
            {data.filesize}
          </div>
          <div className="right w-1/2 h-full px-5 flex justify-end items-center">
            <div className="box h-[2.5vw] w-[2.5vw] flex justify-center items-center rounded-full bg-zinc-600 ">
              {data.close ? <RxCross1 /> : <HiDownload />}
            </div>
          </div>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`last h-[4.5vh] w-full absolute bottom-0 left-0 flex justify-center items-center text-[0.8rem] ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            {data.tag.tagTitle}
          </div>
        ) : null}
      </motion.div>
    </>
  );
};

export default Card;
