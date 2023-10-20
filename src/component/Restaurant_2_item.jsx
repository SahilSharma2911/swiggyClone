import React from 'react'
import { Resttt } from '../data';
import { MdStars } from 'react-icons/md'

const Restaurant_2_item = () => {
    return (
        <>
            <div className='px-2 lg:px-[200px] pt-6 mt-[20px]'>
                <h2 className='font-bold text-[23px]'>Restaurants with online food delivery in Bangalore</h2>
                <div className="mt-5">
                    <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-1">
                        <span className='p-2'>Filter</span>
                    </button>

                    <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-1">
                        <span className='p-2'>Sort By</span>

                    </button>
                    <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-1">
                        <span className='p-2'>Fast Delivery</span>

                    </button>
                    <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-1">
                        <span className='p-2'>New on Swiggy</span>

                    </button>
                    <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-1">
                        <span className='p-2'>Ratings 4.0+</span>

                    </button>
                    <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-1">
                        <span className='p-2'>Pure veg</span>

                    </button>
                    <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-1">
                        <span className='p-2'>Offers</span>

                    </button>
                    <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-1">
                        <span className='p-2'>₹300 - ₹600</span>

                    </button>
                    <button className="border border-gray-200 rounded-[20px] h-[35px] w-fit mx-1 my-2 truncate px-1">
                        <span className='p-2'>less than ₹300</span>

                    </button>
                </div>

                <div className="p-3 grid gap-3 grid-cols-3 md:grid-cols-4">
                    {Resttt.map((u) => (
                        <div key={u.id} className="p-3 transition hover:scale-95 duration-300 ">
                            <div className="w-full">
                                <img src={u.img} alt="" className="h-[150px] w-[1000px] rounded-2xl" />
                            </div>
                            <div className="px-5 mt-2">
                                <h1 className="font-semibold text-gray-800 text-[14px] sm:text-[18px]">{u.name}</h1>
                                <div className="flex items-center mt-[-2px]">
                                    <div>
                                        <MdStars className="text-green-700 h-[20px] w-[20px]" />
                                    </div>
                                    <div className="text-gray-800 text-[12px] sm:text-[14px]">{u.rating}</div>
                                </div>
                                <div className="text-gray-500 truncate text-[12px] sm:text-[14px]">{u.desc1}</div>
                                <div className="text-gray-500 truncate text-[12px] sm:text-[14px]">{u.desc2}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                        Show more
                    </button>
                </div>
            </div>
        </>
    )
}

export default Restaurant_2_item
