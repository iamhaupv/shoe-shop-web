import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCategoryService from "../../services/category/AddCategoryService";
const AdminAddCategory = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token invalid");
      }
      await AddCategoryService(token, name, description);
      const confirmAdd = window.confirm(
        "Bạn có chắc chắn muốn thêm sản phẩm này?"
      );
      if (confirmAdd) {
        navigate("/wp-admin/manager-categories");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  className="border-2 border-solid border-solid"
                  value={name}
                  onChange={handleName}
                />
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <input
                  type="text"
                  className="border-2 border-solid border-black"
                  value={description}
                  onChange={handleDescription}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={handleSubmit} className="bg-green-200">
                  Submit
                </button>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default AdminAddCategory;
