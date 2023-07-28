import React, { useEffect } from "react";

import { useData } from "../../Context/DataProviders";
import { Helmet } from "react-helmet";
import Loading from "../../components/Item/Loading";
import Header from "./Section/Header";
import Hotline from "./Section/Hotline";
import OnTop from "./Section/OnTop";
import Copyright from "./Section/Copyright";
import Footer from "./Section/Footer";
import Booking from "../../components/Item/Booking";
import { IoClose } from "react-icons/io5";
import { useStateProvider } from "../../Context/StateProvider";

const ClientLayout = ({ children }) => {
  const { TradeMarkData } = useData();
  const { isOpen, setIsOpen } = useStateProvider();

  useEffect(() => {
    if (isOpen === "Drop-header") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <div className="relative ">
      {/* <Helmet>
        <title>Dịch vụ vận tải hành khách Khánh Du</title>
        <link rel="icon" href=" 
" />

      </Helmet> */}
      <Loading />

      <div className="z-50 relative">
        <Header />
      </div>
      <div
        className={`relative  w-full flex justify-center items-center bg-[rgba(0,0,0,0.65)] overflow-hidden duration-300 z-20  ${
          isOpen === "Drop-header" ? "h-[100vh]" : "h-0"
        }`}
      >
        <IoClose
          className="absolute top-0 text-white right-0 text-[34px] cursor-pointer hover:scale-110 duration-300 z-50"
          onClick={() => setIsOpen("")}
        />
        <div className="d:w-[50vw] p:w-auto ">
          <Booking />
        </div>
      </div>
      <div className="bg-[#555555] ">{children}</div>

      <Footer />
      <Copyright />

      <OnTop />
      <Hotline />
    </div>
  );
};

export default ClientLayout;
