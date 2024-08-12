import React from "react";
import voucher_xtra from "../../assets/voucher_xtra.png";
import free_ship from "../../assets/free_ship.png";
import sale from "../../assets/sale.png";
import voucher from "../../assets/voucher.png";
import shopee_sieure from "../../assets/shopee_sieure.png";
import shopee_style from "../../assets/shopee_style.png";
import hangquocte from "../../assets/hangquocte.png";
import dichvukhac from "../../assets/dichvukhac.png";
import "./NavContent.css";
export default function NavContent() {
  return (
    <>
      {/* nav__container */}
      <div className="nav__container">
        {/* nav__content */}
        <div className="nav__content">
          <a href="fb.com">
            <div>
              <div>
                <img src={voucher_xtra} alt="voucher_xtra" title="" />
              </div>
              <div>Voucher Giảm Đến 1 Triệu</div>
            </div>
          </a>
          <a href="fb.com">
            <div>
              <div>
                <img src={free_ship} alt="free_ship" title="" />
              </div>
              <div>Miễn Phí Ship - Có Shopee</div>
            </div>
          </a>
          <a href="fb.com">
            <div>
              <div>
                <img src={sale} alt="sale" title="" />
              </div>
              <div>Khung Giờ Săn Sale</div>
            </div>
          </a>
          <a href="fb.com">
            <div>
              <div>
                <img src={voucher} alt="voucher" title="" />
              </div>
              <div>Mã Giảm Giá</div>
            </div>
          </a>
          <a href="fb.com">
            <div>
              <div>
                <img src={shopee_sieure} alt="shopee_sieure" title="" />
              </div>
              <div>Shopee Siêu Rẻ</div>
            </div>
          </a>
          <a href="fb.com">
            <div>
              <div>
                <img src={shopee_style} alt="shopee_style" title="" />
              </div>
              <div>Shopee Style Voucher 40%</div>
            </div>
          </a>
          <a href="fb.com">
            <div>
              <div>
                <img src={hangquocte} alt="Hàng quốc tế" title="" />
              </div>
              <div>Hàng Quốc Tế</div>
            </div>
          </a>
          <a href="fb.com">
            <div>
              <div>
                <img src={dichvukhac} alt="Dịch vụ khác" title="" />
              </div>
              <div>Nạp Thẻ, Dịch Vụ</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
