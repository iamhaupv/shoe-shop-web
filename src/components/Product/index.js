import React, { useEffect, useState } from "react";
import mall from "../../assets/mall.png";
import FindAllProductShopMallService from "../../services/product/FindAllProductShopMallService";
import "./Product.css";
export default function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAllProduct = async () => {
      const response = await FindAllProductShopMallService();
      setProducts(response.data);
    };
    fetchAllProduct();
  }, []);
  return (
    <>
      {/* content__product */}
      {products.map((product) => (
        <a href="fb.com" key={product._id} className="content__product">
          {/* logo__mall */}
          <div className="logo__mall">
            {/* logo__mall__child */}
            <div className="logo__mall__child">
              <img src={mall} alt="logo__mall" />
            </div>
          </div>
          {/* wrap__product */}
          <div className="wrap__product">
            {/* wrap__detail */}
            <div className="wrap__details">
              <img src={product.images[0]} alt={product.name} />
              {/* des */}
              <div className="des">
                {/* des__name */}
                <div className="des__name">{product.name}</div>
                {/* des__active */}
                <div className="des__active"></div>
                {/* wrap__price__sold */}
                <div className="wrap__price__sold">
                  {/* child__price__sold */}
                  <div className="child__price__sold">
                    <span>₫</span>
                    <span>{product.price}</span>
                  </div>
                  {/* sold */}
                  <div className="sold">da ban 188</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}
