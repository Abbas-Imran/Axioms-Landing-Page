import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
// import SwiperCore, { Autoplay } from 'swiper';

// SwiperCore.use([Autoplay]);
function TestinomialSwiper() {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
    >
      <SwiperSlide className="d-flex align-items-center justify-content-center">
        <div className="testCard">
          <div className="testinomial-swiper-card">
            <div className="profilePicture">
              <img src="/Section5/Ellipse 1.svg" width="50px" />
            </div>
            <p className="review-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className="Writer">Mike</p>
            <p className="Designation">Executive Engineer</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="d-flex align-items-center justify-content-center">
        <div className="testCard">
          <div className="testinomial-swiper-card">
            <div className="profilePicture">
              <img src="/Section5/Ellipse 1.svg" width="50px" />
            </div>
            <p className="review-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className="Writer">Mike</p>
            <p className="Designation">Executive Engineer</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="d-flex align-items-center justify-content-center">
        <div className="testCard">
          <div className="testinomial-swiper-card">
            <div className="profilePicture">
              <img src="/Section5/Ellipse 1.svg" width="50px" />
            </div>
            <p className="review-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className="Writer">Mike</p>
            <p className="Designation">Executive Engineer</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="d-flex align-items-center justify-content-center">
        <div className="testCard">
          <div className="testinomial-swiper-card">
            <div className="profilePicture">
              <img src="/Section5/Ellipse 1.svg" width="50px" />
            </div>
            <p className="review-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className="Writer">Mike</p>
            <p className="Designation">Executive Engineer</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default TestinomialSwiper;
