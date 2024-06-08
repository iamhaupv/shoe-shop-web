import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FindProductByIdService from "../services/FindProductByIdService";
import UpdateProductService from "../services/UpdateProductService";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(Number);
  const [product, setProduct] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token is missing");
        }
        const response = await FindProductByIdService(token, id);
        setProduct(response.data);
        setName(response.data.name);
        setQuantity(response.data.quantity.toString());
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("id");

    if (productId) {
      fetchProduct(productId);
    } else {
      console.warn("Product ID is missing in the URL query parameters.");
    }
  }, [location.search]);

  const handleSubmit = async () => {
    const confirmUpdate = window.confirm(
      "Bạn có chắc chắn muốn cập nhật sản phẩm này?"
    );
    if (!confirmUpdate) {
      return;
    }
    const queryParams = new URLSearchParams(location.search);
    const _id = queryParams.get("id");
    const token = localStorage.getItem("token");
    const productNew = {name, quantity};
    console.log(productNew)
    console.log(_id)
    await UpdateProductService(token, _id, productNew);
    navigate("/admin-manager-product");
  };
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

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
                <input
                  onChange={handleName}
                  value={name}
                  type="text"
                  className="border border-2 border-solid border-black"
                />
              </td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>
                <input
                  onChange={handleQuantity}
                  value={quantity}
                  type="text"
                  className="border border-2 border-solid border-black"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  className="bg-red-500 border-2"
                  value="Update"
                  onClick={handleSubmit}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateProduct;
