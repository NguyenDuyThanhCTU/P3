import React, { useState } from "react";
import BookingInput from "./Desktop/BookingInput";

const Booking = () => {
  const [Phone, setPhone] = useState("");
  const [EndPoint, setEndPoint] = useState("");
  const [StartPoint, setStartPoint] = useState("");
  const [Time, setTime] = useState("");
  const [Type, setType] = useState("");
  return (
    <div className="bg-[#f1f1f1f1] p-5 w-full font-LexendDeca">
      <div className="flex flex-col gap-5">
        <BookingInput
          title="Số điện thoại"
          setData={setPhone}
          icon="AiFillPhone"
        />
        <BookingInput
          title="Điểm đón"
          setData={setStartPoint}
          icon="CiLocationOn"
        />
        <BookingInput
          title="Điểm đến"
          setData={setEndPoint}
          icon="CiLocationOn"
        />
        <div className="flex gap-2 w-full">
          <BookingInput title="Giờ đón" setData={setTime} icon="FcCalendar" />
          <BookingInput title="Loại xe" setData={setType} icon="AiFillCar" />
        </div>
        <div className="text-center bg-secondary hover:bg-blue-600 text-white py-2">
          Đặt xe ngay
        </div>
      </div>
    </div>
  );
};

export default Booking;
