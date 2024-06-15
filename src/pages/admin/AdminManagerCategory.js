import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import FindAllCategoriesService from "../../services/category/FindAllCategoriesService";
import { useNavigate } from "react-router-dom";
import DeleteCategoryByIdService from "../../services/category/DeleteCategoryByIdService";
const AdminManagerCategory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token invalid!");
        }
        const response = await FindAllCategoriesService(token);
        setCategories(response.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchAllCategories();
  }, []);
  const handleAdd = () => {
    navigate("/wp-admin/add-categories");
  };
  const handleDeleteCategory = async (categoryId) => {
    try {
      const deleteConfirm = window.confirm(
        "Bạn có muốn xóa category này không?"
      );
      if (deleteConfirm) {
        const token = localStorage.getItem("token");
        console.log(token);
        if (!token) {
          throw new Error("Token invalid!");
        }
        await DeleteCategoryByIdService(token, categoryId);
        setCategories(
          categories.filter((category) => category._id !== categoryId)
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="flex justify-center mx-auto">
      <div>
        <button
          className="border-2 border-solid border-black text-3xl bg-green-400"
          onClick={handleAdd}
        >
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </div>
      <div>
        <table className="px-4">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Description</td>
              <td>CreateAt</td>
              <td>UpdateAt</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{category._id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>{new Date(category.createdAt).toLocaleString()}</td>
                <td>
                  {category.updatedAt
                    ? new Date(category.updatedAt).toLocaleString()
                    : ""}
                </td>
                <td>
                  <button onClick={() => handleDeleteCategory(category._id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                  <button>
                    <a href="fb.com">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </a>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManagerCategory;
