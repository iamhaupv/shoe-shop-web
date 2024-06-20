import BannerVoucher from "../components/BannerVoucher"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Title from "../components/Title"
import RowJordan from "../components/RowJordan"
import RowNike from "../components/RowNike"
import RowAdidas from "../components/RowAdidas"

const View = () =>{
    console.log(process.env.REACT_APP_API_KEY)
    console.log(process.env.REACT_APP_AUTH_DOMAIN)
    console.log(process.env.REACT_APP_PROJECT_ID)
    console.log(process.env.REACT_APP_PROJECT_ID)
    console.log(process.env.REACT_APP_STORAGE_BUKET)
    console.log(process.env.REACT_APP_MEASUREMENT_ID)
    return (
        <div>
            <Header/>
            <Nav/>
            <BannerVoucher/>
            <Title shoeName={"Jordan"} />
            <RowJordan/>
            <Title shoeName={"Nike"} />
            <RowNike/>
            <Title shoeName={"Adidas"}/>
            <RowAdidas/>
        </div>
    )
}
export default View