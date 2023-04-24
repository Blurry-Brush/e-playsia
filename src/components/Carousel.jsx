import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

function Carousel() {
  return (
    <Swiper
      //   spaceBetween={50}
      tag="div"
      className="w-[75vw] mt-4 sm:w-[42vw]"
      slidesPerView={1}
      spaceBetween={100}
      autoplay={true}
      loop={true}
      speed={1000}
      delay={5000}
      con
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="w-[75vw] sm:w-[42vw] h-auto"><img className="rounded-2xl" src="https://images.alphacoders.com/128/thumbbig-1282982.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className="w-[75vw] sm:w-[42vw] h-auto"><img className="rounded-2xl" src="https://images.alphacoders.com/128/thumbbig-1282982.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className="w-[75vw] sm:w-[42vw] h-auto"><img className="rounded-2xl" src="https://images.alphacoders.com/128/thumbbig-1282982.webp" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className="w-[75vw] sm:w-[42vw] h-auto"><img className="rounded-2xl" src="https://images.alphacoders.com/128/thumbbig-1282982.webp" alt="" /></div></SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
