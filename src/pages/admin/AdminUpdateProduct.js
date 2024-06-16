import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FindProductByIdService from "../../services/product/FindProductByIdService";
import UpdateProductService from "../../services/product/UpdateProductService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AdminUpdateProduct = () => {
  const [size, setSize] = useState("36");
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
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

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
    const productNew = { name, quantity };
    await UpdateProductService(token, _id, productNew);
    navigate("/wp-admin/manager-product");
  };
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };
  // return
  const handleReturn = () => {
    navigate("/wp-admin/products/manager-products");
  };
  return (
    <div>
      {/* return */}
      <div>
        <button className="text-3xl" onClick={handleReturn}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      {/* table form */}
      <div>
        <table>
          <tbody>
            {/* id */}
            <tr>
              <td className="px-4 py-2 border-b">ID</td>
              <td className="px-4 py-2 border-b">{product._id}</td>
            </tr>
            {/* name */}
            <tr>
              <td className="px-4 py-2 border-b">Name</td>
              <td className="px-4 py-2 border-b">
                <input
                  onChange={handleName}
                  value={name}
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            {/* quantity */}
            <tr>
              <td className="px-4 py-2 border-b">Quantity</td>
              <td className="px-4 py-2 border-b">
                <input
                  onChange={handleQuantity}
                  value={quantity}
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            {/* size */}
            <tr>
              <td className="px-4 py-2 border-b">Size</td>
              <td className="px-4 py-2 border-b">
                <select
                  value={size}
                  onChange={handleSizeChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  {["36", "37", "38", "39", "40", "41", "42", "43", "44"].map(
                    (sizeOption) => (
                      <option key={sizeOption} value={sizeOption}>
                        {sizeOption}
                      </option>
                    )
                  )}
                </select>
              </td>
            </tr>
            {/* Description */}
            <tr>
              <td className="px-4 py-2 border-b">Description</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            {/* color */}
            <tr>
              <td className="px-4 py-2 border-b">Color</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            {/* Material */}
            <tr>
              <td className="px-4 py-2 border-b">Material</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            {/* design */}
            <tr>
              <td className="px-4 py-2 border-b">Design</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            {/* createdAt */}
            <tr>
              <td className="px-4 py-2 border-b">CreateAt</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            {/* updateAt */}
            <tr>
              <td className="px-4 py-2 border-b">UpdateAt</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            {/* button submit */}
            <tr>
              <td className="px-4 py-2 border-b">
                <input
                  type="button"
                  className="border border-gray-300 rounded-md p-2 w-full"
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

export default AdminUpdateProduct;
