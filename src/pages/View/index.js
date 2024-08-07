import Banner from "../../components/Banner";
import Header from "../../components/Header";
import FooterRegisterLogin from "../../components/FooterRegisterLogin";
import ContentNavBar from "../../components/ContentNavBar";
import Content from "../../components/Content";

const View = () => {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <ContentNavBar />
        <Content />
        <FooterRegisterLogin />
      </div>
    </>
  );
};
export default View;
