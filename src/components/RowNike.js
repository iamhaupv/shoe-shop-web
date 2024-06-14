import FrameProduct from "./FrameProduct";
import nike1 from "../assets/nike-1.jpg"
import nike2 from "../assets/nike-2.jpg"
import nike3 from "../assets/nike-3.jpg"
import nike4 from "../assets/nike-4.webp"
const RowNike = () => {
  return (
    <div className="flex w-full mx-auto px-[50px] mt-4">
      <FrameProduct imageName={nike1} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={nike2} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={nike3} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={nike4} />
    </div>
  );
};

export default RowNike;
