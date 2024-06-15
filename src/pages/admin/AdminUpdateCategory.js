import { useEffect, useState } from "react";
import UpdateCategoryService from "../../services/category/UpdateCategoryService";
import { useLocation, useNavigate } from "react-router-dom";
const AdminUpdateCategory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  useEffect(() => {
    const fetchCategory = () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token invalid");
        }
        
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchCategory();
  }, [location.search]);
  //   name
  const handleName = (event) => {
    setName(event.target.value);
  };
  //   des
  const handleDes = (event) => {
    setDes(event.target.value);
  };
  //   submit
  const handleSubmit = async () => {
    try {
      const queryParams = new URLSearchParams(location.search);
      const id = queryParams.get("id");
      const token = localStorage.getItem("token");
      await UpdateCategoryService(token, id, { name, des });
      navigate("/wp-admin/products/manager-product");
    } catch (error) {
      throw new Error(error);
    }
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
                  className="border border-2 border-solid border-black"
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
                  className="border border-2 border-solid border-black"
                  value={des}
                  onChange={handleDes}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={handleSubmit} className="bg-blue-400">
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
export default AdminUpdateCategory;
