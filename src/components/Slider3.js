import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Slider3 = () => {


  return (
    <>
    <Swiper 
     autoplay={{
      delay: 1500,
     }}
     modules={[Autoplay]}
     spaceBetween={50}
     className="w-full h-full"
     >
        <SwiperSlide>
            <div className="flex items-centre justify-center">
            <img src="/images/partner1.svg" alt="partner logo" className="w-[150px]" />
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="flex items-centre justify-center">
            <img src="/images/partner2.svg" alt="partner logo" className="w-[150px]" />
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="flex items-centre justify-center">
            <img src="/images/partner3.svg" alt="partner logo" className="w-[150px]" />
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="flex items-centre justify-center">
            <img src="/images/partner4.svg" alt="partner logo" className="w-[150px]" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="flex items-centre justify-center">
            <img src="/images/partner5.svg" alt="partner logo" className="w-[150px]" />
            </div>
        </SwiperSlide>


     </Swiper>
    </>
  )
}

export default Slider3