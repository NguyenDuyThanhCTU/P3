import React from "react";
import { RiMagicFill } from "react-icons/ri";
import { OrderTourItem, OrderTourItem1 } from "../../../../Utils/temp";

const Section1 = () => {
  return (
    <div className="w-full font-NunitoSans">
      <div className="bg-main">
        <div className="font-semibold py-2 text-[26px] flex items-center gap-2 pl-2">
          <RiMagicFill className=" text-white" />
          <p>BẢNG GIÁ XE CẬP NHẬT MỚI NHẤT</p>
        </div>
      </div>
      <div className="pl-6 py-3 text-gray-600 bg-white">
        <li>Đi Càng Nhiều Giá Càng Rẻ</li>
        <li>TUYẾN CỐ ĐỊNH : 10 phút / 1 chuyến / 1 ngày</li>
      </div>
      <div className="flex flex-col gap-10 bg-black text-main px-3 py-5">
        <div className=" ">
          <h3 className=" text-secondary uppercase font-bold text-[32px] text-center">
            Tuyến cố định
          </h3>
          <div className="d:w-2/3 p:w-auto mx-auto">
            <div>
              <div className="grid p:grid-cols-4 d:grid-cols-5 py-2 gap-3 border-main border-t border-b font-semibold text-[18px] mt-4">
                <span>Điểm đón</span>
                <span>Điểm đến</span>
                <span>Số chiều</span>
                <span>Giá (VNĐ)</span>
                <span></span>
              </div>
              <div className="grid p:grid-cols-4 d:grid-cols-5 gap-2 py-2 border-b border-main">
                {OrderTourItem.map((items, idx) => (
                  <>
                    <p>{items.startpoint}</p>
                    <p>{items.endpoint}</p>
                    <p>{items.ways}</p>
                    <p>{items.price}</p>
                    <a
                      className="cursor-pointer hover:scale-110 duration-300 d:block p:hidden"
                      href="https://zalo.me/0933456474"
                      target="_blank"
                    >
                      {" "}
                      Liên hệ tư vấn
                    </a>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className=" text-secondary uppercase font-bold text-[32px] text-center">
            Tuyến khác
          </h3>
          <div className="d:w-2/3 p:w-auto mx-auto ">
            <div>
              <div className="grid p:grid-cols-4 d:grid-cols-5 py-2 gap-3 border-main border-t border-b font-semibold text-[18px] mt-4">
                <span>Điểm đón</span>
                <span>Điểm đến</span>
                <span>Số chiều</span>
                <span>Giá (VNĐ)</span>
                <span></span>
              </div>
              <div className="grid p:grid-cols-4 d:grid-cols-5 gap-2 py-2 border-b border-main">
                {OrderTourItem1.map((items, idx) => (
                  <>
                    <p>{items.startpoint}</p>
                    <p>{items.endpoint}</p>
                    <p>{items.ways}</p>
                    <p>{items.price}</p>
                    <a
                      className="cursor-pointer hover:scale-110 duration-300 d:block p:hidden"
                      href="https://zalo.me/0933456474"
                      target="_blank"
                    >
                      {" "}
                      Liên hệ tư vấn
                    </a>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-6 py-3 text-gray-600 bg-white">
        <h3 className="text-red-500">Lưu ý:</h3>
        <li>
          Quí khách đặt xe đi 2 chiều ( đi / về ) vui lòng liên hệ để được tư
          vấn{" "}
        </li>
        <li>Xe 7 chỗ cộng thêm 150.000 VNĐ </li>
      </div>
    </div>
  );
};

export default Section1;
