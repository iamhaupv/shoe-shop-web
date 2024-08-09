import React, { useEffect, useState } from "react";
import FindAllProductLoveAndDiscountService from "../../services/product/FindAllProductLoveAndDiscountService";
import lovely from "../../assets/051cfc30b97d6ec91d2f.png";
import "../Product/Product.css";
export default function ProductLoveAndDiscount() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAllProduct = async () => {
      const response = await FindAllProductLoveAndDiscountService();
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
              <img src={lovely} alt="Logo Lovely" />
            </div>
          </div>
          {/* wrap__product */}
          <div className="wrap__product">
            {/* wrap__detail */}
            <div className="wrap__details">
              {/* discount */}
              <div className="discount">-45%</div>
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
