import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="justify-center h-200 mx-auto px-32 bg-blue-500">
      <div className="p-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faQuestion} />
            <span>Hỗ trợ</span>
          </div>
          <div className="flex items-center space-x-2">
            <a href="/signin">Đăng nhập</a>
            <span>|</span>
            <a href="/signup">Đăng ký</a>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className="mr-8">
            <img src={logo} alt="logo" width={150} height={150} />
          </div>
          <div className="flex flex-grow justify-center items-center">
            <input
              type="text"
              className="border-2 border-solid border-gray-300 rounded-md p-2 w-800 h-12"
              placeholder="Tìm kiếm..."
            />
            <button className="text-blue-500 p-3 ml-2 bg-gray-100 rounded-md h-12 flex items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className="ml-auto mr-5">
            <FontAwesomeIcon icon={faCartShopping} className="text-gray-700 text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
