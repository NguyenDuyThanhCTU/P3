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
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet>
      <Loading />
      <div
        className={`absolute  w-full flex justify-center items-center bg-[rgba(0,0,0,0.65)] overflow-hidden duration-300 ${
          isOpen === "Drop-header" ? "h-[100vh]" : "h-0"
        }`}
      >
        <IoClose
          className="absolute top-0 text-white right-0 text-[34px] cursor-pointer hover:scale-110 duration-300"
          onClick={() => setIsOpen("")}
        />
        <div className="w-[50vw]">
          <Booking />
        </div>
      </div>
      <div>
        <Header />
        <div className="bg-[#555555] ">{children}</div>
        <Footer />
        <Copyright />
      </div>
      <div>
        <OnTop />
        <Hotline />
      </div>
    </div>
  );
};

export default ClientLayout;
