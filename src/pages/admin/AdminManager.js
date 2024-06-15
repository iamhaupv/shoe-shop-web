import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faShoePrints,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminManger = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const handleUser = () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token invalid");
      }
      const u = JSON.parse(atob(token.split(".")[1]));
      setUser(u.data.phoneNumber);
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    handleUser();
  }, []); // Run once on component mount
  const handleManagerShoe = () => {
    navigate("/wp-admin/products/manager-products");
  };
  const handleManagerCategory = () => {
    navigate("/wp-admin/categories/manager-categories");
  };
  return (
    <div>
      {/* username */}
      <div>
        <FontAwesomeIcon icon={faUserTie} />
        <label>{user}</label>
      </div>
      <div className="flex">
        {/* manager product */}
        <div>
          <button id="manager-shoe" className="text-4xl" onClick={handleManagerShoe}>
            <FontAwesomeIcon icon={faShoePrints} />
          </button>
          <label htmlFor="manager-shoe">Quản lý giày</label>
        </div>
        {/* manager category */}
        <div>
          <button id="manager-category" className="text-4xl" onClick={handleManagerCategory}>
            <FontAwesomeIcon icon={faGear} />
          </button>
          <label htmlFor="manager-category">Quản lý loại giày</label>
        </div>
      </div>
    </div>
  );
};

export default AdminManger;