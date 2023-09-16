import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useLocalStorage from "../../lib/useLocalStorage";
import Links from "./Links";

export default function ManageLinks() {
  return (
    <div className="h-full flex flex-col px-8 py-8 rounded-2xl bg-white">
      <h2 className="font-bold text-2xl text-[#222]">Customize your links</h2>
      <p className="mt-3 text-slate-500 text-sm">Add/edit/remove links below and then share all your profiles with the world!</p>
      <button className="flex items-center justify-center gap-2 w-full mt-8 px-4 py-1.5 border border-[#6249c7] rounded-md font-medium text-[#6249c7] hover:bg-[#6249c7] hover:text-white duration-300">
        <FontAwesomeIcon icon={faPlus} />
        <span>Add new link</span>
      </button>
      <div className="overflow-y-scroll grow ">
        <Links />
      </div>
      <div className="flex justify-end  mt-2 pt-4 border-t border-slate-400">
        <button className="px-5 py-2 bg-[#633bfe] text-white rounded-md">save</button>
      </div>
    </div>
  );
}
