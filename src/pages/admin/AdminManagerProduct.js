import React, { useEffect, useState } from "react";
import FindAllProductService from "../../services/product/FindAllProductService";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageInterval, setImageInterval] = useState(null);

  // get all product
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token is missing");
        }

        const response = await FindAllProductService(token);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Setup image interval
  useEffect(() => {
    if (products.length > 0) {
      // Clear previous interval if exists
      if (imageInterval) {
        clearInterval(imageInterval);
      }

      // Set new interval to change image every 2 seconds
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === products[currentImageIndex].images.length - 1
            ? 0
            : prevIndex + 1
        );
      }, 1000);

      // Store interval ID in state to clear later
      setImageInterval(interval);
    }

    return () => {
      // Clear interval on component unmount
      if (imageInterval) {
        clearInterval(imageInterval);
      }
    };
  }, [products, currentImageIndex, imageInterval]);

  // delete product
  const handleDeleteProduct = async (productId) => {
    try {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa sản phẩm này?"
      );
      if (confirmDelete) {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token is missing");
        }
        await DeleteProductByIdService(token, productId);
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
      {/* Return button */}
      <div>
        <button onClick={handleReturn} className="text-3xl">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>

      {/* Add product button */}
      <div>
        <button
          onClick={handleAddProduct}
          className="bg-green-500 border-2 border-solid text-4xl"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {/* Product table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Color</th>
            <th>Material</th>
            <th>Design</th>
            <th>Size</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through products to display each product */}
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.color}</td>
              <td>{product.material}</td>
              <td>{product.design}</td>
              <td>{product.size}</td>
              <td>
                {/* Display images */}
                <div className="image-container">
                  {product.images.length > 0 && (
                    <img
                      src={product.images[currentImageIndex]}
                      alt={`Product ${product._id} - Image ${currentImageIndex}`}
                      className="product-image"
                    />
                  )}
                </div>
              </td>
              <td>
                {/* Delete button */}
                <button
                  className="bg-red-500 border-2 border-solid border-black text-3xl"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                {/* Update button */}
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
