import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";
import { SlideItems, SlideItems1 } from "../../../../Utils/temp";

const Section1 = () => {
  return (
    <>
      <div className="relative w-full   ">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper -z-10"
        >
          {SlideItems1.map((items) => (
            <>
              <SwiperSlide>
                <img
                  src={items.image}
                  alt="banner"
                  className="object-coverx  w-full z-0 cursor-pointer"
                  onClick={() => {
                    window.open("tel:0933456474", "_blank");
                  }}
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Section1;
