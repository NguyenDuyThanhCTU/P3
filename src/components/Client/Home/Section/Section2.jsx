import React from "react";
import { OrderTourItem, ProductItems } from "../../../../Utils/temp";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="flex justify-center w-full mt-5">
      <div className="d:w-[1200px] p:w-auto flex gap-5 justify-center">
        <div className="w-[300px] d:block p:hidden">
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
        <div className="d:w-[900px] first-letter p:w-auto flex flex-col gap-3 font-LexendDeca">
          <div className="bg-[#f5f5f5] w-full flex justify-between p-4">
            <div>
              <strong>5</strong> tuyến
            </div>
            <div></div>
          </div>
          <div className="grid d:grid-cols-4 gap-10 px-2 p:grid-cols-1 justify-center ">
            {ProductItems.map((items, idx) => (
              <Link to="/product-detail">
                <div className="h-[390px] w-[220px] hover:border duration-300 hover:scale-105 cursor-pointer flex flex-col items-center bg-black text-main">
                  <img
                    src={items.image}
                    alt="banner"
                    className="w-[200px] h-[240px] object-cover"
                  />
                  <div className=" m-4 h flex flex-col gap-1">
                    <p className="text-maincontent">
                      {" "}
                      {items.title} {idx}
                    </p>
                    <p className="text-red-500">{items.price} VNĐ/Chiều</p>
                    <p className="px-5 py-2 bg-main text-white text-center font-semibold hover:scale-105 duration-300 rounded-sm">
                      {" "}
                      Liên hệ
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
