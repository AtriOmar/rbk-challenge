import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppContext } from "../../contexts/AppProvider";

export default function Navbar() {
  const { mobileNavbarOpen, setMobileNavbarOpen } = useAppContext();

  return (
    <div className="pt-[16px]">
      <div className="flex items-center justify-between h-[60px] px-4 mx-4 mb-4 rounded-2xl bg-white ">
        <div className="flex items-center gap-1">
          <img src="/icon.svg" alt="" className="h-5" />
          <h2 className="font-bold text-lg text-[#222]">devlinks</h2>
        </div>
        <div className="sm:flex gap-4 hidden">
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
          className="hidden sm:block px-4 py-1.5 border border-[#6249c7] rounded-md font-medium text-[#6249c7] hover:bg-[#6249c7] hover:text-white duration-300"
        >
          Preview
        </Link>
        <button className="block sm:hidden" onClick={() => setMobileNavbarOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
}
