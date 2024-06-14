import Voucher from "./Voucher"
import BannerAnimate from "./BannerAnimate"

const BannerVoucher = () => {
    return (
        <div className="flex w-full px-[50px] mx-auto items-center justify-between">
            <BannerAnimate/>
            <Voucher/>
        </div>
    )
}

export default BannerVoucher