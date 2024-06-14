import React from "react";

const Nav = () => {
  return (
    <div className="bg-gray-900 py-4">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-8">
          <li>
            <a
              href="/jordan"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Giày Jordan
            </a>
          </li>
          <li>
            <a
              href="/nike"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Giày Nike
            </a>
          </li>
          <li>
            <a
              href="/adidas"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Giày Adidas
            </a>
          </li>
          <li>
            <a
              href="/mlb"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Giày MLB
            </a>
          </li>
          <li>
            <a
              href="/balance"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Balance
            </a>
          </li>
          <li>
            <a
              href="/converse"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Converse
            </a>
          </li>
          <li>
            <a
              href="/dior"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Dior
            </a>
          </li>
          <li>
            <a
              href="/gucci"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Gucci
            </a>
          </li>
          <li>
            <a
              href="/LV"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              LV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
