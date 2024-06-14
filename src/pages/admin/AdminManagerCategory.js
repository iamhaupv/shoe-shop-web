import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import FindAllCategoriesService from "../../services/category/FindAllCategoriesService";
const AdminManagerCategory = () => {
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
  return (
    <div className="flex justify-center mx-auto">
      <div>
        <button className="border-2 border-solid border-black text-3xl bg-green-400">
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </div>
      <div>
        <table>
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
                <td>{category.createAt}</td>
                <td>{category.updateAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManagerCategory;
