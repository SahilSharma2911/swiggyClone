import React, { useRef } from "react";

import { Resttt } from "../data";
import { MdStars } from "react-icons/md";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Restaurant_1_item = () => {
  const scrollContainerRef = useRef(null);
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 500;
      const currentPosition = container.scrollLeft;
      const targetPosition = currentPosition + scrollAmount;
      container.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 500;
      const currentPosition = container.scrollLeft;
      const targetPosition = currentPosition - scrollAmount;
      container.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full px-2 lg:px-[200px] pt-10">
      <div className="flex justify-between">
        <h2 className="font-bold text-[23px] px-2">
          Top Restaurant Chains in Bangalore
        </h2>
        <div className="flex mr-[20px]">
            <button className="px-2 text-neutral-400 " onClick={handleScrollLeft}> <BsFillArrowLeftCircleFill/></button>
            <button className="px-2 text-neutral-400" onClick={handleScrollRight}> <BsFillArrowRightCircleFill/></button>
          </div>
      </div>
      <div className="p-3 flex overflow-x-scroll no-scrollbar mt-2 " ref={scrollContainerRef}>
        {Resttt.map((u) => (
          <div className="w-full p-3 transition hover:scale-95 duration-300 ">
            <div className="w-[320px]">
              <img
                src={u.img}
                alt=""
                className="h-[200px] w-[280px] rounded-2xl"
              />
            </div>
            <div className="px-5 mt-2">
              <h1 className="font-semibold text-gray-800 text-[18px]">
                {u.name}
              </h1>
              <div className="flex items-center mt-[-2px]">
                <div>
                  <MdStars className="text-green-700 h-[20px] w-[20px]" />
                </div>
                <div className="text-gray-800">{u.rating}</div>
              </div>
              <div className="text-gray-500">{u.desc1}</div>
              <div className="text-gray-500">{u.desc2}</div>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-[50px]" />
    </div>
  );
};

export default Restaurant_1_item;
