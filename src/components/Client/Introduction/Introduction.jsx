import React from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.724689716512!2d105.7542162758023!3d10.039562172351165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0886c9eaf81d5%3A0x74cbe5e95ac6073a!2zNzJiIMSQLiBQaOG6oW0gVGjhur8gSGnhu4NuLCBQaMaw4budbmcgQW4gS2jDoW5oLCBOaW5oIEtp4buBdSwgQ-G6p24gVGjGoSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1690363066558!5m2!1sen!2s"
        className="w-screen h-[50vh]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-[60vw] flex items-center">
        <img
          src="https://xedulichvungtau.com/wp-content/uploads/2022/04/Xe-KD-min.jpg"
          alt="img"
        />
      </div>
      <div className="  w-[60vw] mx-auto flex flex-col gap-10">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
};

export default Introduction;
