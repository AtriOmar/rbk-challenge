import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../contexts/AppProvider";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

function MobileNavbar() {
  const { mobileNavbarOpen, setMobileNavbarOpen } = useAppContext();
  const [open, setOpen] = useState(-1);

  //   closing the dropdown whenever the navbar closes
  useEffect(() => {
    !mobileNavbarOpen && setOpen(-1);
  }, [mobileNavbarOpen]);

  return (
    <div className={`fixed top-0 left-0 w-full h-screen overflow-hidden z-[1000] ${mobileNavbarOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <Transition
        show={mobileNavbarOpen}
        enter="transition duration-1000"
        enterFrom="opacity-0 "
        enterTo="opacity-100 "
        leave="transition duration-1000"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0 "
      >
        <div className="bg-[rgba(0,0,0,.5)] w-full h-screen absolute top-0 right-0 cursor-pointer" onClick={() => setMobileNavbarOpen(false)}></div>
      </Transition>
      <Transition
        show={mobileNavbarOpen}
        enter="transition duration-1000"
        enterFrom="translate-x-full "
        enterTo="translate-x-0 "
        leave="transition duration-1000"
        leaveFrom="translate-x-0 "
        leaveTo="translate-x-full "
      >
        <div className="w-full h-screen pt-8 pb-28 px-4 absolute top-0 right-0 font-open font-semibold text-base text-slate-900  bg-white overflow-y-scroll">
          <button className="absolute top-5 right-5" onClick={() => setMobileNavbarOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          {/* logo */}
          <div className="w-2/3 m-auto">
            <Link to="/" onClick={() => setMobileNavbarOpen(false)}>
              <img src={"/icon.png"} alt="logo" className="w-full max-w-[100px] mx-auto" />
            </Link>
          </div>
          {/* menu */}
          <ul className="divide-y mt-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#efecff] text-[#6249c7]" : "text-slate-500"
                  } block my-2 hover:ring-1 ring-[#6249c7] flex gap-2 px-4 py-1.5 rounded-md duration-300`
                }
              >
                <i className="">
                  <FontAwesomeIcon icon={faLink} />
                </i>
                <span className="font-medium">Links</span>
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-[#efecff] text-[#6249c7]" : "text-slate-500"
                  } block my-2 hover:ring-1 ring-[#6249c7] flex gap-2 px-4 py-1.5 rounded-md duration-300`
                }
              >
                <i className="">
                  <FontAwesomeIcon icon={faCircleUser} />
                </i>
                <span className="font-medium">Profile Details</span>
              </NavLink>
              <Link
                to={"/preview"}
                className="block px-4 py-1.5 border border-[#6249c7] rounded-md font-medium text-[#6249c7] hover:bg-[#6249c7] hover:text-white duration-300"
              >
                Preview
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default MobileNavbar;
