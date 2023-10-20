import React, { useRef } from "react";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs"
import {AiFillRightCircle} from "react-icons/ai"

const Food_item = () => {
  const scrollContainerRef = useRef(null);
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 500; 
      const currentPosition = container.scrollLeft;
      const targetPosition = currentPosition + scrollAmount;
      container.scrollTo({
        left: targetPosition,
        behavior: 'smooth',
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
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="px-2 lg:px-[200px] pt-6">
        <div className="flex justify-between" >
          <h2 className="font-bold text-[23px] px-2">What's on your mind ?</h2>
          <div className="flex mr-[20px]">
            <button className="px-2 text-neutral-400 " onClick={handleScrollLeft}> <BsFillArrowLeftCircleFill /></button>
            <button className="px-2 text-neutral-400" onClick={handleScrollRight}> <BsFillArrowRightCircleFill/></button>
          </div>
        </div>
        <div
          className="flex overflow-x-scroll no-scrollbar mt-2"
          ref={scrollContainerRef}
        >
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/rng/md/carousel/production/fb304a49f0f1632a219e004e9545774e"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4"
            alt=""
            className="w-w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4"
            alt=""
            className="w-w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza"
            alt="/"
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Pancake"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli"
            alt=""
            className="w-[150px]sm:w-[185px] h-[150px] sm:h-[185px] px-2"
          />
        </div>
        <hr className="mt-[50px]" />
      </div>
    </>
  );
};

export default Food_item;
