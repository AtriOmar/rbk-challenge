import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppContext } from "../../contexts/AppProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { PLATFORMS } from "../../lib/PLATFORMS";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PreviewNavbar() {
  const { user, userInput, links, linksInput } = useAppContext();

  return (
    <div className="relative z-10 flex flex-col min-h-screen pt-[16px]">
      <div className="flex items-center justify-between h-[60px] px-4 mx-4 mb-4 rounded-2xl bg-white ">
        <Link to={"/"} className="px-4 py-1.5 border border-[#6249c7] rounded-md font-medium text-[#6249c7] hover:bg-[#6249c7] hover:text-white duration-300">
          Back to Editor
        </Link>
        <button className="px-4 py-1.5 border border-[#6249c7] rounded-md font-medium hover:text-[#6249c7] bg-[#6249c7] hover:bg-white text-white duration-300">
          Share Link
        </button>
      </div>
      <div className="grow p-8">
        <div className="relative  bg-white shadow-card3 max-w-[400px] mx-auto p-10 rounded-2xl">
          <div className="relative flex items-center justify-center w-[150px] aspect-square mx-auto rounded-[50%] border-4 border-[#623eef] overflow-hidden">
            {userInput.picture ? (
              <img src={userInput.picture} alt="" className="w-full h-full object-cover rounded-md" />
            ) : (
              <>
                <UserCircleIcon className="text-slate-500 w-full " />
              </>
            )}
          </div>
          {/* <i className="block w-fit mx-auto">
            <UserCircleIcon className="text-slate-500 w-2/3 mx-auto" />
          </i> */}
          <p className="mt-3 font-medium text-lg text-center capitalize">{userInput.firstName + " " + userInput.lastName}</p>
          <p className="mt-1 text-slate-500 text-sm text-center ">{userInput.email}</p>
          <ul className="mt-5">
            {linksInput.map((link) => (
              <li key={link.id} className="my-2 py-2.5 px-3 rounded-md" style={{ background: PLATFORMS[link.platform].color }}>
                <a href={PLATFORMS[link.platform].baseUrl + link.link} target="_blank" className="grid grid-cols-[20px_1fr_20px] items-center gap-2">
                  <FontAwesomeIcon icon={PLATFORMS[link.platform].icon} color="white" className="mx-auto" />
                  <p className="text-xs capitalize text-white">{link.platform}</p>
                  <FontAwesomeIcon icon={faArrowRight} color="white" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
