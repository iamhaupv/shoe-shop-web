import React from "react";
import jcb from "../../assets/jcb.png";
import credit from "../../assets/credit.png";
import visa from "../../assets/visa.png";
import american_express from "../../assets/american_express.png";
import cod from "../../assets/cod.png";
import tragop from "../../assets/tragop.png";
import pay from "../../assets/pay.png";
import spaylate from "../../assets/spaylater.png";
import spx from "../../assets/spx.png";
import ghtk from "../../assets/ghtk.png";
import ghn from "../../assets/ghn.png";
import viettelpost from "../../assets/viettelpost.png";
import vietnampost from "../../assets/vietnampost.png";
import jandt from "../../assets/jandt.png";
import grabexpress from "../../assets/grabexpress.png";
import ninjavan from "../../assets/ninjavan.png";
import bestexpress from "../../assets/bestexpress.png";
import be from "../../assets/be.png";
import ahamove from "../../assets/ahamove.png";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import inn from "../../assets/in.png";
import qr from "../../assets/qr.png";
import chplay from "../../assets/chplay.png";
import applestore from "../../assets/applestore.png";
import appgallery from "../../assets/appgallery.png";
import dadangky from "../../assets/dadangky.png";
import banhrang from "../../assets/banhrang.png";
import "./FooterRegisterLogin.css";
export default function FooterRegisterLogin() {
  return (
    // container__footer
    <div className="flex justify-center container__footer">
      {/* content__footer */}
      <div className="content__footer">
        {/* child */}
        <div className="child flex">
          {/* child__1 */}
          <div className="h-full w-1/5">
            {/* child__header */}
            <div className="child__header">CHĂM SÓC KHÁCH HÀNG</div>
            {/* child__ul */}
            <ul className="child__ul">
              <li>
                <a href="fb.com">Trung Tâm Trợ Giúp</a>
              </li>
              <li>
                <a href="fb.com">IAMHAU Blog</a>
              </li>
              <li>
                <a href="fb.com">Hướng Dẫn Mua Hàng</a>
              </li>
              <li>
                <a href="fb.com">Hướng Dẫn Bán Hàng</a>
              </li>
              <li>
                <a href="fb.com">Thanh Toán</a>
              </li>
              <li>
                <a href="fb.com">IAMHAU Xu</a>
              </li>
              <li>
                <a href="fb.com">Vận Chuyển</a>
              </li>
              <li>
                <a href="fb.com">Trả Hàng & Hoàn Tiền</a>
              </li>
              <li>
                <a href="fb.com">Chăm Sóc Khách Hàng</a>
              </li>
              <li>
                <a href="fb.com">Chính Sách Bảo Mật</a>
              </li>
            </ul>
          </div>
          {/* child__2 */}
          <div className="h-full w-1/5">
            {/* child__header */}
            <div className="child__header">VỀ IAMSHOP</div>

            <ul className="child__ul">
              <li>
                <a href="fb.com">Giới Thiệu Về IAMHAU Việt Nam</a>
              </li>
              <li>
                <a href="fb.com">Tuyển Dụng</a>
              </li>
              <li>
                <a href="fb.com">Điềoản IAMHAU</a>
              </li>
              <li>
                <a href="fb.com">Chínch Bảo Mật</a>
              </li>
              <li>
                <a href="fb.com">Chính Hãng</a>
              </li>
              <li>
                <a href="fb.com"> Người Bán</a>
              </li>
              <li>
                <a href="fb.com">Flash Sales</a>
              </li>
              <li>
                <a href="fb.com">Chương Trình Tiếp Thị Liên Kết IAMHAU</a>
              </li>
              <li>
                <a href="fb.com">Liên Hệ Với Truyền Thống</a>
              </li>
            </ul>
          </div>
          {/* child__3 */}
          <div className="h-full w-1/5">
            {/* child__header */}
            <div className="child__header">THANH TOÁN</div>
            <ul className="flex flex-wrap child__3__ul">
              <li>
                <a href="fb.com">
                  <img src={visa} alt="visa" />
                </a>
              </li>
              <li>
                <a href="fb.com">
                  <img src={credit} alt="credit" />
                </a>
              </li>
              <li>
                <a href="fb.com">
                  <img src={jcb} alt="jcb" />
                </a>
              </li>
              <li>
                <a href="fb.com">
                  <img src={american_express} alt="american express" />
                </a>
              </li>
              <li>
                <a href="fb.com">
                  <img src={cod} alt="cod" />
                </a>
              </li>
              <li>
                <a href="fb.com">
                  <img src={tragop} alt="Tra gop" />
                </a>
              </li>
              {/* pay */}
              <li>
                <a href="fb.com">
                  <img src={pay} alt="pay" />
                </a>
              </li>
              {/* SpayLate */}
              <li>
                <a href="fb.com">
                  <img src={spaylate} alt="SpayLate" />
                </a>
              </li>
            </ul>
            <div className="child__header">ĐƠN VỊ VẬN CHUYỂN</div>
            <ul className="flex flex-wrap child__3__ul">
              {/* spx */}
              <li>
                <a href="fb.com">
                  <img src={spx} alt="spx" />
                </a>
              </li>
              {/* giao hang tiet kiem */}
              <li>
                <a href="fb.com">
                  <img src={ghtk} alt="Giao hang tiet kiem" />
                </a>
              </li>
              {/* Giao hang nhanh */}
              <li>
                <a href="fb.com">
                  <img src={ghn} alt="Giao hang nhanh" />
                </a>
              </li>
              {/* Viettel post */}
              <li>
                <a href="fb.com">
                  <img src={viettelpost} alt="Viettel Post" />
                </a>
              </li>
              {/* VietNam Post */}
              <li>
                <a href="fb.com">
                  <img src={vietnampost} alt="Viet Nam Post" />
                </a>
              </li>
              {/* J & T express */}
              <li>
                <a href="fb.com">
                  <img src={jandt} alt="J & T Express" />
                </a>
              </li>
              {/* GrabExpress */}
              <li>
                <a href="fb.com">
                  <img src={grabexpress} alt="Grab Express" />
                </a>
              </li>
              {/* ninjavan */}
              <li>
                <a href="fb.com">
                  <img src={ninjavan} alt="ninjavan" />
                </a>
              </li>
              {/* BEST Express */}
              <li>
                <a href="fb.com">
                  <img src={bestexpress} alt="BEST Express" />
                </a>
              </li>
              {/* be */}
              <li>
                <a href="fb.com">
                  <img src={be} alt="be" />
                </a>
              </li>
              {/* ahamove */}
              <li>
                <a href="fb.com">
                  <img src={ahamove} alt="ahamove" />
                </a>
              </li>
            </ul>
          </div>
          {/* child__4 */}
          <div className="h-full w-1/5">
            {/* child__4__wrap */}
            <div className="child__4__wrap">
              <div className="child__header">THEO DÕI CHÚNG TÔI TRÊN</div>
              <ul>
                {/* facebook */}
                <li>
                  <a href="fb.com">
                    <img src={fb} alt="Facebook" />
                  </a>
                  <span>Facebook</span>
                </li>
                {/* instagram */}
                <li>
                  <a href="fb.com">
                    <img src={ig} alt="Instagram" />
                  </a>
                  <span>Instagram</span>
                </li>
                {/* linked */}
                <li>
                  <a href="fb.com">
                    <img src={inn} alt="Linked" />
                  </a>
                  <span>Linked</span>
                </li>
              </ul>
            </div>
          </div>
          {/* child__5 */}
          <div className="h-full w-1/5">
            {/* child__header */}
            <div className="child__header">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</div>
            {/* child__5__wrap */}
            <div className="child__5__wrap">
              {/* qr */}
              <div>
                <a href="fb.com">
                  <img src={qr} alt="QR" className="qr" />
                </a>
              </div>
              {/* store */}
              <div className="store">
                {/*  chplay */}
                <a href="fb.com" className="flex items-center justify-center">
                  <img src={chplay} alt="CH Play" />
                </a>
                {/* apple */}
                <a href="fb.com" className="flex items-center justify-center">
                  <img src={applestore} alt="Apple Store" />
                </a>
                {/* appgallery */}
                <a href="fb.com" className="flex items-center justify-center">
                  <img src={appgallery} alt="Appgallery" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* nation */}
        <div className="nation flex">
          {/* nation__left */}
          <div className="nation__left flex items-center">
            © 2024 Shopee. Tất cả các quyền được bảo lưu.
          </div>
          {/* nation__right */}
          <div className="nation__right flex">
            {/* nation__right left */}
            <div className="flex items-center">Quốc gia & Khu vực:</div>
            {/* nation__right right */}
            <div>
              <a href="fb.com">Singapore</a>
            </div>
            <div>
              <a href="fb.com">Indonesia</a>
            </div>
            <div>
              <a href="fb.com">Thái Lan</a>
            </div>
            <div>
              <a href="fb.com">Malaysia</a>
            </div>
            <div>
              <a href="fb.com">Việt Nam</a>
            </div>
            <div>
              <a href="fb.com">Philippines</a>
            </div>
            <div>
              <a href="fb.com">Brazil</a>
            </div>
            <div>
              <a href="fb.com">México</a>
            </div>
            <div>
              <a href="fb.com">Colombia</a>
            </div>
            <div>
              <a href="fb.com">Chile</a>
            </div>
            <div className="tail">
              <a href="fb.com">Đài Loan</a>
            </div>
          </div>
        </div>
        {/* footer__footer */}
        <div className="footer__footer">
          {/* footer__footer__content */}
          <div className="footer__footer__content">
            {/* wrap__policies */}
            <div className="wrap__policies flex justify-center">
              <div>
                <a href="fb.com">
                  <span>CHÍNH SÁCH BẢO MẬT</span>
                </a>
              </div>
              <div>
                <a href="fb.com">
                  <span>QUY CHẾ HOẠT ĐỘNG</span>
                </a>
              </div>
              <div>
                <a href="fb.com">
                  <span>CHÍNH SÁCH VẬN CHUYỂN</span>
                </a>
              </div>
              <div className="tail">
                <a href="fb.com">
                  <span>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</span>
                </a>
              </div>
            </div>
            {/* certificate */}
            <div className="certificate flex items-center justify-center">
              <div>
                <a href="fb.com">
                  <img src={dadangky} alt="Đã đăng ký" />
                </a>
              </div>
              <div>
                <a href="fb.com">
                  <img src={dadangky} alt="Đã đăng ký" />
                </a>
              </div>
              {/* certificate__child__3 */}
              <div className="certificate__child__3">
                <a href="fb.com">
                  <img src={banhrang} alt="Đã đăng ký" />
                </a>
              </div>
            </div>
            {/* company__name */}
            <div className="company__name flex justify-center items-center">
              Công ty TNHH IAMHAU
            </div>
            {/* contact__des */}
            <div className="contact__des">
              Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
              Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
              đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
            </div>
            <div className="contact__des">
              Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn
            </div>
            <div className="contact__des">
              Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội
              cấp lần đầu ngày 10/02/2015
            </div>

            <div className=" contact__des">
              © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
