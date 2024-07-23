import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faComments,
  faChevronUp,
  faChevronDown,
  faTicket,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import logo_h from "../assets/logo_h.png";
import free_ship from "../assets/vn-50009109-a0c28c638997b7922bdafe1c5c704807.png";
import flash_sale_big from "../assets/flash_sale_big.png";
import two_voucher from "../assets/vn-11134258-7r98o-lxhaq518hlg993.png";
import FindAllProductFromCartService from "../services/cart/FindAllProductFromCartService";
import AddProductToCartService from "../services/cart/AddProductToCartService";
import RemoveProductFromCartService from "../services/cart/RemoveProductFromCartService";
export default function CartContent() {
  const [products, setProducts] = useState([]); // products
  const [detail, setDetail] = useState(false); // button detail
  // detail
  const toggleDetail = (productId) => {
    setDetail((prevDetail) => ({
      ...prevDetail,
      [productId]: !prevDetail[productId],
    }));
  };

  // fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token is valid");
        }
        const user = await JSON.parse(atob(token.split(".")[1]));
        const response = await FindAllProductFromCartService(
          token,
          user.data.cart
        );
        user.data.statusDetail = true;
        setProducts(response.data.products);
        setDetail(!response.data.products.statusDetail);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, []);
  // handleAdd
  const handleAddProductToCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token invalid");
      }
      const user = await JSON.parse(atob(token.split(".")[1]));
      const response = await AddProductToCartService(
        token,
        user.data.phoneNumber,
        productId
      );
      console.log(response.data.products);
      setProducts(response.data.products);
      console.log("hello");
    } catch (error) {
      throw new Error(error);
    }
  };
  // remove
  const handleRemoveProductFromCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token invalid");
      }
      const user = await JSON.parse(atob(token.split(".")[1]));
      const response = await RemoveProductFromCartService(
        token,
        user.data.phoneNumber,
        productId
      );

      setProducts(response.data.cart.products);
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  return (
    <div
      style={{
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
        lineHeight: 1.2,
        background: "rgb(245 245 245)",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* section */}{" "}
      <div
        className="flex justify-center items-center"
        style={{
          width: "auto",
          height: "100.8px",
          boxSizing: "border-box",
          background: "#ffffff",
          borderBottom: "1px solid rgba(0,0,0,.09)",
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
          height: "auto",
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
            border: "1px solid rgba(224,168,0,.4)",
            borderRadius: "2px",
            marginBottom: "12px",
            marginTop: "17px",
            backgroundColor: "#fffefb",
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
            marginTop: "10px",
            boxShadow: "0 1px 1px 0 rgba(0,0,0,.05)",
            borderRadius: "3px",
            marginBottom: "12px",
          }}
        >
          <div
            className="flex justify-center items-center"
            style={{
              width: "58px",
              height: "17.6px",
              padding: "0px 12px 0px 20px",
            }}
          >
            <input type="checkbox" />
          </div>
          <div
            className="flex items-center"
            style={{
              width: "506.34px",
              height: "16.8px",
              fontSize: "14px",
              color: "#000000CC",
              textAlign: "center",
            }}
          >
            Sản Phẩm
          </div>
          <div
            className="flex justify-center items-center"
            style={{
              width: "173.74px",
              height: "16.8px",
              color: "#888888",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Đơn giá
          </div>
          <div
            className="flex justify-center items-center"
            style={{
              width: "168.78px",
              height: "16.8px",
              color: "#888888",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Số lượng
          </div>
          <div
            className="flex justify-center items-center"
            style={{
              width: "114.18px",
              height: "16.8px",
              fontSize: "14px",
              color: "#888888",
              textAlign: "center",
            }}
          >
            Số tiền
          </div>
          <div
            className="flex justify-center items-center"
            style={{
              width: "138.99px",
              height: "16.8px",
              fontSize: "14px",
              color: "#888888",
              textAlign: "center",
            }}
          >
            Thao tác
          </div>
        </div>
        {/*  */}
        <div
          className="flex justify-center items-center"
          style={{
            color: "#888",
            width: "1200px",
            height: "60px",
            padding: "0px 20px",
            fontSize: "14px",
            marginBottom: "12px",
            background: "#ffffff",
            borderRadius: "3px",
            boxShadow: "0 1px 1px 0 rgba(0,0,0,.05)",
          }}
        >
          <div
            className="flex items-center"
            style={{
              width: "1160px",
              height: "17.6px",
            }}
          >
            <div
              className="flex justify-center items-center"
              style={{
                width: "58px",
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
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              className="flex justify-ceter items-center"
              style={{
                width: "1200px",
                height: "145px",
                margin: "15px 0px 0px",
                padding: "15px 20px 20px",
                background: "#ffffff",
                borderRadius: "2px",
                boxShadow: "0 1px 1px 0 rgba(0,0,0,.05)",
              }}
            >
              <div
                className="flex items-center"
                style={{
                  width: "1160px",
                  height: "110px",
                }}
              >
                {/*  */}
                <div
                  className="flex justify-center items-center"
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
                    <img
                      style={{ width: "80px", height: "80px" }}
                      src={product.product.images[0]}
                      alt=""
                    />
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
                          overflow: "hidden",
                          textOverflow: "ellipsis" /* Thêm dấu ba chấm (...) */,
                          maxWidth: "100%",
                          display: "block",
                          whiteSpace: "nowrap",
                        }}
                        className="flex items-center"
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
                          Đổi ý miễn phí 15 ngày
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
                <div
                  className="flex justify-center items-center"
                  style={{ width: "188.64px", height: "38.6px" }}
                >
                  <button
                    style={{
                      width: "178.64px",
                      height: "38.6px",
                      margin: "0px 10px 0px 0px",
                    }}
                  >
                    <div
                      className="flex"
                      style={{
                        width: "122.31px",
                        height: "16.8px",
                        fontSize: "14px",
                      }}
                    >
                      <div>Phân loại hàng</div>
                      <button
                        onClick={() => toggleDetail(product._id)}
                        style={{
                          width: "8px",
                          height: "4.8px",
                          margin: "0px 0px 0px 10px",
                        }}
                      >
                        {" "}
                        {detail[product._id] ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </button>
                    </div>
                    <div
                      style={{
                        width: "125.24px",
                        height: "16.8px",
                        margin: "5px 0px 0px",
                        fontSize: "14px",
                      }}
                    >
                      {product.product.color}
                    </div>
                  </button>
                </div>
                {/*  */}
                <div
                  className="flex justify-center items-center"
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
                    onClick={() =>
                      handleRemoveProductFromCart(product.product._id)
                    }
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
                    onClick={() => handleAddProductToCart(product.product._id)}
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
                <div
                  className="flex justify-center items-center"
                  style={{ width: "114.18px", height: "16.8px" }}
                >
                  <span
                    style={{
                      height: "16.8px",
                      fontSize: "14px",
                      color: "#ee4d2d",
                    }}
                  >
                    ₫122.000
                  </span>
                </div>
                {/*  */}
                <div
                  className="flex justify-center items-center"
                  style={{ width: "138.99px", height: "48.8px" }}
                >
                  <button
                    style={{
                      width: "36.91px",
                      height: "18.8px",
                      padding: "1px 6px",
                      fontSize: "14px",
                      color: "#000000DE",
                    }}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Khong co san pham</div>
        )}
      </div>
      {/* section */}
      <section
        style={{
          width: "1200px",
          height: "20px",
          position: "sticky",
          bottom: "155px",
          background: "linear-gradient(whitesmoke, rgba(0, 0, 0, .06))",
          margin: "0 auto",
          zIndex: 3,
        }}
      ></section>
      {/* sticky  */}
      <div
        className="flex justify-center items-center"
        style={{
          margin: "0px auto",
          position: "sticky",
          bottom: "0px",
        }}
      >
        <div
          style={{
            width: "1200px",
            height: "159.2px",
            background: "#ffffff",
            margin: "12px 0px 0px",
          }}
        >
          {/*  */}
          <div style={{ width: "100%" }}>
            <div className="flex justify-end items-center">
              <div
                className="flex "
                style={{
                  width: "515px",
                  height: "44px",
                }}
              >
                <div
                  style={{ width: "100%", height: "100%" }}
                  className=" flex justify-between items-center"
                >
                  <div
                    className="flex justify-center items-center"
                    style={{
                      height: "19.2px",
                      width: " auto",
                      fontSize: "16px",
                      margin: "0px 5px",
                    }}
                  >
                    <div
                      style={{
                        width: "21px",
                        height: "20px",
                        color: "#ee4e2d",
                        marginRight: "10px",
                      }}
                    >
                      <FontAwesomeIcon icon={faTicket} />
                    </div>
                    HauShop Voucher
                  </div>
                  <div
                    className="flex justify-center items-center"
                    style={{
                      height: "16.8px",
                      width: "126.1px",
                      margin: "0px 30px 0px 0px",
                      fontSize: "14px",
                      color: "#0055AA",
                    }}
                  >
                    Chọn hoặc nhập mã
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center"
            style={{
              borderTop: "1px dashed black",
              borderBottom: "1px dashed black",
            }}
          >
            <div>
              <div
                className="flex justify-end items-center"
                style={{
                  width: "685px",
                  height: "49.6px",

                  padding: "16px 12px 16px 20px",
                }}
              >
                <div style={{ width: "25.6px", height: "17.6px" }}>
                  <input
                    style={{ width: "12.16px", height: "12.16px" }}
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
            <div
              className="flex justify-center items-center"
              style={{ width: "325px", height: "18px" }}
            >
              <div
                className="flex justify-center items-center"
                style={{ width: "18px", height: "18px" }}
              ></div>
              <div
                className="flex justify-center items-center"
                style={{
                  width: "auto",
                  height: "16.8px",
                  color: "#000000CC",
                  fontSize: "14px",
                  margin: "0px 0px 0px 8px",
                }}
              >
                HauShop Xu
              </div>
              <div
                className="flex justify-center items-center"
                style={{
                  width: "160.38px",
                  height: "16.8px",
                  color: "#929292",
                  margin: "0px 0px 0px 17px",
                  fontSize: "14px",
                }}
              >
                Bạn chưa chọn sản phẩm
              </div>
              <div
                className="flex justify-center items-center"
                style={{ width: "24px", height: "12px", padding: "0px 6px" }}
              >
                <FontAwesomeIcon icon={faQuestion} />
              </div>
            </div>
            <div
              className="flex justify-end items-center"
              style={{
                width: "190px",
                height: "19.2px",
                padding: "0px 30px 0px 0px",
                fontSize: "16px",
                color: "#d0d0d0",
              }}
            >
              ₫0
            </div>
          </div>
          {/*  */}
          <div
            className="flex justify-center items-center"
            style={{
              width: "1200px",
              height: "64px",
              padding: "12px 0px",
            }}
          >
            {/*  */}
            <div
              className="flex justify-center items-center"
              style={{
                width: "58px",
                height: "17.6px",
                padding: "0px 12px 0px 20px",
              }}
            >
              <label
                className="flex justify-center items-center"
                style={{ width: "25.6px" }}
              >
                <div
                  className="flex justify-center items-center"
                  style={{
                    width: "17.6px",
                    height: "17.6px",
                    margin: "0px 8px 0px 0px",
                  }}
                >
                  <div
                    className="flex justify-center items-center"
                    style={{ width: "12.6px", height: "12.6px" }}
                  >
                    <input type="checkbox" />
                  </div>
                </div>
              </label>
            </div>
            {/*  */}
            <button
              className="flex justify-center items-center"
              style={{
                width: "auto",
                height: "21.2px",
                padding: "1px 6px",
                fontSize: "16px",
                color: "#000000CC",
              }}
            >
              Chọn Tất Cả
            </button>
            <button
              className="flex justify-center items-center"
              style={{
                width: "40.48px",
                height: "21.2px",
                margin: "0px 8px",
                padding: "1px 6px",
              }}
            >
              Xóa
            </button>
            <button
              className="flex jusity-center items-center"
              style={{
                width: "229.95px",
                height: "21.2px",
                padding: "1px 6px",
                fontSize: "16px",
                color: "#000000CC",
              }}
            >
              Bỏ sản phẩm không hoạt động
            </button>
            <button
              className="flex justify-center items-center"
              style={{
                width: "",
                height: "",
                margin: "0px 8px",
                padding: "1px 6px",
                color: "#ee4d2d",
              }}
            >
              Lưu vào mục Đã thích
            </button>
            <div
              className="flex justify-center items-center"
              style={{
                width: "auto",
                height: "28px",
                color: "#222222",
                margin: "0px 0px 0px 20px",
                marginLeft: "50px",
              }}
            >
              <div
                className="flex justify-center items-center"
                style={{ height: "19px", color: "#222222", fontSize: "16px" }}
              >
                Tổng thanh toán (0 Sản phẩm):
              </div>
              <div
                className="flex justify-center items-center"
                style={{
                  height: "28px",
                  color: "#ee4d2d",
                  margin: "0px 0px 0px 5px",
                  fontSize: "24px",
                }}
              >
                ₫0
              </div>
            </div>
            <div>
              <button
                className="flex justify-center items-center"
                style={{
                  width: "210px",
                  height: "40px",
                  background: "#ee4d2d",
                  margin: "0px 22px 0px 15px",
                  padding: "13px 36px",
                  borderRadius: "2px",
                  boxSizing: "border-box",
                  textTransform: "capitalize",
                  fontSize: "300px",
                  marginLeft: "20px",
                }}
              >
                <span
                  style={{
                    width: "138px",
                    height: "14px",
                    color: "#ffffff",
                    fontSize: "14px",
                  }}
                >
                  Mua Hàng
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
