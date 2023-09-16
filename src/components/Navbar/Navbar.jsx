import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="pt-[16px]">
      <div className="flex items-center justify-between h-[60px] px-4 mx-4 mb-4 rounded-2xl bg-white ">
        <h2 className="font-bold text-lg text-[#222]">devlinks</h2>
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "bg-[#efecff] text-[#6249c7]" : "text-slate-500"} hover:ring-1 ring-[#6249c7] flex gap-2 px-4 py-1.5 rounded-md duration-300`
            }
          >
            <i className="">
              <FontAwesomeIcon icon={faLink} />
            </i>
            <span className="font-medium">Links</span>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${isActive ? "bg-[#efecff] text-[#6249c7]" : "text-slate-500"} hover:ring-1 ring-[#6249c7] flex gap-2 px-4 py-1.5 rounded-md duration-300`
            }
          >
            <i className="">
              <FontAwesomeIcon icon={faCircleUser} />
            </i>
            <span className="font-medium">Profile Details</span>
          </NavLink>
        </div>
        <Link
          to={"/preview"}
          className="px-4 py-1.5 border border-[#6249c7] rounded-md font-medium text-[#6249c7] hover:bg-[#6249c7] hover:text-white duration-300"
        >
          Preview
        </Link>
      </div>
    </div>
  );
}
