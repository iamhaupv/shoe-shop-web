import BannerVoucher from "../components/BannerVoucher"
import Header from "../components/Header"
import Title from "../components/Title"
import RowJordan from "../components/RowJordan"
import RowNike from "../components/RowNike"
import RowAdidas from "../components/RowAdidas"
import FooterRegisterLogin from "../components/FooterRegisterLogin"

const View = () =>{
    return (
        <div>
            <Header/>
            <BannerVoucher/>
            <Title shoeName={"Jordan"} />
            <RowJordan/>
            <Title shoeName={"Nike"} />
            <RowNike/>
            <Title shoeName={"Adidas"}/>
            <RowAdidas/>
            <FooterRegisterLogin/>
        </div>
    )
}
export default View