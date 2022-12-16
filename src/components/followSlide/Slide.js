import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import follower_1 from "../../Media/1.jpg";
import follower_2 from "../../Media/2.jpg";
import follower_3 from "../../Media/3.jpg";
import follower_4 from "../../Media/4.jpg";
import follower_5 from "../../Media/5.jpg";
import follower_6 from "../../Media/6.jpg";
import follower_7 from "../../Media/7.jpg";
import follower_8 from "../../Media/8.jpg";

const Slide = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={follower_1} alt="follower" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={follower_2} alt="follower" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={follower_3} alt="follower" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={follower_4} alt="follower" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={follower_5} alt="follower" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={follower_6} alt="follower" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={follower_7} alt="follower" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={follower_8} alt="follower" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slide;
