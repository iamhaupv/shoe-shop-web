import { useEffect, useState } from "react";
import FindCartByIdService from "../../services/cart/FindCartByIdService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import AddProductToCartService from "../../services/cart/AddProductToCartService";
import RemoveProductFromCartService from "../../services/cart/RemoveProductFromCartService";
// const Cart = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchCarts = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (token) {
//           // Lấy thông tin người dùng từ token
//           const user = JSON.parse(atob(token.split(".")[1]));
//           // Sử dụng thông tin người dùng để lấy giỏ hàng
//           const response = await FindCartByIdService(token, user.data.cart);
//           setProducts(response.data.products);
//         } else {
//           console.error("No token found in local storage");
//         }
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     fetchCarts();
//   }, []);
//   const handleAddProductToCart = async (productId) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("Token invalid");
//       }
//       const user = JSON.parse(atob(token.split(".")[1]));
//       const response = await AddProductToCartService(
//         token,
//         user.data.phoneNumber,
//         productId
//       );
//       setProducts(response.data.products);
//     } catch (error) {
//       throw new Error(error);
//     }
//   };
//   const handleRemoveProductFromCart = async (productId) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("Token invalid");
//       }
//       const user = JSON.parse(atob(token.split(".")[1]));
//       const response = await RemoveProductFromCartService(
//         token,
//         user.data.phoneNumber,
//         productId
//       );
//       console.log(response)
//       setProducts(response.data.cart.products);
//     } catch (error) {
//       throw new Error(error);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Quantity</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Lặp qua mỗi sản phẩm trong giỏ hàng và hiển thị */}
//             {products.map((product, index) => (
//               <tr key={product._id}>
//                 <td>{product.product}</td>
//                 <td>{product.name}</td>
//                 <td>{product.quantity}</td>
//                 <td>
//                   {/* button add */}
//                   <button
//                     className="bg-green-400 border-2 border-solid border-black text-3xl"
//                     onClick={() => handleAddProductToCart(product.product)}
//                   >
//                     <FontAwesomeIcon icon={faPlus} />
//                   </button>
//                   {/* button remove */}
//                   <button
//                     className="bg-red-400 border-2 border-solid border-black text-3xl ml-2"
//                     onClick={() => handleRemoveProductFromCart(product.product)}
//                   >
//                     <FontAwesomeIcon icon={faMinus} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default Cart
import React from 'react'
import HeaderNavHome from "../../components/HeaderNavHome";
import FooterRegisterLogin from "../../components/FooterRegisterLogin";
import CartContent from "../../components/CartContent";
import ProductLoveAndDisCount from "../../components/ProductLoveAndDiscount";
import ProductDiscount from "../../components/ProductDiscount";
import ProductMallDiscount from "../../components/ProductMallDiscount";
import ProductMall from "../../components/ProductMall"
import ProductLoveFreeShipDiscount from "../../components/ProductLoveFreeShipDiscount";
import ProductFreeShip from "../../components/ProductFreeShip";
export default function Cart() {
  return (
    <div>
      <HeaderNavHome/>
      <CartContent/>
      <ProductLoveAndDisCount/>
      <ProductDiscount/>
      <ProductMallDiscount/>
      <ProductMall/>
      <ProductLoveFreeShipDiscount/>
      <ProductFreeShip/>
      <div style={{width: "100%", height: "840px", borderTop: "4px solid rgb(238, 77, 45)"}}>
      <FooterRegisterLogin/>
      </div>
    </div>
  )
}

