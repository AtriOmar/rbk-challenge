import React from "react";

import { Bars2Icon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { PLATFORMS } from "../../lib/PLATFORMS";
import { useAppContext } from "../../contexts/AppProvider";

export default function LinkCard({ link, order = 0 }) {
  const { setLinks, setLinksInput, linksInput } = useAppContext();

  return (
    <div className="cursor-move p-4 rounded-lg bg-[#f6f6f6]">
      <div className="flex items-center gap-1 font-medium text-slate-500 text-sm ">
        <Bars2Icon className="w-4" />
        <span>Link #{order + 1}</span>
        <button
          onClick={() => {
            setLinksInput((prev) => prev.filter((l) => l.id !== link.id));
          }}
          className="ml-auto font-thin hover:text-slate-800"
        >
          Remove
        </button>
      </div>
      <p className="mt-2 text-xs text-slate-500">Platform</p>
      <div className="relative">
        <select
          name=""
          id=""
          className="w-full mt-1 py-2 pl-10 pr-4 border border-slate-300 rounded-md text-slate-700"
          value={linksInput.find((l) => l.id === link.id).platform}
          onChange={(e) => {
            setLinksInput((prev) => {
              const newLinks = [...prev];
              const l = newLinks.find((l) => l.id === link.id);
              l.platform = e.target.value;
              return newLinks;
            });
          }}
        >
          <option value="github">Github</option>
          <option value="facebook">Facebook</option>
          <option value="youtube">Youtube</option>
          <option value="instagram">Instagarm</option>
          <option value="linkedin">LinkedIn</option>
          <option value="twitter">Twitter</option>
        </select>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <FontAwesomeIcon icon={PLATFORMS[link.platform].icon} className="mx-auto" />
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-500">Link</p>
      <div className="bg-white relative flex items-center text-slate-500 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2 ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <FontAwesomeIcon icon={faLink} />
        </div>
        <div className="text-slate-600">{PLATFORMS[link.platform]?.baseUrl}</div>
        <input
          type="text"
          value={linksInput.find((l) => l.id === link.id).link}
          onChange={(e) => {
            setLinksInput((prev) => {
              const newLinks = [...prev];
              const l = newLinks.find((l) => l.id === link.id);
              l.link = e.target.value;
              return newLinks;
            });
          }}
          id="input-group-1"
          className="bg-transparent text-black focus:ring-blue-500 focus:border-blue-500 block w-full pl-1 pr-4 py-2 "
          placeholder="John-Doe"
        />
      </div>
    </div>
  );
}
