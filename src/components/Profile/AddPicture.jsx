import React, { useState } from "react";
import { useAppContext } from "../../contexts/AppProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function AddPicture() {
  const { user, userInput, setUserInput } = useAppContext();

  console.log(userInput);

  return (
    <div className="my-4 p-4 space-y-3 rounded-lg bg-[#f6f6f6]">
      <img src="" alt="" />
      <div className="grid sm:grid-cols-[200px_1fr] items-center">
        <p className="mt-2 text-sm text-slate-500">Profile Picture</p>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
          <div className="relative flex items-center justify-center max-w-[150px] aspect-square rounded-md border border-slate-400">
            {userInput.picture ? (
              <img src={userInput.picture} alt="" className="w-full h-full object-cover rounded-md" />
            ) : (
              <>
                <UserCircleIcon className="text-slate-500 w-full " />
              </>
            )}
            <label className="absolute inset-0 flex items-center justify-center rounded-md bg-black/50 opacity-0 hover:opacity-100 cursor-pointer duration-300">
              <div className="">
                <PhotoIcon className="text-white w-7 mx-auto" />
                <p className="text-white text-center">Change Image</p>
              </div>
              <input
                type="file"
                name=""
                id=""
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file?.type?.startsWith("image")) {
                    //   setUserInput((prev) => ({ ...prev, picture: file }));

                    //   const imgData = getBase64Image(file);
                    //   setUserInput((prev) => ({ ...prev, picture: imgData }));
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const base64Image = event.target.result;
                      console.log(base64Image);
                      setUserInput((prev) => ({ ...prev, picture: base64Image }));
                    };
                    reader.readAsDataURL(file);
                    e.target.value = "";
                  }
                }}
              />
            </label>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Image must be below 1024x1024px.
            <br />
            Use PNG, JPG or BMP format.
          </p>
        </div>
      </div>
    </div>
  );
}
