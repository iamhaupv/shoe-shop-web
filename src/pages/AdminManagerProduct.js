import React, { useEffect, useState } from "react";
import FindAllProduct from "../services/FindAllProduct";
import DeleteProductByIdService from "../services/DeleteProductByIdService";
import { useNavigate } from "react-router-dom";
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
      // Lấy token từ localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token is missing");
      }

      // Gọi API để xóa sản phẩm
      await DeleteProductByIdService(token, productId);
      // Cập nhật danh sách sản phẩm sau khi sản phẩm đã được xóa thành công
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  // update product
  const handleUpdateProduct = (productId) => {
    navigate(`/update-product?id=${productId}`);
  };
  return (
    <div>
      {/* Bảng hiển thị danh sách sản phẩm */}
      <div>
        <a href="add">Add</a>
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
                <button onClick={()=> handleDeleteProduct(product._id)}>
                  delete
                </button>
                |<button onClick={() => handleUpdateProduct(product._id)}>
                  update
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
