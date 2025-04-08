import Sidebar from "../../Layout/Sidebar";
import Navbar from "../../Layout/SoftwareNavbar";

const InstructorDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">Welcome to Instructor Dashboard</div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
