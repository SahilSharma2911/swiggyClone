import React, { useState, useRef, useEffect } from 'react';
import { SiSwiggy } from 'react-icons/si';
import { BiSolidNavigation, BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch, AiOutlineRight } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';


const Header2 = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, []);

    return (
        <>
            <div className='px-[50px] lg:px-[60px] h-[80px] items-center justify-between flex shadow-gray-200 shadow-lg sticky top-0 bg-white z-50 w-fixed '>
                <div className="flex overflow-x-scroll no-scrollbar">
                    <div className='flex'>
                        <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-[2px] cursor-pointer">
                            <span className='p-2'>Filter</span>
                        </button>

                        <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-[2px] cursor-pointer">
                            <span className='p-2'>Sort By</span>

                        </button>
                        <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-[2px] cursor-pointer">
                            <span className='p-2'>Fast Delivery</span>

                        </button>
                        <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-[2px] cursor-pointer">
                            <span className='p-2'>New on Swiggy</span>

                        </button>
                    </div>
                    <div className='flex'>
                        <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-[2px] cursor-pointer">
                            <span className='p-2'>Ratings 4.0+</span>

                        </button>
                        <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-[2px] cursor-pointer">
                            <span className='p-2'>Pure veg</span>

                        </button>
                        <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-[2px] cursor-pointer ">
                            <span className='p-2'>Offers</span>

                        </button>
                        <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-[2px] cursor-pointer">
                            <span className='p-2'>₹300 - ₹600</span>

                        </button>
                        <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-[2px] cursor-pointer">
                            <span className='p-2'>less than ₹300</span>

                        </button>
                    </div>


                </div>
                <div className="hidden lg:flex bg-gray-200 py-[12px] w-[20vw] rounded-xl cursor-pointer">
                    <input type="text" placeholder='Search for restaurant and food' className='w-[92%] ml-2 bg-gray-200 text-[15px] px-2 outline-none' />
                    <AiOutlineSearch className='w-[65px] h-[22px] text-gray-700' />
                </div>

            </div>
            <div className="lg:hidden sticky top-[80px] bg-white z-50 cursor-pointer">
                <div className="flex">
                    <BiSolidNavigation className='text-orange-600 w-[20px] h-[20px] my-[16px] ml-[20px] mr-2' />
                    <h2 className='font-semibold text-[16.5px] my-[16px]'>Setup your precise location</h2>
                    <button onClick={toggleDropdown}>
                        <BiChevronDown className='text-orange-600 w-[22px] h-[22px] my-[21px]' />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute bg-white p-4 border shadow-md mt-1 ml-[-5px] w-full rounded-[16px]" ref={dropdownRef}>
                            <span className="flex">
                                <BiSolidNavigation className='text-orange-600 w-[25px] h-[25px] mr-2 ' />
                                <input type="text" placeholder='Search for area streetname...' className=' outline-none w-full' />
                            </span>
                            <span className="">
                                <hr className='mt-3' />
                            </span>
                            <span className="flex mt-2">
                                <BiSolidNavigation className='text-orange-600 w-[22px] h-[22px] mr-2 ' />
                                <p className='text-orange-600 font-bold'>  Locate me using GPS</p>

                            </span>
                        </div>
                    )}
                </div>
                <div className='px-4 cursor-pointer'>
                    <div className="flex bg-gray-200 py-[12px] w-[100%] rounded-xl">
                        <input type="text" placeholder='Search for restaurant and food' className='w-[92%] ml-2 bg-gray-200 text-[15px] px-2 outline-none' />
                        <AiOutlineSearch className='w-[65px] h-[22px] text-gray-700' />
                    </div>
                </div>
            </div>
        </>


    )
}

export default Header2
