import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const Slider2 = () => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  
  
    const [addClass, setaddClass] = React.useState('');
  
    React.useEffect(() => {
      setTimeout(() => {
        setaddClass('z-[99]');
      }, 1000);
    }, []);
  
    

  return (
    <>
   {/* <div className="flex items-center justify-between gap-6 mb-12">
   <div className='heading font-[Audiowide] text-[30px] sm:text-[45px] leading-[120%]'>OTHER CAUSES</div>
    <div className="flex items-center gap-3">
      <div ref={navigationPrevRef} className='flex items-center justify-center w-[45px] h-[45px] border-2 border-white rounded-full cursor-pointer'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.828 7.50005H16V9.50005H3.828L9.192 14.864L7.778 16.278L0 8.50005L7.778 0.722046L9.192 2.13605L3.828 7.50005Z" fill="white"/></svg></div>
      <div ref={navigationNextRef} className='flex items-center justify-center w-[45px] h-[45px] border-2 border-white rounded-full cursor-pointer'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 7.50005L6.808 2.13605L8.222 0.722046L16 8.50005L8.222 16.278L6.808 14.864L12.172 9.50005H0V7.50005H12.172Z" fill="white"/></svg></div>
    </div>
   </div> */}

  <div className="text-[23px] font-[600] text-center mb-7">You may like this post</div>

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            629: {
              slidesPerView: 2.5,
            },
            781: {
              slidesPerView: 3.5,
            },
            961: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          spaceBetween={25}
          rewind={true}
          pagination={{
            clickable: true,
            // el: 'swiper-pagination',
            type: 'bullets',
            bulletElement: 'span',
            bulletClass: 'timeline-icon',
            bulletActiveClass: 'timeline-icon-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          // onSwiper={(swiper) => {
          //   // Delay execution for the refs to be defined
          //   setTimeout(() => {
          //     // Override prevEl & nextEl now that refs are defined
          //     swiper.params.navigation.prevEl = navigationPrevRef.current
          //     swiper.params.navigation.nextEl = navigationNextRef.current

          //     // Re-init navigation
          //     swiper.navigation.destroy()
          //     swiper.navigation.init()
          //     swiper.navigation.update()
          //   })
          // }}
          modules={[Navigation, Pagination]}
          className='w-full'
        >
              <SwiperSlide
                className='transition rounded-lg block overflow-hidden relative'
              >
                <Link to="/" className='flex items-start flex-col'>
                  <img src="/images/image1.png" alt="cover" className="select-none mx-auto w-full" />
                    <div className='font-[500] text-[18px] mt-2.5 select-none'>Moving Tips for Beginner - Part 1</div>
                    <button className="rounded-full bg-[#EEFFF8] text-[#34AD82] text-[15px] px-3 py-[2px] font-[500] w-fit mt-2.5">Moving Tips</button>
                </Link>
              </SwiperSlide>


              <SwiperSlide
                className='transition rounded-lg block overflow-hidden relative'
              >
                <Link to="/" className='flex items-start flex-col'>
                  <img src="/images/image2.png" alt="cover" className="select-none mx-auto w-full" />
                    <div className='font-[500] text-[18px] mt-2.5 select-none'>Moving Tips for Beginner - Part 2</div>
                    <button className="rounded-full bg-[#EEFFF8] text-[#34AD82] text-[15px] px-3 py-[2px] font-[500] w-fit mt-2.5">Moving Tips</button>
                </Link>
              </SwiperSlide>


              <SwiperSlide
                className='transition rounded-lg block overflow-hidden relative'
              >
                <Link to="/" className='flex items-start flex-col'>
                  <img src="/images/image3.png" alt="cover" className="select-none mx-auto w-full" />
                    <div className='font-[500] text-[18px] mt-2.5 select-none'>Moving Tips for Beginner - Part 3</div>
                    <button className="rounded-full bg-[#EEFFF8] text-[#34AD82] text-[15px] px-3 py-[2px] font-[500] w-fit mt-2.5">Moving Tips</button>
                </Link>
              </SwiperSlide>


              <SwiperSlide
                className='transition rounded-lg block overflow-hidden relative'
              >
                <Link to="/" className='flex items-start flex-col'>
                  <img src="/images/image4.png" alt="cover" className="select-none mx-auto w-full" />
                    <div className='font-[500] text-[18px] mt-2.5 select-none'>Moving Tips for Beginner - Part 4</div>
                    <button className="rounded-full bg-[#EEFFF8] text-[#34AD82] text-[15px] px-3 py-[2px] font-[500] w-fit mt-2.5">Moving Tips</button>
                </Link>
              </SwiperSlide>
              
        </Swiper>
    </>
  )
}

export default Slider2