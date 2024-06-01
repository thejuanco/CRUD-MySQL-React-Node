import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gray-100 flex justify-between px-10 py-4 mb-8">
      <Link to="/">
        <h1 className="font-bold text-left text-xl">Task Manager</h1>
      </Link>

      <ul className="flex">
        <li>
          <Link to="/" className="p-2 mx-2 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/new" className="p-2  rounded-lg hover:underline">
            Create Task
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
