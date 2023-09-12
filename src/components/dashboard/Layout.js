import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "../../styles/dashboard.css";
import { FaBars } from "react-icons/fa";

const Layout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div
      className={`app ${sidebarVisible ? "sidebar-visible" : ""}`}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
