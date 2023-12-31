import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

import { HeaderItems } from "../../../Utils/item";
import DropDown from "../Item/DropDown";
import { useData } from "../../../Context/DataProviders";
import { useStateProvider } from "../../../Context/StateProvider";

const Header = () => {
  const [Hidden, setHidden] = useState(false);
  const { setIsOpen } = useStateProvider();

  const HandleSelected = (idx) => {
    console.log(idx);
    if (idx === 4) {
      window.open("tel:0933456474", "_blank");
    }
    if (idx === 3) {
      setIsOpen("Drop-header");
    } else {
      setIsOpen(" ");
    }
  };
  return (
    <>
      {/* <--- Desktop ---> */}
      <div className="font-LexendDeca  bg-MainColor  shadow-lg h-[83px] bg-black text-main ">
        <div className="p:hidden d:flex w-[1200px] h-full mx-auto justify-between items-center ">
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/demo2512.appspot.com/o/z4523416705991_6351c6fb45a2952326e387f039a1c368.jpg?alt=media&token=e5e78444-f2ab-44cf-a88d-5964e1f96208"
              alt="logo"
              className="w-14"
            />
          </div>
          <div className="flex gap-14 items-center ">
            {HeaderItems.map((items, idx) => (
              <Link to={items.link}>
                <div
                  key={idx}
                  className="font-bold text-[22px] hover:scale-110 duration-300"
                  onClick={() => HandleSelected(idx)}
                >
                  <p>{items.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="p:block d:hidden  ">
          <div className="justify-between mx-5 flex items-center">
            <div className="py-2">
              <Link to="/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/demo2512.appspot.com/o/z4523416705991_6351c6fb45a2952326e387f039a1c368.jpg?alt=media&token=e5e78444-f2ab-44cf-a88d-5964e1f96208"
                  alt="logo"
                  className="w-14 object-cover"
                />
              </Link>
            </div>
            <div>
              <div className="flex items-center text-[65px]">
                {Hidden ? (
                  <RxCross1
                    className=" text-main p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                ) : (
                  <MdOutlineFormatListBulleted
                    className=" text-main p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={`${
              Hidden ? "h-screen" : "h-0 "
            } w-full duration-700 bg-[rgba(253,253,253,0.9)] overflow-hidden z-50`}
          >
            {HeaderItems.map((items, idx) => (
              <DropDown
                selected={HandleSelected}
                idx={idx}
                content={items.name}
                link={items.link}
                setHidden={setHidden}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
