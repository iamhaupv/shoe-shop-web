import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FindProductByIdService from "../services/FindProductByIdService";

const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token is missing");
        }
        const response = await FindProductByIdService(token, id);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    const queryParams = new URLSearchParams(location.search);
    let productId = queryParams.get('id'); // Get the value of the 'id' query parameter

    console.log('Query Params:', queryParams.toString()); // Log all query parameters
    console.log('Product ID:', productId); // Log the extracted product ID

    if (productId !== null && productId !== undefined) {
      // Remove any trailing '=' if present
      productId = productId.replace(/=+$/, "");
      fetchProduct(productId);
    } else {
      console.warn("Product ID is missing in the URL query parameters.");
    }
  }, [location.search]);

  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{product._id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>
                <input value={product.name} type="text" className="border border-2 border-solid border-black" />
              </td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>
                <input value={product.quantity} type="text" className="border border-2 border-solid border-black"/>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" className="bg-red-500 border-2" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateProduct;
