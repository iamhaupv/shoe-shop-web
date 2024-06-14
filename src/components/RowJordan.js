import FrameProduct from "./FrameProduct";
import jordan1 from "../assets/jordan-1.jpeg"
import jordan2 from "../assets/jordan-2.jpg"
import jordan3 from "../assets/jordan-3.jpg"
import jordan4 from "../assets/jordan-4.jpg"
const RowJordan = () => {
  return (
    <div className="flex w-full mx-auto px-[50px] mt-4">
      <FrameProduct imageName={jordan1} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={jordan2} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={jordan3} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={jordan4} />
    </div>
  );
};

export default RowJordan;
