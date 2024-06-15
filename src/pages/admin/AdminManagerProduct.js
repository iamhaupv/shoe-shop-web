import React, { useEffect, useState } from "react";
import FindAllProduct from "../../services/product/FindAllProduct";
import DeleteProductByIdService from "../../services/product/DeleteProductByIdService";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
const AdminManagerProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  // get all product
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Lấy token từ localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token is missing");
        }

        // Gọi API để lấy danh sách sản phẩm
        const response = await FindAllProduct(token);
        setProducts(response.data); // Gán mảng sản phẩm vào state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Gọi hàm fetchProducts khi component được render
    fetchProducts();
  }, []);
  // delete product
  const handleDeleteProduct = async (productId) => {
    try {
      // Hiển thị hộp thoại xác nhận trước khi xóa
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa sản phẩm này?"
      );
      if (confirmDelete) {
        // Lấy token từ localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token is missing");
        }
        // Gọi API để xóa sản phẩm
        await DeleteProductByIdService(token, productId);
        // Cập nhật danh sách sản phẩm sau khi sản phẩm đã được xóa thành công
        setProducts(products.filter((product) => product._id !== productId));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  // update product
  const handleUpdateProduct = (productId) => {
    navigate(`/wp-admin/products/update-product?id=${productId}`);
  };
  // add product
  const handleAddProduct = () => {
    navigate("/wp-admin/products/add-product");
  };
  // return
  const handleReturn = () => {
    navigate("/wp-admin-manager");
  };
  return (
    <div>
      {/* return */}
      <div>
        <button onClick={handleReturn} className="text-3xl">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      {/* create shoe */}
      <div>
        <button
          onClick={handleAddProduct}
          className="bg-green-500 border-2 border-solid text-4xl"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {/* Sử dụng mảng products để hiển thị danh sách sản phẩm */}
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                {/* delete */}
                <button
                  className="bg-red-500 border-2 border-solid border-black text-3xl"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                {/* update */}
                <button
                  className="bg-blue-500 border-2 border-solid border-black text-3xl"
                  onClick={() => handleUpdateProduct(product._id)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManagerProduct;
