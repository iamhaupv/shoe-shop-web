import Voucher from "./Voucher"
import BannerAnimate from "./BannerAnimate"

const BannerVoucher = () => {
    return (
        <div className="flex">
            <BannerAnimate/>
            <Voucher/>
        </div>
    )
}

export default BannerVoucher