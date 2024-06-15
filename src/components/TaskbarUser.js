import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const TaskbarUser = () => {
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
  const [user, setUser] = useState("");
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faUserTie} />
        <label>{user}</label>
      </div>
    </div>
  );
};

export default TaskbarUser;
