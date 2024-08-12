import React, { useEffect, useState } from "react";
import ex1 from "../../assets/ex1.jpg";
import mall from "../../assets/mall.png";
import FindAllProductFlashSaleService from "../../services/product/FindAllProductFlashSaleService";
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
      {/* product */}
      <div className="flex" style={{ width: "1200px", flexWrap: "wrap" }}>
        {/* for */}
        {products.map((product, index) => (
          <a href="fb.com">
            <div
              style={{
                width: "200px",
                height: "248px",
                background: "#ffffff",
                padding: "0px 15px",
              }}
            >
              {/* mall */}
              <div
                className="absolute flex justify-center items-center"
                style={{
                  width: "28px",
                  height: "16px",
                  padding: "0px 4px",
                  background: "#D0011B",
                }}
              >
                <img
                  src={mall}
                  alt="Mall"
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>
              {/* img */}
              <div style={{ width: "170px", height: "170px" }}>
                <img
                  src={product.images[0]}
                  alt="ex1"
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>
              {/* des */}
              <div
                style={{
                  width: "170px",
                  height: "78px",
                  padding: "15px 0px",
                }}
              >
                {/*   */}
                <div
                  className="flex justify-center items-center"
                  style={{
                    width: "170px",
                    height: "27px",
                    fontSize: "18px",
                    color: "#EE4D2D",
                  }}
                >
                  <span
                    style={{
                      width: "9.24px",
                      height: "21.6px",
                      margin: "0px 2px 0px 0px",
                    }}
                  >
                    d
                  </span>
                  <div
                    style={{
                      width: "80.09px",
                      height: "21.6px",
                    }}
                  >
                    4564456
                  </div>
                </div>
                {/*  */}
                <div
                  style={{
                    width: "170px",
                    height: "16px",
                    padding: "0px 10px",
                    background: "#ee4d2d",
                    marginTop: "8px",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    className="flex justify-center items-center"
                    style={{
                      width: "150px",
                      height: "16px",
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    ĐANG BÁN CHẠY
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}

        {/* 1 */}
        <div
          style={{
            width: "200px",
            height: "248px",
            background: "#ffffff",
            padding: "0px 15px",
          }}
        >
          {/* mall */}
          <div
            className="absolute flex justify-center items-center"
            style={{
              width: "28px",
              height: "16px",
              padding: "0px 4px",
              background: "#D0011B",
            }}
          >
            <img
              src={mall}
              alt="Mall"
              className="object-cover w-[100%] h-[100%]"
            />
          </div>
          {/* img */}
          <div style={{ width: "170px", height: "170px" }}>
            <img src={ex1} alt="ex1" />
          </div>
          {/* des */}
          <div style={{ width: "170px", height: "78px", padding: "15px 0px" }}>
            {/*   */}
            <div
              className="flex justify-center items-center"
              style={{
                width: "170px",
                height: "27px",
                fontSize: "18px",
                color: "#EE4D2D",
              }}
            >
              <span
                style={{
                  width: "9.24px",
                  height: "21.6px",
                  margin: "0px 2px 0px 0px",
                }}
              >
                d
              </span>
              <div
                style={{
                  width: "80.09px",
                  height: "21.6px",
                }}
              >
                4564456
              </div>
            </div>
            {/*  */}
            <div
              style={{
                width: "170px",
                height: "16px",
                padding: "0px 10px",
                background: "#ee4d2d",
                marginTop: "8px",
                borderRadius: "10px",
              }}
            >
              <div
                className="flex justify-center items-center"
                style={{
                  width: "150px",
                  height: "16px",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                ĐANG BÁN CHẠY
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div
          style={{
            width: "200px",
            height: "248px",
            background: "#ffffff",
            padding: "0px 15px",
          }}
        >
          {/* mall */}
          <div
            className="absolute flex justify-center items-center"
            style={{
              width: "28px",
              height: "16px",
              padding: "0px 4px",
              background: "#D0011B",
            }}
          >
            <img
              src={mall}
              alt="Mall"
              className="object-cover w-[100%] h-[100%]"
            />
          </div>
          {/* img */}
          <div style={{ width: "170px", height: "170px" }}>
            <img src={ex1} alt="ex1" />
          </div>
          {/* des */}
          <div style={{ width: "170px", height: "78px", padding: "15px 0px" }}>
            {/*   */}
            <div
              className="flex justify-center items-center"
              style={{
                width: "170px",
                height: "27px",
                fontSize: "18px",
                color: "#EE4D2D",
              }}
            >
              <span
                style={{
                  width: "9.24px",
                  height: "21.6px",
                  margin: "0px 2px 0px 0px",
                }}
              >
                d
              </span>
              <div
                style={{
                  width: "80.09px",
                  height: "21.6px",
                }}
              >
                4564456
              </div>
            </div>
            {/*  */}
            <div
              style={{
                width: "170px",
                height: "16px",
                padding: "0px 10px",
                background: "#ee4d2d",
                marginTop: "8px",
                borderRadius: "10px",
              }}
            >
              <div
                className="flex justify-center items-center"
                style={{
                  width: "150px",
                  height: "16px",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                ĐANG BÁN CHẠY
              </div>
            </div>
          </div>
        </div>
        {/*3 */}
        <div
          style={{
            width: "200px",
            height: "248px",
            background: "#ffffff",
            padding: "0px 15px",
          }}
        >
          {/* mall */}
          <div
            className="absolute flex justify-center items-center"
            style={{
              width: "28px",
              height: "16px",
              padding: "0px 4px",
              background: "#D0011B",
            }}
          >
            <img
              src={mall}
              alt="Mall"
              className="object-cover w-[100%] h-[100%]"
            />
          </div>
          {/* img */}
          <div style={{ width: "170px", height: "170px" }}>
            <img src={ex1} alt="ex1" />
          </div>
          {/* des */}
          <div style={{ width: "170px", height: "78px", padding: "15px 0px" }}>
            {/*   */}
            <div
              className="flex justify-center items-center"
              style={{
                width: "170px",
                height: "27px",
                fontSize: "18px",
                color: "#EE4D2D",
              }}
            >
              <span
                style={{
                  width: "9.24px",
                  height: "21.6px",
                  margin: "0px 2px 0px 0px",
                }}
              >
                d
              </span>
              <div
                style={{
                  width: "80.09px",
                  height: "21.6px",
                }}
              >
                4564456
              </div>
            </div>
            {/*  */}
            <div
              style={{
                width: "170px",
                height: "16px",
                padding: "0px 10px",
                background: "#ee4d2d",
                marginTop: "8px",
                borderRadius: "10px",
              }}
            >
              <div
                className="flex justify-center items-center"
                style={{
                  width: "150px",
                  height: "16px",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                ĐANG BÁN CHẠY
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div
          style={{
            width: "200px",
            height: "248px",
            background: "#ffffff",
            padding: "0px 15px",
          }}
        >
          {/* mall */}
          <div
            className="absolute flex justify-center items-center"
            style={{
              width: "28px",
              height: "16px",
              padding: "0px 4px",
              background: "#D0011B",
            }}
          >
            <img
              src={mall}
              alt="Mall"
              className="object-cover w-[100%] h-[100%]"
            />
          </div>
          {/* img */}
          <div style={{ width: "170px", height: "170px" }}>
            <img src={ex1} alt="ex1" />
          </div>
          {/* des */}
          <div style={{ width: "170px", height: "78px", padding: "15px 0px" }}>
            {/*   */}
            <div
              className="flex justify-center items-center"
              style={{
                width: "170px",
                height: "27px",
                fontSize: "18px",
                color: "#EE4D2D",
              }}
            >
              <span
                style={{
                  width: "9.24px",
                  height: "21.6px",
                  margin: "0px 2px 0px 0px",
                }}
              >
                d
              </span>
              <div
                style={{
                  width: "80.09px",
                  height: "21.6px",
                }}
              >
                4564456
              </div>
            </div>
            {/*  */}
            <div
              style={{
                width: "170px",
                height: "16px",
                padding: "0px 10px",
                background: "#ee4d2d",
                marginTop: "8px",
                borderRadius: "10px",
              }}
            >
              <div
                className="flex justify-center items-center"
                style={{
                  width: "150px",
                  height: "16px",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                ĐANG BÁN CHẠY
              </div>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div
          style={{
            width: "200px",
            height: "248px",
            background: "#ffffff",
            padding: "0px 15px",
          }}
        >
          {/* mall */}
          <div
            className="absolute flex justify-center items-center"
            style={{
              width: "28px",
              height: "16px",
              padding: "0px 4px",
              background: "#D0011B",
            }}
          >
            <img
              src={mall}
              alt="Mall"
              className="object-cover w-[100%] h-[100%]"
            />
          </div>
          {/* img */}
          <div style={{ width: "170px", height: "170px" }}>
            <img src={ex1} alt="ex1" />
          </div>
          {/* des */}
          <div style={{ width: "170px", height: "78px", padding: "15px 0px" }}>
            {/*   */}
            <div
              className="flex justify-center items-center"
              style={{
                width: "170px",
                height: "27px",
                fontSize: "18px",
                color: "#EE4D2D",
              }}
            >
              <span
                style={{
                  width: "9.24px",
                  height: "21.6px",
                  margin: "0px 2px 0px 0px",
                }}
              >
                d
              </span>
              <div
                style={{
                  width: "80.09px",
                  height: "21.6px",
                }}
              >
                4564456
              </div>
            </div>
            {/*  */}
            <div
              style={{
                width: "170px",
                height: "16px",
                padding: "0px 10px",
                background: "#ee4d2d",
                marginTop: "8px",
                borderRadius: "10px",
              }}
            >
              <div
                className="flex justify-center items-center"
                style={{
                  width: "150px",
                  height: "16px",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                ĐANG BÁN CHẠY
              </div>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div
          style={{
            width: "200px",
            height: "248px",
            background: "#ffffff",
            padding: "0px 15px",
          }}
        >
          {/* mall */}
          <div
            className="absolute flex justify-center items-center"
            style={{
              width: "28px",
              height: "16px",
              padding: "0px 4px",
              background: "#D0011B",
            }}
          >
            <img
              src={mall}
              alt="Mall"
              className="object-cover w-[100%] h-[100%]"
            />
          </div>
          {/* img */}
          <div style={{ width: "170px", height: "170px" }}>
            <img src={ex1} alt="ex1" />
          </div>
          {/* des */}
          <div style={{ width: "170px", height: "78px", padding: "15px 0px" }}>
            {/*   */}
            <div
              className="flex justify-center items-center"
              style={{
                width: "170px",
                height: "27px",
                fontSize: "18px",
                color: "#EE4D2D",
              }}
            >
              <span
                style={{
                  width: "9.24px",
                  height: "21.6px",
                  margin: "0px 2px 0px 0px",
                }}
              >
                d
              </span>
              <div
                style={{
                  width: "80.09px",
                  height: "21.6px",
                }}
              >
                4564456
              </div>
            </div>
            {/*  */}
            <div
              style={{
                width: "170px",
                height: "16px",
                padding: "0px 10px",
                background: "#ee4d2d",
                marginTop: "8px",
                borderRadius: "10px",
              }}
            >
              <div
                className="flex justify-center items-center"
                style={{
                  width: "150px",
                  height: "16px",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                ĐANG BÁN CHẠY
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
