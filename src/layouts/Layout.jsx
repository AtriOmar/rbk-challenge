import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

export default function Layout() {
  return (
    <div className="p-4">
      <Navbar />
      <Outlet />
    </div>
  );
}
