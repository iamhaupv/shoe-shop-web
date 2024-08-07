import BannerShoe from "../BannerShoe";
import BannerVoucher from "../BannerVoucher";
import "./BannerViewHome.css";
const BannerViewHome = () => {
  return (
    <>
      {/* banner__container */}
      <div className="banner__container">
        {/* banner__container__content */}
        <div className="banner__container__content">
          <BannerShoe />
          <BannerVoucher />
        </div>
      </div>
    </>
  );
};

export default BannerViewHome;
