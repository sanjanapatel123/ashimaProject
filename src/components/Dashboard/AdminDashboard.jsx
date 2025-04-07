import React from "react";
import Sidebar from "../../Layout/Sidebar";
import Navbar from "../../Layout/SoftwareNavbar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">Welcome to Admin Dashboard</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
