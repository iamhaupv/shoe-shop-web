import FrameProduct from "./FrameProduct";
import jordan1 from "../assets/jordan-1.jpeg";
import jordan2 from "../assets/jordan-2.jpg";
import jordan3 from "../assets/jordan-3.jpg";
import jordan4 from "../assets/jordan-4.jpg";
import { useEffect, useState } from "react";
import FindAllProductService from "../services/product/FindAllProductService";
const RowJordan = () => {
  const [name, setName] = useState("");
  const [shoes, setShoes] = useState([])
  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token invalid!");
        }
        const response = await FindAllProductService(token);
        setShoes(response.data)
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchAllProduct();
  }, []);
  return (
    <div className="flex w-full mx-auto px-[50px] mt-4">
      {/* <FrameProduct imageName={jordan1} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={jordan2} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={jordan3} />
      <div className="w-[8px]"></div>
      <FrameProduct imageName={jordan4} /> */}
      {shoes.map((shoe, index) => (
        <FrameProduct name={shoe.name} imageName={jordan1} />
      ))}
    </div>
  );
};

export default RowJordan;
