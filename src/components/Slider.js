import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {

    const pagination = {
        clickable: true,
        
      };

  return (
    <>
    <Swiper 
     autoplay={{
      delay: 2500,
     }}
     pagination={pagination}
     modules={[Pagination, Autoplay]}
     spaceBetween={50}
     className="w-full h-full"
     >
        <SwiperSlide>
            <div className="flex items-start sm:items-center sm:justify-between flex-col-reverse sm:flex-row gap-5 mb-10 lg5:mb-7">
            <div className="w-full sm:max-w-[700px]">
              <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6986 2.34555L15.1972 2.65716e-06C5.77986 6.03141 1.3655 12.9005 0.188334 20.6073C-0.694539 26.9738 1.51264 32 7.10417 32C11.0771 32 14.9029 28.9843 15.7857 23.9581C16.5215 18.0942 13.5786 14.5759 9.89993 13.7382C11.3714 8.04189 17.5515 2.34555 17.6986 2.34555ZM30.3531 13.4032C31.9717 7.87436 37.8576 2.34555 38.0047 2.34555L35.5032 6.20758e-06C26.0859 6.03142 21.6716 12.9005 20.4944 20.6073C19.6115 26.9738 21.8187 32 27.4102 32C31.3832 32 35.2089 28.9843 35.9447 23.9581C36.8275 18.0942 34.0318 14.2408 30.3531 13.4032Z" fill="#ABB2C4"/></svg>
              <div className="text-[22px] sm:text-[24px] font-[600] mt-5">“I couldn't be happier with the service I received. From the initial consultation to the final move, everything was handled with care and professionalism.”</div>
              <div className="text-[19px] font-[700] mt-5">— Jackson F. Thiago</div>
              <div className="text-[17px] opacity-50 mt-[2px]">Ordered Residental Moving service.</div>
            </div>

            <img src="/images/slider1.png" alt="slider1" className="w-full lg4:w-[400px] mx-auto sm:mx-0 transition hover:scale-95" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="flex items-start sm:items-center sm:justify-between flex-col-reverse sm:flex-row gap-5 mb-10 lg5:mb-7">
            <div className="w-full sm:max-w-[700px]">
              <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6986 2.34555L15.1972 2.65716e-06C5.77986 6.03141 1.3655 12.9005 0.188334 20.6073C-0.694539 26.9738 1.51264 32 7.10417 32C11.0771 32 14.9029 28.9843 15.7857 23.9581C16.5215 18.0942 13.5786 14.5759 9.89993 13.7382C11.3714 8.04189 17.5515 2.34555 17.6986 2.34555ZM30.3531 13.4032C31.9717 7.87436 37.8576 2.34555 38.0047 2.34555L35.5032 6.20758e-06C26.0859 6.03142 21.6716 12.9005 20.4944 20.6073C19.6115 26.9738 21.8187 32 27.4102 32C31.3832 32 35.2089 28.9843 35.9447 23.9581C36.8275 18.0942 34.0318 14.2408 30.3531 13.4032Z" fill="#ABB2C4"/></svg>
              <div className="text-[22px] sm:text-[24px] font-[600] mt-5">“I couldn't be happier with the service I received. From the initial consultation to the final move, everything was handled with care and professionalism.”</div>
              <div className="text-[19px] font-[700] mt-5">— Jackson F. Thiago</div>
              <div className="text-[17px] opacity-50 mt-[2px]">Ordered Residental Moving service.</div>
            </div>

            <img src="/images/slider1.png" alt="slider1" className="w-full lg4:w-[400px] mx-auto sm:mx-0 transition hover:scale-95" />
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="flex items-start sm:items-center sm:justify-between flex-col-reverse sm:flex-row gap-5 mb-10 lg5:mb-7">
            <div className="w-full sm:max-w-[700px]">
              <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6986 2.34555L15.1972 2.65716e-06C5.77986 6.03141 1.3655 12.9005 0.188334 20.6073C-0.694539 26.9738 1.51264 32 7.10417 32C11.0771 32 14.9029 28.9843 15.7857 23.9581C16.5215 18.0942 13.5786 14.5759 9.89993 13.7382C11.3714 8.04189 17.5515 2.34555 17.6986 2.34555ZM30.3531 13.4032C31.9717 7.87436 37.8576 2.34555 38.0047 2.34555L35.5032 6.20758e-06C26.0859 6.03142 21.6716 12.9005 20.4944 20.6073C19.6115 26.9738 21.8187 32 27.4102 32C31.3832 32 35.2089 28.9843 35.9447 23.9581C36.8275 18.0942 34.0318 14.2408 30.3531 13.4032Z" fill="#ABB2C4"/></svg>
              <div className="text-[22px] sm:text-[24px] font-[600] mt-5">“I couldn't be happier with the service I received. From the initial consultation to the final move, everything was handled with care and professionalism.”</div>
              <div className="text-[19px] font-[700] mt-5">— Jackson F. Thiago</div>
              <div className="text-[17px] opacity-50 mt-[2px]">Ordered Residental Moving service.</div>
            </div>

            <img src="/images/slider1.png" alt="slider1" className="w-full lg4:w-[400px] mx-auto sm:mx-0 transition hover:scale-95" />
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="flex items-start sm:items-center sm:justify-between flex-col-reverse sm:flex-row gap-5 mb-10 lg5:mb-7">
            <div className="w-full sm:max-w-[700px]">
              <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6986 2.34555L15.1972 2.65716e-06C5.77986 6.03141 1.3655 12.9005 0.188334 20.6073C-0.694539 26.9738 1.51264 32 7.10417 32C11.0771 32 14.9029 28.9843 15.7857 23.9581C16.5215 18.0942 13.5786 14.5759 9.89993 13.7382C11.3714 8.04189 17.5515 2.34555 17.6986 2.34555ZM30.3531 13.4032C31.9717 7.87436 37.8576 2.34555 38.0047 2.34555L35.5032 6.20758e-06C26.0859 6.03142 21.6716 12.9005 20.4944 20.6073C19.6115 26.9738 21.8187 32 27.4102 32C31.3832 32 35.2089 28.9843 35.9447 23.9581C36.8275 18.0942 34.0318 14.2408 30.3531 13.4032Z" fill="#ABB2C4"/></svg>
              <div className="text-[22px] sm:text-[24px] font-[600] mt-5">“I couldn't be happier with the service I received. From the initial consultation to the final move, everything was handled with care and professionalism.”</div>
              <div className="text-[19px] font-[700] mt-5">— Jackson F. Thiago</div>
              <div className="text-[17px] opacity-50 mt-[2px]">Ordered Residental Moving service.</div>
            </div>

            <img src="/images/slider1.png" alt="slider1" className="w-full lg4:w-[400px] mx-auto sm:mx-0 transition hover:scale-95" />
            </div>
        </SwiperSlide>

     </Swiper>
    </>
  )
}

export default Slider