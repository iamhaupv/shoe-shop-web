import React, { useEffect, useState } from "react";
import FrameProduct from "./FrameProduct";
import jordan1 from "../assets/jordan-1.jpeg";
import FindAllProductService from "../services/product/FindAllProductService";

const RowJordan = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token invalid!");
        }
        const response = await FindAllProductService(token);
        setShoes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllProduct();
  }, []);
  // Lấy 4 phần tử đầu tiên trong mảng
  const firstFourShoes = shoes.slice(0, 4);
  return (
    <div className="flex flex-wrap w-full mx-auto px-[50px] mt-4 ">
      {firstFourShoes.map((shoe, index) => (
        <FrameProduct key={index} price={shoe.price} name={shoe.name} imageName={jordan1} />
      ))}
    </div>
  );
};

export default RowJordan;
