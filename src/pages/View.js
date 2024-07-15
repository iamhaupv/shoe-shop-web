import Banner from "../components/Banner";
import Header from "../components/Header";
import Title from "../components/Title";
import RowJordan from "../components/RowJordan";
import RowNike from "../components/RowNike";
import RowAdidas from "../components/RowAdidas";
import FooterRegisterLogin from "../components/FooterRegisterLogin";
import ContentNavBar from "../components/ContentNavBar";
import Content from "../components/Content";

const View = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ContentNavBar />
      <Content />
      <FooterRegisterLogin />
      {/* <Title shoeName={"Jordan"} />
      <RowJordan />
      <Title shoeName={"Nike"} />
      <RowNike />
      <Title shoeName={"Adidas"} />
      <RowAdidas /> */}
      
    </div>
  );
};
export default View;
