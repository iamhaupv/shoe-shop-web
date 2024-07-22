// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import logo_h from "../assets/logo_h.png";
// import free_ship from "../assets/vn-50009109-a0c28c638997b7922bdafe1c5c704807.png";

// export default function CartContent() {
//   return (
//     <div
//       style={{
//         fontFamily:
//           "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
//         lineHeight: 1.2,
//         background: "#ffffff",
//         alignItems: "center"
//       }}
//     >
//       {/* section */}
//       <div
//         className="flex justify-center items-center"
//         style={{
//           width: "auto",
//           height: "100.8px",
//           boxSizing: "border-box",
//         }}
//       >
//         {/*  */}
//         <div
//           className="flex items-center"
//           style={{
//             width: "1200px",
//             height: "46px",
//           }}
//         >
//           {/*  */}
//           <div
//             className="flex items-center"
//             style={{
//               width: "579px",
//               height: "46px",
//               padding: "0px 0px 0px 18px",
//             }}
//           >
//             <div
//               className="flex justify-center items-center"
//               style={{
//                 width: "130px",
//                 height: "46px",
//               }}
//             >
//               <div>
//                 <img src={logo_h} alt="" />
//               </div>
//               <span className="" style={{ fontSize: "24px" }}>
//                 &nbsp;auShop
//               </span>
//             </div>
//             <div
//               className="flex justify-center items-center"
//               style={{
//                 width: "100.3px",
//                 height: "30px",
//                 margin: "0px 0px 1px 15px",
//                 padding: "0px 0px 0px 15px",
//                 fontSize: "20px",
//                 color: "#ee4d2d",
//               }}
//             >
//               Giỏ Hàng
//             </div>
//           </div>
//           <div
//             className="flex justify-center items-center"
//             style={{
//               width: "621px",
//               height: "40px",
//               background: "#ffffff",
//               border: "2px solid rgb(238, 77, 45)",
//             }}
//           >
//             <div
//               style={{
//                 padding: "0px 10px",
//                 width: "537.8px",
//                 height: "36.8px",
//               }}
//             >
//               <input
//                 style={{
//                   width: "517.8px",
//                   height: "36.8px",
//                   background: "#ffffff",
//                   outline: "none",
//                 }}
//                 placeholder="Tiệc Tối No Nê Giảm 75.000Đ"
//               />
//             </div>
//             <button
//               style={{
//                 width: "80px",
//                 height: "36.8px",
//                 padding: "0px 15px",
//                 background: "#ee4d2d",
//               }}
//             >
//               <FontAwesomeIcon icon={faMagnifyingGlass} />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="justify-center items-center" style={{
//         width: "1200px",
//         height: "10px",
//         background: "red"
//       }}>

//       </div>
//       {/* main */}

//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import logo_h from "../assets/logo_h.png";
import free_ship from "../assets/vn-50009109-a0c28c638997b7922bdafe1c5c704807.png";
import flash_sale_big from "../assets/flash_sale_big.png";
import two_voucher from "../assets/vn-11134258-7r98o-lxhaq518hlg993.png";
import FindAllProductFromCartService from "../services/cart/FindAllProductFromCartService";
export default function CartContent() {
  const [products, setProducts] = useState([])
    useEffect(()=>{
        const fectchData = async() => {
            try {
                const token = localStorage.getItem("token")
                if(!token){
                    throw new Error("Token is valid")
                }
                const user = JSON.parse(atob(token.split(".")[1]))
                const response = await FindAllProductFromCartService(token, user.data.cart)
                setProducts(response.data.products)
                // console.log(response.data.products[0].product.images[0]);
            } catch (error) {
                throw new Error (error)
            }
        }
        fectchData()
    }, [])    
    console.log(products)
  return (
    <div
      style={{
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
        lineHeight: 1.2,
        background: "#ffffff",
        alignItems: "center",
      }}
    >
      {/* section */}
      <div
        className="flex justify-center items-center"
        style={{
          width: "auto",
          height: "100.8px",
          boxSizing: "border-box",
        }}
      >
        {/*  */}
        <div
          className="flex items-center"
          style={{
            width: "1200px",
            height: "46px",
          }}
        >
          {/*  */}
          <div
            className="flex items-center"
            style={{
              width: "579px",
              height: "46px",
              padding: "0px 0px 0px 18px",
            }}
          >
            <div
              className="flex justify-center items-center"
              style={{
                width: "130px",
                height: "46px",
              }}
            >
              <div>
                <img src={logo_h} alt="" />
              </div>
              <span className="" style={{ fontSize: "24px" }}>
                &nbsp;auShop
              </span>
            </div>
            <div
              className="flex justify-center items-center"
              style={{
                width: "100.3px",
                height: "30px",
                margin: "0px 0px 1px 15px",
                padding: "0px 0px 0px 15px",
                fontSize: "20px",
                color: "#ee4d2d",
              }}
            >
              Giỏ Hàng
            </div>
          </div>
          <div
            className="flex justify-center items-center"
            style={{
              width: "621px",
              height: "40px",
              background: "#ffffff",
              border: "2px solid rgb(238, 77, 45)",
            }}
          >
            <div
              style={{
                padding: "0px 10px",
                width: "537.8px",
                height: "36.8px",
              }}
            >
              <input
                style={{
                  width: "517.8px",
                  height: "36.8px",
                  background: "#ffffff",
                  outline: "none",
                }}
                placeholder="Tiệc Tối No Nê Giảm 75.000Đ"
              />
            </div>
            <button
              style={{
                width: "80px",
                height: "36.8px",
                padding: "0px 15px",
                background: "#ee4d2d",
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </div>
      {/* main */}
      <div
        className="justify-center items-center"
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "1200px",
          margin: "0 auto",
        }}
      >
        {/*  */}
        <div
          className="flex items-center"
          style={{
            width: "1200px",
            height: "45.6px",
            margin: "0px 0px 10px",
            padding: "12px 16px",
            background: "#FFFEFB",
          }}
        >
          <img className="w-[24px] h-[20px]" src={free_ship} alt="" />
          <span
            style={{
              height: "16.8px",
              fontSize: "14px",
              margin: "0px 0px 0px 8px",
              color: "#222222",
            }}
          >
            Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển
            bạn nhé!
          </span>
        </div>
        {/*  */}
        <div
          className="flex justify-center items-center"
          style={{
            width: "1200px",
            height: "55px",
            background: "#ffffff",
            margin: "0px 0px 12px",
            padding: "0px 20px",
          }}
        >
          <div
            style={{
              width: "58px",
              height: "17.6px",
              padding: "0px 12px 0px 20px",
            }}
          >
            <label
              style={{
                width: "25.6px",
                height: "17.6px",
              }}
            >
              <div
                style={{
                  width: "17.6px",
                  height: "17.6px",
                  padding: "0px 8px 0px 0px",
                }}
              >
                <div
                  style={{
                    width: "12.16px",
                    height: "12.16px",
                  }}
                >
                  {" "}
                  <input type="checkbox" />{" "}
                </div>
              </div>
            </label>
          </div>
          <div
            style={{
              width: "506.34px",
              height: "16.8px",
              fontSize: "14px",
              color: "#000000CC",
            }}
          >
            Sản Phẩm
          </div>
          <div
            style={{
              width: "173.74px",
              height: "16.8px",
              color: "#888888",
              fontSize: "14px",
            }}
          >
            Đơn giá
          </div>
          <div
            style={{
              width: "168.78px",
              height: "16.8px",
              color: "#888888",
              fontSize: "14px",
            }}
          >
            Số lượng
          </div>
          <div
            style={{
              width: "114.18px",
              height: "16.8px",
              fontSize: "14px",
              color: "#888888",
            }}
          >
            Số tiền
          </div>
          <div
            style={{
              width: "138.99px",
              height: "16.8px",
              fontSize: "14px",
              color: "#888888",
            }}
          >
            Thao tác
          </div>
        </div>
        {/*  */}
        <div
          className="flex justify-center items-center bg-blue-200"
          style={{
            width: "1200px",
            height: "60px",
            padding: "0px 20px",
            fontSize: "14px",
          }}
        >
          <div
            className="flex items-center bg-red-200"
            style={{
              width: "1160px",
              height: "17.6px",
            }}
          >
            <div
              className="flex justify-center items-center"
              style={{
                width: "auto",
                height: "17.6px",
                padding: "0px 12px 0px 20px",
              }}
            >
              <input type="checkbox" />
            </div>
            <a
              className="flex justify-center items-center"
              href="fb.com"
              style={{
                width: "auto",
                height: "16.8px",
              }}
            >
              <div
                className="flex justify-center items-center"
                style={{
                  width: "auto",
                  height: "16px",
                }}
              >
                <div
                  style={{
                    width: "auto",
                  }}
                >
                  Yêu thích
                </div>
              </div>
              <div>
                <span
                  style={{
                    width: "auto",
                    height: "16.8px",
                    margin: "0px 0px 0px 10px",
                    fontSize: "14px",
                    color: "#000000DE",
                  }}
                >
                  Thời Trang&Phụ Kiện MEMOTOP
                </span>
              </div>
              <div
                className="ml-2"
                style={{
                  width: "22px",
                  height: "16px",
                }}
              >
                <FontAwesomeIcon icon={faComments} />
              </div>
            </a>
          </div>
        </div>
        {/* div list product in cart */}
        {products.map((product, index) => (
          <div
          className="flex justify-ceter items-center bg-blue-200"
          style={{
            width: "1200px",
            height: "145px",
            margin: "15px 0px 0px",
            padding: "15px 20px 20px",
          }}
        >
          <div
            className="flex items-center bg-red-200"
            style={{
              width: "1160px",
              height: "110px",
            }}
          >
            {/*  */}
            <div
              className="flex justify-center items-center bg-yellow-200"
              style={{
                width: "58px",
                height: "17.6px",
                padding: "0px 12px 0px 20px",
              }}
            >
              <input type="checkbox" />
            </div>
            {/*  */}
            <div style={{ width: "317.7px", height: "110px" }}>
              <div className="flex justify-center items-center">
                <img style={{ width: "80px", height: "80px" }} src={product.product.images[0]} alt="" />
                <div
                  style={{
                    width: "237.7px",
                    height: "84px",
                    padding: "5px 20px 0px 10px",
                  }}
                >
                  <a
                    style={{
                      fontSize: "14px",
                      color: "#000000DE",
                      width: "207.7px",
                      height: "32px",
                      margin: "0px 0px 5px",
                    }}
                    className="flex  items-center"
                    href="fb.com"
                  >
                    {product.name}
                  </a>
                  <div
                    className="flex  items-center"
                    style={{ width: "207.7px", height: "22.6px" }}
                  >
                    <span
                      style={{
                        width: "auto",
                        height: "17.6px",
                        fontSize: "10px",
                        margin: "0px 5px 5px 0px",
                        padding: "2px 4px",
                        color: "#ee2d4d",
                        border: "1px solid #ee2d4d",
                      }}
                    >
                      Đổi hàng miễn phí 15 ngày
                    </span>
                  </div>
                  <img
                    className="flex  items-center"
                    style={{ width: "207.7px", height: "18px" }}
                    src={two_voucher}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="flex items-center"
                style={{
                  width: "317.7px",
                  height: "14px",
                  margin: "12px 0px 0px",
                  fontSize: "12px",
                  color: "#ee2d4d",
                }}
              >
                <img
                  src={flash_sale_big}
                  alt=""
                  style={{
                    width: "72px",
                    height: "14px",
                    margin: "0px 6px 0px 0px",
                  }}
                />
                kết thúc lúc 20:59:59 20 Jul
              </div>
            </div>
            {/*  */}
            <div style={{ width: "188.64px", height: "38.6px" }}>
              <button
                style={{
                  width: "178.64px",
                  height: "38.6px",
                  margin: "0px 10px 0px 0px",
                }}
              >
                <div
                  style={{
                    width: "122.31px",
                    height: "16.8px",
                    fontSize: "14px",
                  }}
                >
                  Phân loại hàng{" "}
                  <div
                    style={{
                      width: "8px",
                      height: "4.8px",
                      margin: "0px 0px 0px 10px",
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    width: "125.24px",
                    height: "16.8px",
                    margin: "5px 0px 0px",
                    fontSize: "14px",
                  }}
                >
                  dsfafda
                </div>
              </button>
            </div>
            {/*  */}
            <div
              style={{
                width: "173.74px",
                height: "16.8px",
              }}
            >
              <span
                style={{
                  width: "57.8px",
                  height: "16px",
                  fontSize: "14px",
                  color: "#0000008a",
                  margin: "0px 10px 0px 0px",
                }}
              >
                <s>₫{product.product.price}</s>
              </span>
              <span
                style={{
                  width: "57.8px",
                  height: "16px",
                  fontSize: "14px",
                  color: "#0000008a",
                  margin: "0px 10px 0px 0px",
                }}
              >
                ₫{product.product.price}
              </span>
            </div>
            {/*  */}
            <div
              className="flex justify-center items-center"
              style={{
                width: "168.78px",
                height: "32px",
                boxSizing: "border-box",
              }}
            >
              <button
                style={{
                  width: "32px",
                  height: "32px",
                  padding: "1px 6px",
                  borderLeft: "1px solid gray",
                  borderTop: "1px solid gray",
                  borderBottom: "1px solid gray",
                }}
              >
                -
              </button>
              <input
              value={product.quantity}
              disabled
                style={{
                  width: "50px",
                  height: "32px",
                  padding: "1px 2px",
                  borderLeft: "1px solid gray",
                  borderTop: "1px solid gray",
                  borderBottom: "1px solid gray",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              />
              <button
                style={{
                  width: "32px",
                  height: "32px",
                  padding: "1px 6px",
                  border: "1px solid gray",
                }}
              >
                +
              </button>
            </div>
            {/*  */}
            <div className="flex justify-center items-center" style={{width: "114.18px", height: "16.8px"}}>
                <span style={{height: "16.8px", fontSize: "14px", color: "#ee4d2d"}}>₫122.000</span>
            </div>
            {/*  */}
            <div className="flex justify-center items-center" style={{width: "138.99px", height: "48.8px"}}>
                <button style={{width: "36.91px", height: "18.8px", padding: "1px 6px", fontSize: "14px", color: "#000000DE"}}>
                    Xóa
                </button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    
  );
}
