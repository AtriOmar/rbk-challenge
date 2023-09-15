import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-[60px] px-4 rounded-2xl bg-white ">
      <h1 className="text-lg font-bold font-[system-ui]">devlinks</h1>
      <div className="flex gap-4">
        <Link className="flex gap-2 px-4 py-1.5 rounded-md bg-[#efecff]">
          <i className="">
            <FontAwesomeIcon icon={faLink} color="#6249c7" />
          </i>
          <span className="font-medium text-[#6249c7]">Links</span>
        </Link>
        <Link className="flex gap-2 px-4 py-1.5 rounded-md bg-[#efecff]">
          <i className="">
            <FontAwesomeIcon icon={faCircleUser} color="#6249c7" />
          </i>
          <span className="font-medium text-[#6249c7]">Profile Details</span>
        </Link>
      </div>
      <button className="px-4 py-1.5 border border-[#6249c7] rounded-md font-medium text-[#6249c7] hover:bg-[#6249c7] hover:text-white duration-300">
        Preview
      </button>
    </div>
  );
}
