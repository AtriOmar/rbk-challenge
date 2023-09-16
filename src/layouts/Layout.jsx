import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Phone from "../components/Home/Phone";

export default function Layout() {
  return (
    <div className="">
      <Navbar />
      <section className="flex flex-col md:flex-row gap-4 h-[calc(100vh_-_92px)] pt-0 p-4">
        <article className="w-full md:w-[40%] md:h-full ">
          <Phone />
        </article>
        <article className="w-full md:w-[60%] h-full md:overflow-hidden">
          <Outlet />
        </article>
      </section>
    </div>
  );
}
