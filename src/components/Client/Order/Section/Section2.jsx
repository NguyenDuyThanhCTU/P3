import React from "react";
import { RiMagicFill } from "react-icons/ri";
import {
  OrderItems,
  OrderTourItem,
  OrderTourItem1,
} from "../../../../Utils/temp";

const Section2 = () => {
  return (
    <div className="w-full font-NunitoSans ">
      {OrderItems.map((items, idx) => (
        <div className="mt-5">
          <div className="font-semibold py-2 text-[26px] flex items-center gap-2 pl-2 bg-main">
            <RiMagicFill className=" text-white" />
            <p>{items.title} </p>
          </div>
          <div className="flex bg-white justify-center py-10">
            <img src={items.image} alt="ctpt" />
          </div>
          <div className="pl-6 py-3 text-gray-600 bg-white text-[18px]">
            {items.content.length > 0 && (
              <>
                {items.content.map((items, idx) => (
                  <>
                    <li>{items.content}</li>
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2;
