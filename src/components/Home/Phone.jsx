import React from "react";
import phonePic from "../../assets/phone.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { useAppContext } from "../../contexts/AppProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { PLATFORMS } from "../../lib/PLATFORMS";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Phone() {
  const { user, userInput, links, linksInput } = useAppContext();

  return (
    <div className="md:h-0 md:min-h-full px-4 py-4 rounded-2xl bg-white">
      <div className="relative max-h-[600px] md:max-h-full max-w-[400px] aspect-[73/150] mx-auto ">
        <img src={phonePic} alt="" className="h-full w-full " />
        <div className="absolute inset-0 p-6 pt-12">
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
            {linksInput.slice(0, 5).map((link) => (
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
