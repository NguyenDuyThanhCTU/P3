import React from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";

const Order = () => {
  return (
    <div className="d:w-[60vw] d:mx-auto p:w-auto p:mx-2 flex flex-col items-center pt-5 gap-10">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Order;
