import React from "react";
import voucher_xtra from "../assets/voucher_xtra.png";
import free_ship from "../assets/free_ship.png";
import sale from "../assets/sale.png";
import voucher from "../assets/voucher.png";
import shopee_sieure from "../assets/shopee_sieure.png";
import shopee_style from "../assets/shopee_style.png";
import hangquocte from "../assets/hangquocte.png";
import dichvukhac from "../assets/dichvukhac.png";
export default function ContentNavBar() {
  return (
    <div
      className="flex justify-center mt-4"
      style={{
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
        lineHeight: 1.2,
      }}
    >
      <div className="flex justify-center items-center">
        {/* voucher xtra */}
        <a
          className=" flex justify-center items-center"
          style={{ width: "150px", height: "108px" }}
          href="fb.com"
        >
          <div
            style={{
              width: "150px",
              height: "81px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "45px", height: "45px", marginBottom: "8px" }}>
              <img src={voucher_xtra} alt="voucher_xtra" title="" />
            </div>
            <div
              style={{
                width: "150px",
                height: "28px",
                margin: "0px 0px 8px",
                color: "#222222",
                fontSize: "13px",
                padding: "4px",
                textAlign: "center",
              }}
            >
              Voucher Giảm Đến 1 Triệu
            </div>
          </div>
        </a>
        {/* free ship */}
        <a
          className="flex justify-center items-center"
          style={{ width: "150px", height: "108px" }}
          href="fb.com"
        >
          <div
            style={{
              width: "150px",
              height: "81px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "45px", height: "45px", marginBottom: "8px" }}>
              <img src={free_ship} alt="free_ship" title="" />
            </div>
            <div
              style={{
                width: "150px",
                height: "28px",
                margin: "0px 0px 8px",
                color: "#222222",
                fontSize: "13px",
                padding: "4px",
                textAlign: "center",
              }}
            >
              Miễn Phí Ship - Có Shopee
            </div>
          </div>
        </a>
        {/* khung gio san sale */}
        <a
          className="flex justify-center items-center"
          style={{ width: "150px", height: "108px" }}
          href="fb.com"
        >
          <div
            style={{
              width: "150px",
              height: "81px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "45px", height: "45px", marginBottom: "8px" }}>
              <img src={sale} alt="sale" title="" />
            </div>
            <div
              style={{
                width: "150px",
                height: "28px",
                margin: "0px 0px 8px",
                color: "#222222",
                fontSize: "13px",
                textAlign: "center",
                padding: "4px",
              }}
            >
              Khung Giờ Săn Sale
            </div>
          </div>
        </a>
        {/* ma giam gia */}
        <a
          className="flex justify-center items-center"
          style={{ width: "150px", height: "108px" }}
          href="fb.com"
        >
          <div
            style={{
              width: "150px",
              height: "81px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "45px", height: "45px", marginBottom: "8px" }}>
              <img src={voucher} alt="voucher" title="" />
            </div>
            <div
              style={{
                width: "150px",
                height: "28px",
                margin: "0px 0px 8px",
                color: "#222222",
                fontSize: "13px",
                textAlign: "center",
                padding: "4px",
              }}
            >
              Mã Giảm Giá
            </div>
          </div>
        </a>
        {/* shopee sieu re */}
        <a
          className="flex justify-center items-center"
          style={{ width: "150px", height: "108px" }}
          href="fb.com"
        >
          <div
            style={{
              width: "150px",
              height: "81px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "45px", height: "45px", marginBottom: "8px" }}>
              <img src={shopee_sieure} alt="shopee_sieure" title="" />
            </div>
            <div
              style={{
                width: "150px",
                height: "28px",
                margin: "0px 0px 8px",
                color: "#222222",
                fontSize: "13px",
                textAlign: "center",
                padding: "4px",
              }}
            >
              Shopee Siêu Rẻ
            </div>
          </div>
        </a>
        {/* shopee style */}
        <a
          className="flex justify-center items-center"
          style={{ width: "150px", height: "108px" }}
          href="fb.com"
        >
          <div
            style={{
              width: "150px",
              height: "81px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "45px", height: "45px", marginBottom: "8px" }}>
              <img src={shopee_style} alt="shopee_style" title="" />
            </div>
            <div
              style={{
                width: "150px",
                height: "28px",
                margin: "0px 0px 8px",
                color: "#222222",
                fontSize: "13px",
                textAlign: "center",
                padding: "4px",
              }}
            >
              Shopee Style Voucher 40%
            </div>
          </div>
        </a>
        {/* hang quoc te */}
        <a
          className="flex justify-center items-center"
          style={{ width: "150px", height: "108px" }}
          href="fb.com"
        >
          <div
            style={{
              width: "150px",
              height: "81px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "45px", height: "45px", marginBottom: "8px" }}>
              <img src={hangquocte} alt="Hàng quốc tế" title="" />
            </div>
            <div
              style={{
                width: "150px",
                height: "28px",
                margin: "0px 0px 8px",
                color: "#222222",
                fontSize: "13px",
                textAlign: "center",
                padding: "4px",
              }}
            >
              Hàng Quốc Tế
            </div>
          </div>
        </a>
        {/* dich vu khac */}
        <a
          className="flex justify-center items-center"
          style={{ width: "150px", height: "108px" }}
          href="fb.com"
        >
          <div
            style={{
              width: "150px",
              height: "81px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "45px", height: "45px", marginBottom: "8px" }}>
              <img src={dichvukhac} alt="Dịch vụ khác" title="" />
            </div>
            <div
              style={{
                width: "150px",
                height: "28px",
                margin: "0px 0px 8px",
                color: "#222222",
                fontSize: "13px",
                padding: "4px",
                textAlign: "center",
              }}
            >
              Nạp Thẻ, Dịch Vụ & Vé Máy Bay
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
