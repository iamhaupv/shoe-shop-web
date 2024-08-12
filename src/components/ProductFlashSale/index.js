import React, { useEffect, useState } from "react";
import mall from "../../assets/mall.png";
import FindAllProductFlashSaleService from "../../services/product/FindAllProductFlashSaleService";
import "./ProductFlashSale.css";
export default function ProductFlashSale() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductFlashSale = async () => {
      const response = await FindAllProductFlashSaleService();
      setProducts(response.data);
    };
    fetchProductFlashSale();
  }, []);
  return (
    <>
      {/* container__product__flash__sale */}
      <div className="container__product__flash__sale">
        {/* for */}
        {products.map((product) => (
          <a href="fb.com" key={product._id}>
            {/* wrap__product */}
            <div className="wrap__product">
              {/* logo__mall */}
              <div className="img__mall">
                <img src={mall} alt="Mall" />
              </div>
              {/* img__product */}
              <div className="img__product">
                <img src={product.images[0]} alt={product.name} />
              </div>
              {/* space */}
              <div className="space"></div>
              {/* des */}
              <div className="des">
                {/* des__price  */}
                <div className="des__price">
                  {/* unit */}
                  <span className="unit">₫</span>
                  <div className="price">{product.price}</div>
                </div>
                {/* loading */}
                <div className="loading">
                  {/* loading__child */}
                  <div className="loading__child">ĐANG BÁN CHẠY</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
