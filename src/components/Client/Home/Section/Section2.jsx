import React, { useEffect, useState } from "react";
import {
  OrderTourItem,
  ProductItems,
  productItems,
} from "../../../../Utils/temp";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useData } from "../../../../Context/DataProviders";
import Order from "../../Order/Order";

const Section2 = () => {
  const { Products, productTypes } = useData();
  const [isSort, setIsSort] = useState("tat-ca");
  const [nameType, setNameType] = useState();
  const [DataFetch, setDataFetch] = useState([]);
  const HandleSort = (type, name) => {
    setNameType(name);
    setIsSort(type);
  };

  useEffect(() => {
    if (isSort === "tat-ca") {
      setDataFetch(Products);
    } else {
      const sort = Products.filter((item) => item.type === isSort);
      if (sort) {
        setDataFetch(sort);
      }
    }
  }, [Products, isSort]);

  const itemsWithPrice = DataFetch?.filter((items) => items.Price);
  const itemsWithoutPrice = DataFetch?.filter((items) => !items.Price);

  const combinedItems = [...itemsWithPrice, ...itemsWithoutPrice];
  console.log(DataFetch);
  return (
    <div className="flex justify-center w-full mt-5">
      <div className="d:w-[100vw] p:w-auto flex gap-5 justify-center">
        <div className="flex-[20%] d:block p:hidden">
          <div className="  flex-col border  bg-[#f5f5f5]">
            <h3 className="p-3 text-maincontent uppercase text-[16px] font-semibold">
              Danh mục tuyến
            </h3>
            {productTypes.map((items, idx) => (
              <div className="p-2 px-5 flex justify-between items-center hover:scale-105 duration-500 hover:text-main">
                <div
                  className={`${
                    nameType === items.name ? "text-main" : "text-black"
                  } hover:text-main text-black font-normal px-1 cursor-pointer`}
                  onClick={() => HandleSort(items.type, items.name)}
                >
                  {items.name}
                </div>
                <AiOutlineDown
                  className={`${
                    nameType === items.name ? "-rotate-90" : "rotate-0"
                  } `}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[80%] first-letter p:w-auto flex flex-col gap-3 font-LexendDeca">
          <div className="bg-black w-full flex justify-between p-4">
            <div className="font-bold text-main text-[28px] d:text-[32p] text-center">
              Thuê xe 4 chỗ 8 chỗ carnival đi càng xa giá càng rẻ vui lòng liên
              hệ để được giảm 20%{" "}
              <a href="tel:0933456474" className="underline">
                Sdt: 0933456474
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid d:grid-cols-6 d:gap-10  p:gap-2 px-2 p:grid-cols-2 justify-center ">
              {productItems.map((items, idx) => (
                <>
                  <div
                    className="h-auto d:w-auto  p:w-auto hover:scale-105 duration-300 hover:shadow-2xl cursor-pointer flex flex-col items-center bg-black text-main justify-between"
                    onClick={() => {
                      window.open('tel:"0933456474', "_blank");
                    }}
                  >
                    <div className=" m-2 h-full flex flex-col gap-1 item justify-between">
                      <img
                        src={items.image}
                        alt="banner"
                        className=" w-full h-[140px] object-cover"
                      />

                      <p className="text-center"> {items.title}</p>

                      {items.price && (
                        <p className="text-red-500 text-[15px] text-center">
                          Giá chỉ {items.price} VNĐ
                        </p>
                      )}
                      <p className="px-5 py-2 bg-main text-white text-center font-semibold hover:scale-105 duration-300 rounded-sm">
                        {" "}
                        Liên hệ
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div>
              <Order />
            </div>
            <div className="grid d:grid-cols-6 d:gap-10  p:gap-2 px-2 p:grid-cols-2 justify-center ">
              {itemsWithoutPrice.map((items, idx) => (
                <>
                  <div
                    className="h-auto d:w-auto  p:w-auto hover:scale-105 duration-300 hover:shadow-2xl cursor-pointer flex flex-col items-center bg-black text-main justify-between"
                    onClick={() => {
                      window.open('tel:"0933456474', "_blank");
                    }}
                  >
                    <div className=" m-2 h-full flex flex-col gap-1 item justify-between">
                      <img
                        src={items.image}
                        alt="banner"
                        className=" w-full h-[140px] object-cover"
                      />

                      <p className="text-center">
                        {" "}
                        Liên hệ{" "}
                        <strong className="font-bold underline">
                          0933456474
                        </strong>{" "}
                        để được tư vấn giá tốt nhất{" "}
                        <strong className="text-red-500 font-bold ">
                          Giảm đến 20%
                        </strong>
                      </p>

                      {items.Price && (
                        <p className="text-red-500 text-[15px]">
                          Giá chỉ {items.Price} VNĐ
                        </p>
                      )}
                      <p className="px-5 py-2 bg-main text-white text-center font-semibold hover:scale-105 duration-300 rounded-sm">
                        {" "}
                        Liên hệ
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
