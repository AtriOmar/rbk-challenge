import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useLocalStorage from "../../lib/useLocalStorage";
import Links from "./Links";
import AddLinkModal from "./AddLinkModal";
import validator from "validator";
import deepEqual from "deep-equal";
import { useAppContext } from "../../contexts/AppProvider";

export default function ManageLinks() {
  const [show, setShow] = useState(false);
  const { links, setLinks, linksInput, setLinksInput } = useAppContext();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function resetErrors() {
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  function save() {
    // resetErrors();
    // let error = false;
    // if (userInput.firstName?.length < 1) {
    //   setErrors((prev) => ({ ...prev, firstName: "First name field can not be empty" }));
    //   error = true;
    // }

    // if (userInput.lastName?.length < 1) {
    //   setErrors((prev) => ({ ...prev, lastName: "Last name field can not be empty" }));
    //   error = true;
    // }

    // if (userInput.email.length > 0 && !validator.isEmail(userInput.email)) {
    //   setErrors((prev) => ({ ...prev, email: "Please enter a valid email or leave the field empty" }));
    //   error = true;
    // }

    // if (error) return;

    setLinks(linksInput);
  }

  function cancel() {
    resetErrors();
    setLinksInput(links);
  }

  return (
    <div className="h-full flex flex-col px-8 py-8 rounded-2xl bg-white">
      <AddLinkModal show={show} hide={() => setShow(false)} />
      <h2 className="font-bold text-2xl text-[#222]">Customize your links</h2>
      <p className="mt-3 text-slate-500 text-sm">Add/edit/remove links below and then share all your profiles with the world!</p>
      <button
        onClick={() => setShow(true)}
        className="flex items-center justify-center gap-2 w-full mt-8 px-4 py-1.5 border border-[#6249c7] rounded-md font-medium text-[#6249c7] hover:bg-[#6249c7] hover:text-white duration-300"
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add new link</span>
      </button>
      <div className="overflow-y-scroll grow ">
        <Links />
      </div>
      <div className="flex justify-end gap-2 mt-2 pt-4 border-t border-slate-400">
        {deepEqual(links, linksInput) ? (
          ""
        ) : (
          <button onClick={cancel} className="px-5 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md duration-200">
            Cancel
          </button>
        )}
        <button onClick={save} className="px-5 py-2 bg-[#633bfe] hover:bg-indigo-700 duration-300 text-white rounded-md">
          save
        </button>
      </div>
    </div>
  );
}
