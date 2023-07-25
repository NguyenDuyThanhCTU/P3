import React from "react";
import FooterInput from "../Item/FooterInput";

const Footer = () => {
  return (
    <div className="">
      <div className="flex mx-auto w-[80vw]">
        <div className="flex flex-col">
          <h3>Đặt xe trực tuyến</h3>
          <div className="flex flex-col">
            <FooterInput />
            <FooterInput />
            <FooterInput />
            <div className="flex">
              <div>
                <p>icon</p>
                <input type="text" />
              </div>
              <div>
                <p>icon</p>
                <input type="text" />
              </div>
            </div>
            <div>Đặt xe ngay</div>
          </div>
        </div>
        <div>
          <div>
            <h3>Liên hệ chúng tôi</h3>
            {/* <p>
              Nhà Xe Vũng Tàu Sài Gòn chuyên các dịch vụ thuê xe du lịch
              Limousine 9 chỗ, xe du lịch riêng 4 chỗ, 7 chỗ đưa đón trọn gói
              giá rẻ. Chúng tôi cam kết dịch vụ chạy tuyến đường dài đi tỉnh, du
              lịch bằng dòng xe đầu tư mới 100%, sang trọng, cao cấp với chính
              sách giá cam kết rẻ nhất và chất lượng phục vụ tốt nhất.
            </p> */}
          </div>
          <div>
            <div>
              <p>Hotline / Zalo:</p>
              <div>
                <p>icon</p>
                0933456474
              </div>
              <p>Website:</p>
              <div>
                <p>icon</p>
                0933456474
              </div>
              <p>Địa chỉ:</p>
              <div>
                <p>icon</p>
                0933456474
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
