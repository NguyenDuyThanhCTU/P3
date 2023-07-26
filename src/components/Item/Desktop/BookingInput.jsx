import React from "react";
import { IconMapping } from "../../../Utils/item";

const BookingInput = ({ title, icon, setData }) => {
  let Icon = IconMapping[icon];
  console.log(Icon);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label>{title}:</label>
      <div className="flex items-center w-full">
        <div className="p-2 border">
          <Icon className="text-[24px] " />
        </div>
        <input
          type="text"
          className="outline-none p-2 bg-white w-full"
          placeholder={`Nhập ${title}`}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BookingInput;
