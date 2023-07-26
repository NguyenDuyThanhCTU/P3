import React from "react";
import { ProductItems } from "../../../../Utils/temp";

const Section2 = () => {
  return (
    <div className="flex flex-col gap-10 items-center w-full bg-black text-main">
      <div className="flex flex-col gap-5 py-3 justify-center items-center">
        <h3 className="text-maincontent text-[24px] uppercase text-center font-semibold">
          Thực hiện các tour du lịch gia đình và hợp tác cùng công ty
        </h3>

        <div className="w-[50vw] flex items-center">
          <div className="grid grid-cols-3 gap-5">
            {ProductItems.map((items) => (
              <div className="cursor-pointer hover:scale-110 duration-300">
                <img
                  src={items.image}
                  alt="products"
                  className="h-[180px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;