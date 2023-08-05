import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";
import { useData } from "../../../../Context/DataProviders";

const Section1 = () => {
  const { Slides } = useData();
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
          {Slides.map((items) => (
            <>
              <SwiperSlide>
                <img
                  src={items.image}
                  alt="banner"
                  className="object-coverx  w-full z-0 cursor-pointer max-h-[655px]"
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
