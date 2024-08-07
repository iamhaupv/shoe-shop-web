import BannerShoe from "../BannerShoe";
import BannerVoucher from "../BannerVoucher";

const BannerViewHome = () => {
  return (
    <>
      <div className="flex justify-center px-[50px] mx-auto">
        <div
          className="flex items-center justify-between"
          style={{ width: "1200px" }}
        >
          <BannerShoe />
          <BannerVoucher />
        </div>
      </div>
    </>
  );
};

export default BannerViewHome;
