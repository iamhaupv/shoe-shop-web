import React, { useEffect, useState } from "react";
import product1 from "../assets/product1.webp";
import FindAllProductService from "../services/product/FindAllProductService";
export default function ContentListProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAllProduct = async () => {
      const response = await FindAllProductService();
      setProducts(response.data);
    };
    fetchAllProduct();
  }, []);
  return (
    <div
      style={{
        marginTop: "15px",
        flexDirection: "column",
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
        lineHeight: 1.2,
      }}
      className="flex justify-center items-center"
    >
      {/* header */}
      <div
        className="flex justify-center items-center"
        style={{
          width: "1200px",
          height: "60px",
          padding: "15px 46px",
          borderBottom: "4px solid #ee4d2d",
          background: "#ffffff",
        }}
      >
        <span
          style={{
            width: "123.66px",
            height: "19.2px",
            fontSize: "16px",
            color: "#EE4D2D",
          }}
        >
          GỢI Ý HÔM NAY
        </span>
      </div>
      {/* list product */}
      <div
        className="flex"
        style={{
          width: "1200px",
          fontSize: "14px",
          marginTop: "5px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product, index) => (
          <a href="fb.com">
            {" "}
            <div
              style={{
                width: "200px",
                height: "308px",
                padding: "5px",
              }}
            >
              <div
                style={{
                  width: "188.4px",
                  height: "298px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <img
                  style={{ width: "188.4px", height: "188.4px" }}
                  src={product.images[0]}
                  alt=""
                />
                <div
                  style={{
                    width: "188.4px",
                    height: "109.6px",
                    padding: "8px",
                  }}
                >
                  <div
                    className="flex justify-center items-center"
                    style={{
                      width: "172.4px",
                      height: "40px",
                      color: "#000000CC",
                      margin: "0px 0px 4px",
                    }}
                  >
                    {product.name}
                  </div>
                  <div
                    className="flex justify-center items-center"
                    style={{
                      width: "172.4px",
                      height: "20px",
                      margin: "0px 0px 8px",
                    }}
                  ></div>
                  <div
                    className="flex justify-between items-center"
                    style={{
                      width: "172.4px",
                      height: "20px",
                      margin: "0px 0px 8px",
                    }}
                  >
                    <div style={{ color: "#ee4d2d" }}>
                      <span style={{ fontSize: "12px" }}>₫</span>
                      <span style={{ fontSize: "16px" }}>{product.price}</span>
                    </div>
                    <div
                      style={{
                        width: "71.39px",
                        height: "16px",
                        color: "#000000DE",
                        fontSize: "12px",
                        margin: "0px 0px 0px 4px",
                      }}
                    >
                      da ban 188
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
        {/* <div
          style={{
            width: "200px",
            height: "308px",
            padding: "5px",
            border: "1px solid #e5e5e5",
          }}
        >
          <img src={product1} alt="" />
          <div style={{ width: "188.4px", height: "109.6px", padding: "8px" }}>
            <div
              className="flex justify-center items-center"
              style={{
                width: "172.4px",
                height: "40px",
                color: "#000000CC",
                margin: "0px 0px 4px",
              }}
            >
              dsfsafsfds
            </div>
            <div
              className="flex justify-center items-center"
              style={{
                width: "172.4px",
                height: "20px",
                margin: "0px 0px 8px",
              }}
            ></div>
            <div
              className="flex justify-between items-center"
              style={{
                width: "172.4px",
                height: "20px",
                margin: "0px 0px 8px",
              }}
            >
              <div>
                <span style={{ fontSize: "12px" }}>d</span>
                <span style={{ fontSize: "16px" }}>lkjl</span>
              </div>
              <div
                style={{
                  width: "71.39px",
                  height: "16px",
                  color: "#000000DE",
                  fontSize: "12px",
                  margin: "0px 0px 0px 4px",
                }}
              >
                da ban 188
              </div>
            </div>
          </div>
        </div> */}
        {/* <div style={{ width: "200px", height: "308px", padding: "5px" }}>
          <img src={product1} alt="" />
        </div>
        <div style={{ width: "200px", height: "308px", padding: "5px" }}>
          <img src={product1} alt="" />
        </div>
        <div style={{ width: "200px", height: "308px", padding: "5px" }}>
          <img src={product1} alt="" />
        </div>
        <div style={{ width: "200px", height: "308px", padding: "5px" }}>
          <img src={product1} alt="" />
        </div>
        <div style={{ width: "200px", height: "308px", padding: "5px" }}>
          <img src={product1} alt="" />
        </div> */}
      </div>
    </div>
  );
}
