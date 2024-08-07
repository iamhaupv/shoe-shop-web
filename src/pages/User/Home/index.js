import { useNavigate } from "react-router-dom";
import FindAllProduct from "../../../services/product/FindAllProductService";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import AddProductToCart from "../../../services/cart/AddProductToCartService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderHome from "../../../components/HeaderHome";
import BannerViewHome from "../../../components/BannerViewHome";
import ContentNavBar from "../../../components/ContentNavBar";
import Content from "../../../components/Content";
import FooterRegisterLogin from "../../../components/FooterRegisterLogin";
const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  // find all product
  useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await FindAllProduct();
      setProducts(response.data);
    };
    fetchAllProducts();
  }, []);
  const handleSubmit = () => {
    navigate("/my-cart");
  };
  // handle add product to cart
  const handleAddProductToCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token invalid!");
      }
      const user = JSON.parse(atob(token.split(".")[1]));
      await AddProductToCart(token, user.data.phoneNumber, productId);
      toast.success("Add to cart successfully!");
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    // <div className="h-screen">
    //   <ToastContainer />
    //   <div>
    //     <button
    //       className="bg-red-500 border-2 border-solid border-black"
    //       onClick={handleSubmit}
    //     >
    //       <FontAwesomeIcon icon={faCartShopping} />
    //     </button>
    //     <table>
    //       <tr>
    //         <td>ID</td>
    //         <td>Name</td>
    //         <td>quantity</td>
    //       </tr>
    //       {products.map((product, index) => (
    //         <tr>
    //           <td>{product._id}</td>
    //           <td>{product.name}</td>
    //           <td>{product.quantity}</td>
    //           <td>
    //             <button
    //               className="bg-green-400 text-2xl"
    //               onClick={() => handleAddProductToCart(product._id)}
    //             >
    //               <FontAwesomeIcon icon={faCartPlus} />
    //             </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </table>
    //   </div>
    // </div>
    <div>
      <HeaderHome/>
      <BannerViewHome />
      <ContentNavBar />
      <Content />
      <FooterRegisterLogin />
    </div>
  );
};
export default Home;
