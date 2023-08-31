import React from "react";
import HeaderDashboard from "../Components/HeaderDashboard";
import Sidebar from "../Components/Sidebar";

const DashboardLayout = (props) => {
  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <div className="flex-1 min-h-screen ">
        <HeaderDashboard />
        {props.children}
      </div>
    </div>
  );
};

export default DashboardLayout;
