import React from "react";

import { Bars2Icon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { PLATFORMS } from "../../lib/PLATFORMS";

export default function LinkCard({ link, order = 0 }) {
  return (
    <div className="cursor-move p-4 rounded-lg bg-[#f6f6f6]">
      <div className="flex gap-1 font-medium text-slate-500 text-sm ">
        <Bars2Icon className="w-4" />
        <span>Link #{order + 1}</span>
      </div>
      <p className="mt-2 text-xs text-slate-500">Platform</p>
      <div className="relative">
        <select
          name=""
          id=""
          className="w-full mt-1 py-2 pl-10 pr-4 border border-slate-300 rounded-md text-slate-700"
          value={link.platform}
          onChange={() => {}}
        >
          <option value="github">Github</option>
          <option value="facebook">Facebook</option>
          <option value="youtube">Youtube</option>
          <option value="instagarm">Instagarm</option>
          <option value="linkedIn">LinkedIn</option>
          <option value="twitter">Twitter</option>
        </select>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <FontAwesomeIcon icon={PLATFORMS[link.platform].icon} className="mx-auto" />
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-500">Link</p>
      <div className="relative text-slate-500">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <FontAwesomeIcon icon={faLink} />
        </div>
        <input
          type="text"
          value={link.link}
          onChange={() => {}}
          id="input-group-1"
          className="border border-slate-300 text-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2 "
          placeholder="https://www.github.com/John-Doe"
        />
      </div>
    </div>
  );
}
