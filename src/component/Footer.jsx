import React from 'react'
import { SiSwiggy } from 'react-icons/si'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Footer = () => {
    return (
        <>
            <div className='mt-[100px] '>
                <div className="bg-gray-200 flex py-3 justify-center ">
                    <div className='hidden lg:flex'>
                        <p className='font-bold text-gray-800 text-[28px] mt-2 w-[450px] tracking-[-0.43px]'>For better experience,download the Swiggy app now</p>
                    </div>
                    <div className='flex'>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store"
                            alt="" className='h-[80px] w-[200px] p-2' />
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store"
                            alt="" className='h-[80px] w-[200px] p-2' />
                    </div>
                </div>
                <div className="bg-black flex flex-col lg:flex-row px-[12vw] sm:px-[25vw] md:px-[23vw] lg:px-[10vw] xl:px-[15vw] py-10 justify-between">
                    <div className='mb-5 lg:mb-0' >
                        <div className=' text-white mx-6'>
                            <div className='flex'>
                                <SiSwiggy className='h-[35px] w-[35px]' />
                                <h1 className='text-[20px] font-bold mx-2'>Swiggy</h1>
                            </div>
                            <div className='mt-2'>
                                <p className='lg:w-[200px] text-gray-300'>© 2023 Bundl Technologies Pvt. Ltd</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex'>
                        <div className="text-white mx-4 xl:mx-6">
                            <h3 className='text-[20px] font-bold mb-2'>Company</h3>
                            <p className='text-gray-300'>
                                <div className='my-2'>About</div>
                                <div className='my-2'> Careers</div>
                                <div className='my-2'>Team</div>
                                <div className='my-2'>Swiggy One</div>
                                <div className='my-2'>Swiggy Instamart</div>
                                <div className='my-2'>Swiggy Genie</div>


                            </p>
                        </div>
                        <div className="text-white mx-8 xl:mx-12">
                            <div>
                                <h3 className='text-[20px] font-bold mb-2'>Contact us</h3>
                                <p className='text-gray-300'>
                                    <div className="my-2">Help & Support</div>
                                    <div className="my-2">Partner with us</div>
                                    <div className="my-2">Ride with us</div>
                                </p>
                            </div>
                            <div className='mt-10'>
                                <h3 className='text-[20px] font-bold mb-2'>Legal</h3>
                                <p className='text-gray-300'>
                                    <div className="my-2">Terms & Conditions</div>
                                    <div className="my-2">Cookie Policy</div>
                                    <div className="my-2">Privacy Policy</div>
                                </p>
                            </div>
                        </div>
                        <div className="text-white mx-8 xl:mx-12">
                            <h3 className='text-[20px] font-bold mb-2'>We deliver to:</h3>
                            <p className='text-gray-300'>
                                <div className="my-2">Bangalore</div>
                                <div className="my-2">Gurgaon</div>
                                <div className="my-2">Hyderabad</div>
                                <div className="my-2">Delhi</div>
                                <div className="my-2">Mumbai</div>
                                <div className="my-2">Pune</div>
                            </p>
                            <button className='text-gray-300 border border-gray-500 w-[150px] h-[35px] rounded-lg flex justify-center items-center mt-5'>
                                <div>596 cities</div>
                                <div><IoIosArrowDown className='mt-1' /></div>


                            </button>
                        </div>

                    </div>
                    <div className='flex lg:hidden mt-5 text-[10px]'>
                        <div className='sm:mr-10'>
                            <div className="text-white mx-4 xl:mx-6">
                                <h3 className='text-[20px] font-bold mb-2'>Company</h3>
                                <p className='text-gray-300'>
                                    <div className='my-2'>About</div>
                                    <div className='my-2'> Careers</div>
                                    <div className='my-2'>Team</div>
                                    <div className='my-2'>Swiggy One</div>
                                    <div className='my-2'>Swiggy Instamart</div>
                                    <div className='my-2'>Swiggy Genie</div>


                                </p>
                            </div>
                            <div className='text-white mx-4 xl:mx-6'>
                                <h3 className='text-[20px] font-bold mb-2 text-white'>Legal</h3>
                                <p className='text-gray-300'>
                                    <div className="my-2">Terms & Conditions</div>
                                    <div className="my-2">Cookie Policy</div>
                                    <div className="my-2">Privacy Policy</div>
                                </p>
                            </div>
                        </div>
                        <div className='sm:ml-10'>

                            <div className='text-white mx-8 xl:mx-12'>
                                <h3 className='text-[20px] font-bold mb-2'>Contact us</h3>
                                <p className='text-gray-300'>
                                    <div className="my-2">Help & Support</div>
                                    <div className="my-2">Partner with us</div>
                                    <div className="my-2">Ride with us</div>
                                </p>
                            </div>
                            <div className="text-white mx-8 xl:mx-12">
                                <h3 className='text-[20px] font-bold mb-2'>We deliver to:</h3>
                                <p className='text-gray-300'>
                                    <div className="my-2">Bangalore</div>
                                    <div className="my-2">Gurgaon</div>
                                    <div className="my-2">Hyderabad</div>
                                    <div className="my-2">Delhi</div>
                                    <div className="my-2">Mumbai</div>
                                    <div className="my-2">Pune</div>
                                </p>
                                <button className='text-gray-300 border border-gray-500 w-[150px] h-[35px] rounded-lg flex justify-center items-center mt-5'>
                                    <div>596 cities</div>
                                    <div><IoIosArrowDown className='mt-1' /></div>


                                </button>
                            </div>


                        </div>




                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
