import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useLocalStorage from "../../lib/useLocalStorage";
import { useAppContext } from "../../contexts/AppProvider";
import AddPicture from "./AddPicture";
import deepEqual from "deep-equal";
import validator from "validator";

export default function Profile() {
  const [show, setShow] = useState(false);
  const { user, setUser, userInput, setUserInput } = useAppContext();
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
    resetErrors();
    let error = false;
    if (userInput.firstName?.length < 1) {
      setErrors((prev) => ({ ...prev, firstName: "First name field can not be empty" }));
      error = true;
    }

    if (userInput.lastName?.length < 1) {
      setErrors((prev) => ({ ...prev, lastName: "Last name field can not be empty" }));
      error = true;
    }

    if (userInput.email.length > 0 && !validator.isEmail(userInput.email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email or leave the field empty" }));
      error = true;
    }

    if (error) return;

    setUser(userInput);
  }

  function cancel() {
    resetErrors();
    setUserInput(user);
  }

  return (
    <div className="h-full flex flex-col px-8 py-8 rounded-2xl bg-white">
      <h2 className="font-bold text-2xl text-[#222]">Profile Details</h2>
      <p className="mt-3 text-slate-500 text-sm">Add your details to create a personal touch to your profile.</p>
      <AddPicture />
      <div className="p-4 space-y-3 rounded-lg bg-[#f6f6f6]">
        <div className="grid sm:grid-cols-[200px_1fr] items-center">
          <p className="mt-2 text-sm text-slate-500">First name*</p>
          <div>
            <input
              type="text"
              value={userInput.firstName}
              onChange={(e) => {
                setUserInput((prev) => ({ ...prev, firstName: e.target.value }));
              }}
              className="border border-slate-300 text-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2 "
              placeholder="John"
            />
            {errors.firstName ? <p className="mt-1 text-xs text-red-600">* {errors.firstName}</p> : ""}
          </div>
        </div>
        <div className="grid sm:grid-cols-[200px_1fr] items-center">
          <p className="mt-2 text-sm text-slate-500">Last name*</p>
          <div>
            <input
              type="text"
              value={userInput.lastName}
              onChange={(e) => {
                setUserInput((prev) => ({ ...prev, lastName: e.target.value }));
              }}
              className="border border-slate-300 text-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2 "
              placeholder="John"
            />
            {errors.lastName ? <p className="mt-1 text-xs text-red-600">* {errors.lastName}</p> : ""}
          </div>
        </div>
        <div className="grid sm:grid-cols-[200px_1fr] items-center">
          <p className="mt-2 text-sm text-slate-500">Email</p>
          <div>
            <input
              type="email"
              value={userInput.email}
              onChange={(e) => {
                setUserInput((prev) => ({ ...prev, email: e.target.value }));
              }}
              className="border border-slate-300 text-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2 "
              placeholder="John"
            />
            {errors.email ? <p className="mt-1 text-xs text-red-600">* {errors.email}</p> : ""}
          </div>
        </div>
      </div>
      <div className="grow"></div>
      <div className="flex justify-end gap-2 mt-2 pt-4 border-t border-slate-400">
        {deepEqual(user, userInput) ? (
          ""
        ) : (
          <button onClick={cancel} className="px-5 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md duration-200">
            Cancel
          </button>
        )}
        <button onClick={save} className="px-5 py-2 bg-[#633bfe] text-white rounded-md">
          save
        </button>
      </div>
    </div>
  );
}
