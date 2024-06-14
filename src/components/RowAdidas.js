import FrameProduct from "./FrameProduct";
import adidas1 from "../assets/adidas-1.webp"
import adidas2 from "../assets/adidas-2.jpg"
import adidas3 from "../assets/adidas-3.webp"
import adidas4 from "../assets/adidas-4.webp"
const RowAdidas = () => {
  return (
    <div className="flex w-full mx-auto px-[50px] mt-4">
      <FrameProduct imageName={adidas1} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={adidas2} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={adidas3} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={adidas4} />
    </div>
  );
};

export default RowAdidas;
