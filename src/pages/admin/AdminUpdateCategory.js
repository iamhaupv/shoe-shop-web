import { useEffect, useState } from "react";
import UpdateCategoryService from "../../services/category/UpdateCategoryService";
import { useLocation, useNavigate } from "react-router-dom";
import FindCategoryById from "../../services/category/FindCategoryByIdService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const AdminUpdateCategory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [category, setCategory] = useState({});
  useEffect(() => {
    const fetchCategory = async (id) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token invalid");
        }
        const response = await FindCategoryById(token, id);
        console.log(response);
        setCategory(response.data);
        setName(response.data.name);
        setDes(response.data.description);
      } catch (error) {
        throw new Error(error);
      }
    };
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("id");

    fetchCategory(productId);
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
      navigate("/wp-admin/categories/manager-categories");
    } catch (error) {
      throw new Error(error);
    }
  };
  //   return
  const handleReturn = () => {
    navigate("/wp-admin/categories/manager-categories");
  };
  return (
    <div>
      {/* return */}
      <div>
        <button className="text-3xl" onClick={handleReturn}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      {/* table */}
      <div>
        <table>
          <thead>
            <tr>
                <td>{category._id}</td>
            </tr>
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
