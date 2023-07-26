import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";
import { SlideItems } from "../../../../Utils/temp";
const Section1 = () => {
  return (
    <div className="flex flex-col gap-10 items-center w-full bg-black text-main">
      <div className="flex flex-col gap-5 py-3 justify-center items-center">
        <h3 className="text-maincontent text-[24px] uppercase text-center font-semibold">
          CHÀO MỪNG BẠN ĐẾN VỚI trang cung cấp DỊCH VỤ Du Lịch <br /> thuộc Công
          ty vận tải hành khách Khánh Du
        </h3>
        <div className="bg-white w-full text-gray-500">
          <p className="px-10 py-4">
            <strong>DỊCH VỤ Du Lịch Khánh Du</strong> thuộc Công ty vận tải hành
            khách Khánh Du là một trong những địa chỉ cung dịch vụ Du Lịch An
            Toàn hàng đầu tại khu vực thành phố Hồ Chí Minh, Cần Thơ. Rải Khắp
            63 Tỉnh Thành..Xe Riêng Xe Nhập Khẩu nguyên chiếc Chỉ 850k, tài xế
            lành nghề thông thuộc các tuyến đường trãi khắp đất nước Việt Nam.
          </p>
        </div>
        <div className="w-[50vw] flex items-center">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {SlideItems.map((items) => (
              <>
                <SwiperSlide>
                  <img
                    src={items.image}
                    alt="banner"
                    className="w-full rounded-xl "
                  />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section1;
