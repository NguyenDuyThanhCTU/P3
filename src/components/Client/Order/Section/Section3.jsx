import React from "react";
import { RiMagicFill } from "react-icons/ri";
import { OrderTourItem, OrderTourItem1 } from "../../../../Utils/temp";

const Section3 = () => {
  return (
    <div className="w-full font-NunitoSans ">
      <div className="bg-main">
        <div className="font-semibold py-2 text-[26px] flex items-center gap-2 pl-2">
          <RiMagicFill className=" text-white" />
          <p>Thuê xe Limousine</p>
        </div>
      </div>
      <div className="pl-6 py-3 text-gray-600 bg-white text-[18px]">
        <li>Xe rất cao cấp, chất lượng đời mới, đẳng cấp VIP</li>
        <li>Ghế ngồi bọc da rất êm và sang trọng, không gian rộng rãi</li>
        <li>Đưa đón tận nơi tại TPHCM và Vũng Tàu</li>
        <li> Tài xế lành nghề, nhiều kinh nghiệm và chuyên nghiệp</li>
      </div>
    </div>
  );
};

export default Section3;
