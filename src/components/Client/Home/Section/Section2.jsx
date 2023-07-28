import React from "react";
import { OrderTourItem, ProductItems } from "../../../../Utils/temp";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="flex justify-center w-full mt-5">
      <div className="d:w-[100vw] p:w-auto flex gap-5 justify-center">
        <div className="flex-[20%] d:block p:hidden">
          <div className="  flex-col border  bg-[#f5f5f5]">
            <h3 className="p-3 text-maincontent uppercase text-[16px] font-semibold">
              Danh mục tuyến
            </h3>
            {OrderTourItem.map((items, idx) => (
              <div className="p-2 px-5 flex justify-between items-center hover:scale-105 duration-500 hover:text-main">
                <div className="hover:text-main text-black font-normal px-1 cursor-pointer">
                  {items.startpoint} - {items.endpoint}
                </div>
                <AiOutlineDown className="-rotate-90 " />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[80%] first-letter p:w-auto flex flex-col gap-3 font-LexendDeca">
          <div className="bg-[#f5f5f5] w-full flex justify-between p-4">
            <div>
              Thuê Xe 4 chỗ 8 chỗ carnival đi
              <strong className="text-red-500"> càng xa </strong> giá{" "}
              <strong className="text-red-500">càng rẻ</strong>
            </div>
            <div></div>
          </div>
          <div className="grid d:grid-cols-6 d:gap-10  p:gap-2 px-2 p:grid-cols-2 justify-center ">
            {ProductItems.map((items, idx) => (
              <>
                <div
                  className="h-auto d:w-auto  p:w-auto hover:border duration-300 hover:scale-105 cursor-pointer flex flex-col items-center bg-black text-main justify-between"
                  onClick={() => {
                    window.open('tel:"0933456474', "_blank");
                  }}
                >
                  <img
                    src={items.image}
                    alt="banner"
                    className=" w-full h-[140px] object-cover"
                  />
                  <div className=" m-4 h flex flex-col gap-1">
                    <p className="text-maincontent">
                      {" "}
                      {items.title} {idx}
                    </p>
                    {items.type === "vip" ? (
                      <>
                        {" "}
                        <p className="text-red-500 text-[13px]">
                          2 Ghế đầu: {items.price} VNĐ/Vé
                        </p>
                        <p className="text-red-500 text-[13px]">
                          Các ghế sau: {items.subprice} VNĐ/Vé
                        </p>
                      </>
                    ) : (
                      <p className="text-red-500">{items.price} VNĐ/Chiều</p>
                    )}
                    <p className="px-5 py-2 bg-main text-white text-center font-semibold hover:scale-105 duration-300 rounded-sm">
                      {" "}
                      Liên hệ
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
