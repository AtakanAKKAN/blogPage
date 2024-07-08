/* eslint-disable @next/next/no-img-element */
import React from "react";
import "animate.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { PiEye } from "react-icons/pi";
import { PiChat } from "react-icons/pi";
import { PiHeart } from "react-icons/pi";

const Blogs = () => {
  return (
    <div className="lg:flex gap-4 max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 bg-darkGrey p-4 rounded-lg">
      <div className="shadow p-4 flex flex-col gap-4 bg-lightGrey rounded-lg ">
        <img
          alt=""
          src="https://picsum.photos/300/200"
          width={300}
          height={200}
          className="rounded"
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              alt=""
              src="https://picsum.photos/400"
              className="rounded-full size-12"
            />
            <div className="flex gap-1 flex-col">
              <span className="text-lg font-bold text-darkGrey">userName</span>
              <span className="flex items-center text-sm">
                Date <GoDotFill size={10} className="mx-1" /> 1 Min
              </span>
            </div>
          </div>

          <BsThreeDotsVertical className="text-darkOrange" size={25} />
        </div>

        <span className="w-[250px] line-clamp-4 text-solidWhite">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          laborum rem provident eos culpa fuga cum consectetur optio nulla
          dolorum.
        </span>

        <hr className="my-2 w-full h-1 bg-lightGrey" />

        <div className="flex justify-between items-center text-xl text-solidWhite">
          <div className="flex gap-2">
            <span className="flex gap-1 items-center">
              <PiEye /> <span className="text-sm">10</span>
            </span>
            <span className="flex gap-1 items-center">
              <PiChat /> <span className="text-sm">15</span>
            </span>
          </div>

          <span className="flex gap-1 items-center">
            <span className="text-sm">4</span>{" "}
            <PiHeart className="hover:text-red-600 hover:scale-150 transition-all duration-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
