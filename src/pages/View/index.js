import BannerViewHome from "../../components/BannerViewHome";
import Header from "../../components/Header";
import FooterRegisterLogin from "../../components/FooterRegisterLogin";
import NavContent from "../../components/NavContent";
import Content from "../../components/Content";

const View = () => {
  return (
    <>
      <div>
        <Header />
        <BannerViewHome />
        <NavContent />
        <Content />
        <FooterRegisterLogin />
      </div>
    </>
  );
};
export default View;
