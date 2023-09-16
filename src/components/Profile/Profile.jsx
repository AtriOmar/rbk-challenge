import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useLocalStorage from "../../lib/useLocalStorage";
import { useAppContext } from "../../contexts/AppProvider";
import AddPicture from "./AddPicture";

export default function Profile() {
  const [show, setShow] = useState(false);
  const { user, setUser } = useAppContext();

  return (
    <div className="h-full flex flex-col px-8 py-8 rounded-2xl bg-white">
      <h2 className="font-bold text-2xl text-[#222]">Profile Details</h2>
      <p className="mt-3 text-slate-500 text-sm">Add your details to create a personal touch to your profile.</p>
      <AddPicture />
      <div className="p-4 space-y-3 rounded-lg bg-[#f6f6f6]">
        <div className="grid grid-cols-[200px_1fr] items-center">
          <p className="mt-2 text-sm text-slate-500">First name*</p>
          <input
            type="text"
            value={user.firstName}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, firstName: e.target.value }));
            }}
            className="border border-slate-300 text-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2 "
            placeholder="John"
          />
        </div>
        <div className="grid grid-cols-[200px_1fr] items-center">
          <p className="mt-2 text-sm text-slate-500">Last name*</p>
          <input
            type="text"
            value={user.lastName}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, lastName: e.target.value }));
            }}
            className="border border-slate-300 text-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2 "
            placeholder="John"
          />
        </div>
        <div className="grid grid-cols-[200px_1fr] items-center">
          <p className="mt-2 text-sm text-slate-500">Email</p>
          <input
            type="email"
            value={user.email}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, email: e.target.value }));
            }}
            className="border border-slate-300 text-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2 "
            placeholder="John"
          />
        </div>
      </div>
      <div className="grow"></div>
      <div className="flex justify-end  mt-2 pt-4 border-t border-slate-400">
        <button className="px-5 py-2 bg-[#633bfe] text-white rounded-md">save</button>
      </div>
    </div>
  );
}
