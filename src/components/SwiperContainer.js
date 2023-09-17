import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
// import SwiperCore, { Autoplay } from 'swiper';

// SwiperCore.use([Autoplay]);
function SwiperContainer() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        }
      }}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
    >
      <SwiperSlide className="d-flex align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center">
          <img width="150px" src="/Section3/Swiper/swiper1.svg" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="d-flex align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center">
          <img width="150px" src="/Section3/Swiper/swiper2.png" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="d-flex align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center">
          <img width="150px" src="/Section3/Swiper/swiper3.svg" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="d-flex align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center">
          <img width="150px" src="/Section3/Swiper/swiper4.svg" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="d-flex align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center">
          <img width="150px" src="/Section3/Swiper/swiper5.svg" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="d-flex align-items-center justify-content-center">
        <div className="d-flex justify-content-center align-items-center">
          <img width="150px" src="/Section3/Swiper/swiper6.svg" />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default SwiperContainer;
