import React from 'react'



const Banner = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-violet-200 h-[300px] rounded-b-3xl mt-[1px] flex justify-normal sm:justify-between ">
        <div className="mt-[65px] h-[145px] max-w-[390px] ml-[60px] md:ml-[100px] lg:ml-[180px] ">
          <h1 className='font-bold text-gray-700 text-[48px] leading-[48px] tracking-[-0.43px]'>Order Food Online in Bangalore</h1>
          <svg width="100%" height="100%" viewBox="0 0 78 6" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[130px] h-[35px]'>
            <path d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939" stroke="#F15700" stroke-width="1.5"></path>
          </svg>
        </div>
        <div className=" hidden sm:flex">
          <img className='w-[500px] h-[300px] mr-[210px]' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header" width="501" height="300" alt="food"/>
        </div>
      </div>
      
      
    </>
  )
}

export default Banner
