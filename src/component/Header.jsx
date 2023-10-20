import React, { useState, useRef, useEffect } from "react";
import { SiSwiggy } from "react-icons/si";
import { BiSolidNavigation, BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineRight } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      e.target.tagName.toLowerCase() !== "input"
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <>
      <div className="px-3 lg:px-[178px] justify-between lg:justify-normal h-[80px] items-center flex shadow-gray-200 shadow-lg sticky top-0 bg-white z-50">
        <div className="flex py-[22px] cursor-pointer">
          <SiSwiggy className="text-orange-600 w-[35px] h-[35px]" />
          <h1 className="font-bold text-[26px] mx-2 font-sans my-[-2px]">
            Swiggy
          </h1>
          <div className="lg:bg-slate-300 h-[24px] w-[0.5px] ml-[8px] mt-2"></div>
        </div>
        <div className="hidden lg:flex cursor-pointer">
          <div className="cursor-pointer flex" onClick={toggleDropdown}>
            <div className="">
              <BiSolidNavigation className="text-orange-600 w-[20px] h-[20px] my-[22px] ml-[20px] mr-2" />
            </div>
            <div className="w-[220px]">
              <h2 className="font-semibold text-[16.5px] my-[20px]">
                Setup your precise location
              </h2>
            </div>
            <div className="">
              <BiChevronDown
                className={`text-orange-600 w-[22px] h-[22px] my-[22px] ml-[-15px] ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>
          </div>
          {isDropdownOpen && (
            <div
              className="absolute bg-white p-4 border shadow-md mt-1 ml-[-5px] w-[280px] rounded-[16px]"
              ref={dropdownRef}
            >
              <span className="flex">
                <BiSolidNavigation className="text-orange-600 w-[25px] h-[25px] mr-2 " />
                <input
                  type="text"
                  placeholder="Search for area streetname..."
                  className="outline-none w-full"
                />
              </span>
              <span className="">
                <hr className="mt-3" />
              </span>
              <span className="flex mt-2">
                <BiSolidNavigation className="text-orange-600 w-[22px] h-[22px] mr-2 " />
                <p className="text-orange-600 font-bold">
                  {" "}
                  Locate me using GPS
                </p>
              </span>
            </div>
          )}
        </div>
        <div className="hidden lg:flex ml-[5.5vw] bg-gray-200 py-[12px] w-[32.5vw] rounded-xl cursor-pointer">
          <input
            type="text"
            placeholder="Search for restaurant and food"
            className="w-[92%] ml-2 bg-gray-200 text-[15px] px-2 outline-none"
          />
          <AiOutlineSearch className="w-[65px] h-[22px] text-gray-700" />
        </div>
        <div>
          <FaUserCircle className="w-[50px] h-[50px] ml-[30px] cursor-pointer" />
        </div>
      </div>

      {/* Responsive Part */}
      <div className="lg:hidden sticky top-[80px] bg-white z-50">
        <div className="flex">
          <BiSolidNavigation className="text-orange-600 w-[20px] h-[20px] my-[16px] ml-[20px] mr-2" onClick={toggleDropdown}/>
          <h2 className="font-semibold text-[16.5px] my-[16px]" onClick={toggleDropdown}>
            Setup your precise location
          </h2>
          <button onClick={toggleDropdown}>
            <BiChevronDown className="text-orange-600 w-[22px] h-[22px] my-[16px]" />
          </button>
          {isDropdownOpen && (
            <div
              className="absolute bg-white p-4 border shadow-md mt-1 ml-[-5px] w-full rounded-[16px]"
              ref={dropdownRef}
            >
              <span className="flex">
                <BiSolidNavigation className="text-orange-600 w-[25px] h-[25px] mr-2 " />
                <input
                  type="text"
                  placeholder="Search for area streetname..."
                  className="outline-none w-full"
                />
              </span>
              <span className="">
                <hr className="mt-3" />
              </span>
              <span className="flex mt-2">
                <BiSolidNavigation className="text-orange-600 w-[22px] h-[22px] mr-2 " />
                <p className="text-orange-600 font-bold">
                  {" "}
                  Locate me using GPS
                </p>
              </span>
            </div>
          )}
        </div>
        <div className="px-4">
          <div className="flex bg-gray-200 py-[12px] w-[100%] rounded-xl">
            <input
              type="text"
              placeholder="Search for restaurant and food"
              className="w-[92%] ml-2 bg-gray-200 text-[15px] px-2 outline-none"
            />
            <AiOutlineSearch className="w-[65px] h-[22px] text-gray-700" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
