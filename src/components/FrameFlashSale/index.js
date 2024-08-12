import flash_sale_big from "../../assets/flash_sale_big.png";
import ProductFlashSale from "../ProductFlashSale";
import "./FrameFlashSale.css";
export default function FrameFlashSale() {
  return (
    <>
      {/* container__frame__flash__sale */}
      <div className="container__frame__flash__sale">
        {/* header__flash__sale */}
        <div className="header__flash__sale">
          {/* wrap__whole__logo */}
          <div className="wrap__whole__logo">
            {/* wrap__logo */}
            <div className="wrap__logo">
              <img src={flash_sale_big} alt="Flash Sale" />
            </div>
            {/* wrap__countdown */}
            <div className="wrap__countdown">
              <div className="countdown">45</div>
              <div className="countdown__space"></div>
              <div className="countdown__space"></div>
              <div className="countdown">10</div>
              <div className="countdown__space"></div>
              <div className="countdown__space"></div>
              <div className="countdown">10</div>
            </div>
          </div>
        </div>
        <ProductFlashSale/>
      </div>
    </>
  );
}
