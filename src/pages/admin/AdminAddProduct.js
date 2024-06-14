import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductService from "../../services/product/AddProductService";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token invalid!");
      }
      await AddProductService(token, name, quantity);
      const confirmAdd = window.confirm(
        "Bạn có chắc chắn muốn thêm sản phẩm này?"
      );
      if (confirmAdd) {
        navigate("/wp-admin/manager-product");
      }
    } catch (error) {}
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
          <tr>
            <td>Name</td>
            {/* name */}
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
            {/* quantity */}
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
            {/* submit */}
            <td>
              <input
                type="submit"
                className="border border-2 border-solid border-black bg-green-500"
                onClick={handleSubmit}
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AddProduct;
