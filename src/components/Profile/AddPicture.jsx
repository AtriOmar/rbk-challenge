import React, { useState } from "react";
import { useAppContext } from "../../contexts/AppProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/outline";

export default function AddPicture() {
  const { user } = useAppContext();
  const [userInput, setUserInput] = useState(user);

  console.log(userInput);

  return (
    <div className="my-4 p-4 space-y-3 rounded-lg bg-[#f6f6f6]">
      <div className="grid grid-cols-[200px_1fr] items-center">
        <p className="mt-2 text-sm text-slate-500">Profile Picture</p>
        <div className="relative flex items-center justify-center w-[150px] aspect-square rounded-md border border-slate-400">
          {userInput.picture ? (
            <img src={URL.createObjectURL(userInput.picture)} alt="" className="w-full h-full object-cover rounded-md" />
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
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const imageBlob = new Blob([event.target.result], { type: file.type });
                    setUserInput((prev) => ({ ...prev, picture: imageBlob }));
                    // Store the image blob in local storage
                    localStorage.setItem("uploadedImage", imageBlob);
                  };
                  reader.readAsArrayBuffer(file);
                  e.target.value = "";
                }
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
