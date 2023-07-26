import React from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";

const Order = () => {
  return (
    <div className="w-[60vw] mx-auto flex flex-col items-center pt-5 gap-10">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Order;
