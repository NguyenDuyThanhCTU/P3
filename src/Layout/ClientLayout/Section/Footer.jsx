import React from "react";
import FooterInput from "../Item/FooterInput";
import Booking from "../../../components/Item/Booking";
import { AiFillPhone } from "react-icons/ai";
import { FaInternetExplorer } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[url(https://xedulichvungtau.com/wp-content/uploads/2022/04/tong-dai.jpg)] bg-no-repeat bg-cover ">
      <div className="bg-[rgba(0,0,0,0.65)] ">
        <div className="flex mx-auto w-[80vw] py-20 gap-10 justify-center d:flex-row p:flex-col">
          <div className="flex flex-col font-LexendDeca gap-5 ">
            <h3 className="text-[22px] font-bold text-white">
              Đặt xe trực tuyến
            </h3>
            <Booking />
          </div>
          <div className="text-white font-LexendDeca gap-10 flex flex-col">
            <div>
              <h3 className="text-[22px] font-bold ">Liên hệ chúng tôi</h3>
              <p className="max-w-[555px] mt-5">
                Nhà Xe Vũng Tàu Sài Gòn chuyên các dịch vụ thuê xe du lịch
                Limousine 9 chỗ, xe du lịch riêng 4 chỗ, 7 chỗ đưa đón trọn gói
                giá rẻ. Chúng tôi cam kết dịch vụ chạy tuyến đường dài đi tỉnh,
                du lịch bằng dòng xe đầu tư mới 100%, sang trọng, cao cấp với
                chính sách giá cam kết rẻ nhất và chất lượng phục vụ tốt nhất.
              </p>
            </div>

            <div className="ml-3">
              <div className="flex flex-col gap-2">
                <div>
                  <p>Hotline / Zalo:</p>
                  <div className="flex items-center gap-1">
                    <AiFillPhone />
                    0933456474
                  </div>
                </div>
                <div>
                  <p>Website:</p>
                  <div className="flex items-center gap-1">
                    <FaInternetExplorer />
                    0933456474
                  </div>
                </div>
                <div>
                  <p>Địa chỉ:</p>
                  <div className="flex items-center gap-1">
                    <CiLocationOn />
                    0933456474
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
