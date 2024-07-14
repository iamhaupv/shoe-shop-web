import React from "react";
import flash_sale_big from "../assets/flash_sale_big.png";
import ex1 from "../assets/ex1.jpg";
import mall from "../assets/mall.png";
export default function ContentFlashSale() {
  return (
    <div
      className="flex justify-center items-center"
      style={{ flexDirection: "column" }}
    >
      <div
        className="flex items-center"
        style={{
          width: "1200px",
          height: "60px",
          padding: "15px 20px",
          background: "#ffffff",
          marginTop: "15px",
        }}
      >
        <div
          className="flex items-center"
          style={{ width: "220px", height: "30px", display: "flex" }}
        >
          {/*  */}
          <div
            className="flex items-center"
            style={{ width: "130px", height: "30px" }}
          >
            <img src={flash_sale_big} alt="Flash Sale" />
          </div>
          {/*  */}
          <div
            style={{
              width: "77.28px",
              height: "25.2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "5px",
            }}
          >
            {/* hour */}
            <div
              style={{
                width: "21.84px",
                height: "15.96px",
                background: "#000000",
                margin: "0px 0px 4px",
                padding: "1px 3px",
                textAlign: "center",
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: "bold",
                borderRadius: "3px",
              }}
            >
              45
            </div>
            {/*  */}
            <div style={{ width: "2.52px", height: "7.14px" }}>
              <span style={{ width: "2.52px", height: "2.52px" }}></span>
            </div>
            <div style={{ width: "2.52px", height: "7.14px" }}>
              <span style={{ width: "2.52px", height: "2.52px" }}></span>
            </div>
            {/* minutes */}
            <div
              style={{
                width: "21.84px",
                height: "15.96px",
                background: "#000000",
                margin: "0px 0px 4px",
                padding: "1px 3px",
                textAlign: "center",
                alignItems: "center",
                color: "#ffffff",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "bold",
                borderRadius: "3px",
              }}
            >
              10
            </div>
            {/*  */}
            <div style={{ width: "2.52px", height: "7.14px" }}>
              <span style={{ width: "2.52px", height: "2.52px" }}></span>
            </div>
            <div style={{ width: "2.52px", height: "7.14px" }}>
              <span style={{ width: "2.52px", height: "2.52px" }}></span>
            </div>
            {/* second */}
            <div
              style={{
                width: "21.84px",
                height: "15.96px",
                background: "#000000",
                margin: "0px 0px 4px",
                padding: "1px 3px",
                textAlign: "center",
                alignItems: "center",
                color: "#ffffff",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "bold",
                borderRadius: "3px",
              }}
            >
              10
            </div>
          </div>
        </div>
      </div>
      {/* product */}
      <div className="flex">
        {/*  */}
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
        {/*  */}
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
        {/*  */}
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
        {/*  */}
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
        {/*  */}
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
        {/*  */}
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
    </div>
  );
}
