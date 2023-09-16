import { faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Modal from "../Modal";
import { PLATFORMS } from "../../lib/PLATFORMS";
import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../../contexts/AppProvider";

export default function AddLinkModal({ show, hide = () => {}, afterLeave = () => {} }) {
  const inputRef = useRef(null);
  const [input, setInput] = useState({
    platform: "github",
    link: "",
  });
  const { setLinks } = useAppContext();

  const [errors, setErrors] = useState({
    link: "",
  });

  function resetErrors() {
    setErrors({
      link: "",
    });
  }

  function addLink() {
    resetErrors();
    let error = false;
    if (input.link?.length < 1) {
      setErrors((prev) => ({ ...prev, link: "Link field can not be empty" }));
      error = true;
    }

    if (error) return;

    setLinks((prev) => [...prev, { id: uuidv4().toString(), platform: input.platform, link: input.link }]);
    resetInput();
    hide();
  }

  function resetInput() {
    setInput({
      platform: "github",
      link: "",
    });
  }

  return (
    <div>
      <Modal
        show={show}
        hide={hide}
        dialogClassName="w-full scr600:max-w-[500px] h-fit my-auto pt-10 pb-6 px-4 rounded-lg"
        initialFocusRef={inputRef}
        afterLeave={afterLeave}
      >
        <div className=" bg-white pb-5 px-2">
          <div className="flex justify-between">
            <h3 className="text-lg font-medium text-[#6249c7]">Add new link</h3>
            <button type="button" onClick={hide}>
              <FontAwesomeIcon icon={faXmark} size="lg" color="#6249c7" />
            </button>
          </div>
          <p className="mt-6 text-xs text-slate-600">Platform</p>
          <div className="relative">
            <select
              name=""
              id=""
              className="w-full mt-1 py-2 pl-10 pr-4 border border-slate-300 rounded-md text-slate-700"
              value={input.platform}
              onChange={(e) => {
                setInput((prev) => ({ ...prev, platform: e.target.value }));
              }}
            >
              <option value="github">Github</option>
              <option value="facebook">Facebook</option>
              <option value="youtube">Youtube</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
              <option value="twitter">Twitter</option>
            </select>
            <div className="absolute left-0 top-[calc(50%_+_2px)] -translate-y-1/2 flex items-center pl-3.5 pointer-events-none">
              <FontAwesomeIcon icon={PLATFORMS[input.platform]?.icon} className="" />
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">Link</p>
          <div className="relative flex items-center text-slate-500 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2 ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FontAwesomeIcon icon={faLink} />
            </div>
            <div className="text-slate-600">{PLATFORMS[input.platform]?.baseUrl}</div>
            <input
              type="text"
              value={input.link}
              onChange={(e) => {
                setInput((prev) => ({ ...prev, link: e.target.value }));
              }}
              id="input-group-1"
              className="text-black focus:ring-blue-500 focus:border-blue-500 block w-full pl-1 pr-4 py-2 "
              placeholder="John-Doe"
            />
          </div>
          {errors.link ? <p className="mt-1 text-xs text-red-600">* {errors.link}</p> : ""}
          <button
            onClick={() => {
              addLink();
            }}
            className="block ml-auto mt-6  px-5 py-2 bg-[#633bfe] text-white rounded-md"
          >
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
}
