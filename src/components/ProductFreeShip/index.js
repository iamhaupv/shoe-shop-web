import React, { useEffect, useState } from "react";
import freeship from "../../assets/vn-11134258-7r98o-lxhaq518hlg993.png";
import FindAllProductFreeShipService from "../../services/product/FindAllProductFreeShipService";
import "../Product/Product.css";
import "./ProductFreeShip.css";
export default function ProductFreeShip() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAllProduct = async () => {
      const response = await FindAllProductFreeShipService();
      setProducts(response.data);
    };
    fetchAllProduct();
  }, []);
  return (
    // <>
    //   {products.map((product, index) => (
    //     <a href="fb.com" style={{ position: "relative" }}>
    //       <div
    //         style={{
    //           width: "200px",
    //           height: "308px",
    //           padding: "5px",
    //         }}
    //       >
    //         <div
    //           style={{
    //             width: "188.4px",
    //             height: "298px",
    //             border: "1px solid #e5e5e5",
    //             position: "relative",
    //           }}
    //         >
    //           <div
    //             style={{
    //               height: "auto",
    //               width: "220px",
    //               zIndex: "999",
    //               position: "absolute",
    //               top: "166px",
    //             }}
    //           >
    //             <img src={freeship} alt="" />
    //           </div>
    //           <img
    //             style={{ width: "188.4px", height: "188.4px" }}
    //             src={product.images[0]}
    //             alt=""
    //           />
    //           <div
    //             style={{
    //               width: "188.4px",
    //               height: "109.6px",
    //               padding: "8px",
    //             }}
    //           >
    //             <div
    //               className="flex justify-center items-center"
    //               style={{
    //                 width: "172.4px",
    //                 height: "40px",
    //                 color: "#000000CC",
    //                 margin: "0px 0px 4px",
    //               }}
    //             >
    //               {product.name}
    //             </div>
    //             <div
    //               className="flex justify-center items-center"
    //               style={{
    //                 width: "172.4px",
    //                 height: "20px",
    //                 margin: "0px 0px 8px",
    //               }}
    //             ></div>
    //             <div
    //               className="flex justify-between items-center"
    //               style={{
    //                 width: "172.4px",
    //                 height: "20px",
    //                 margin: "0px 0px 8px",
    //               }}
    //             >
    //               <div style={{ color: "#ee4d2d" }}>
    //                 <span style={{ fontSize: "12px" }}>₫</span>
    //                 <span style={{ fontSize: "16px" }}>{product.price}</span>
    //               </div>
    //               <div
    //                 style={{
    //                   width: "71.39px",
    //                   height: "16px",
    //                   color: "#000000DE",
    //                   fontSize: "12px",
    //                   margin: "0px 0px 0px 4px",
    //                 }}
    //               >
    //                 da ban 188
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </a>
    //   ))}
    // </>
    <>
      {/* content__product */}
      {products.map((product) => (
        <a href="fb.com" key={product._id} className="content__product">
          {/* wrap__product */}
          <div className="wrap__product">
            {/* wrap__detail */}
            <div className="wrap__details">
              {/* free__ship */}
              <div className="free__ship">
                <img src={freeship} alt="Free Ship" />
              </div>
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
