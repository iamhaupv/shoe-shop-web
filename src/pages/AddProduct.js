import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/admin-manager-product")
  }
  return (
    <div>
      <div>
        <table>
          <tr>
            <td>Name</td>
            {/* name */}
            <td>
              <input
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
