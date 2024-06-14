import BannerVoucher from "../components/BannerVoucher"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Title from "../components/Title"
import RowJordan from "../components/RowJordan"

const View = () =>{
    return (
        <div>
            <Header/>
            <Nav/>
            <BannerVoucher/>
            <Title shoeName={"Jordan"} />
            <RowJordan/>
            <Title shoeName={"Nike"} />
            <RowJordan/>
        </div>
    )
}
export default View