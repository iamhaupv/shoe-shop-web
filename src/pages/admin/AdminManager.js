import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import TaskbarUser from "../../components/TaskbarUser";
const AdminManger = () => {
  const navigate = useNavigate();
  const handleManagerShoe = () => {
    navigate("/wp-admin/products/manager-products");
  };
  const handleManagerCategory = () => {
    navigate("/wp-admin/categories/manager-categories");
  };
  const handleLogout = () => {
    try {
      const logoutConfirm = window.confirm("Bạn có muốn đăng xuất không?");
      if (logoutConfirm) {
        localStorage.removeItem("token");
        navigate("/wp-admin");
      }
    } catch (error) {
      throw new Error("Cannot logout");
    }
  };
  return (
    <div>
      {/* username */}
      <TaskbarUser />
      {/* logout */}
      <div>
        <button
          className="border border-2 border-solid border-black text-4xl"
          onClick={handleLogout}
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
      <div className="flex">
        {/* manager product */}
        <div>
          <button
            id="manager-shoe"
            className="text-4xl"
            onClick={handleManagerShoe}
          >
            <FontAwesomeIcon icon={faShoePrints} />
          </button>
          <label htmlFor="manager-shoe">Quản lý giày</label>
        </div>
        {/* manager category */}
        <div>
          <button
            id="manager-category"
            className="text-4xl"
            onClick={handleManagerCategory}
          >
            <FontAwesomeIcon icon={faGear} />
          </button>
          <label htmlFor="manager-category">Quản lý loại giày</label>
        </div>
      </div>
    </div>
  );
};

export default AdminManger;
