// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FaHome,
//   FaBookOpen,
//   FaBox,
//   FaPlus,
//   FaComments,
//   FaChartLine,
//   FaCog,
//   FaUsers,
//   FaFileInvoiceDollar,
//   FaSignOutAlt,
//   FaChevronDown,
//   FaChevronUp,
//   FaBars,
//   FaBook,
//   FaChalkboardTeacher,
//   FaClipboardCheck,
// } from "react-icons/fa";

// const RoleBasedSidebar = () => {
//   const [active, setActive] = useState("Dashboard");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [role, setRole] = useState("");
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) setRole(user.role);

//     const handleInitialCollapse = () => {
//       const isMobile = window.innerWidth < 1024; // lg breakpoint
//       setIsCollapsed(isMobile); // Mobile collapsed, desktop expanded
//     };

//     handleInitialCollapse();
//   }, []);

//   const getMenuItems = () => {
//     switch (role) {
//       case "admin":
//         return [
//           { icon: <FaHome />, label: "Dashboard", path: "/admin-dashboard" },

//           {
//             icon: <FaBookOpen />,
//             label: "My Courses",
//             dropdown: true,
//             children: ["Web Development", "UI/UX Design"],
//           },
//           {
//             icon: <FaBox />,
//             label: "Digital Products",
//             path: "/instructor",
//           },
//           { icon: <FaPlus />, label: "Create New Course" },
//           { icon: <FaComments />, label: "Messages" },
//           { icon: <FaChartLine />, label: "Analytics" },
//           { icon: <FaCog />, label: "Settings" },
//         ];
//       case "student":
//         return [
//           { icon: <FaHome />, label: "Dashboard", path: "/dashboard" },
//           { icon: <FaBook />, label: "My Courses" },
//           { icon: <FaClipboardCheck />, label: "Assignments" },
//           { icon: <FaUsers />, label: "Classmates" },
//         ];
//       case "instructor":
//         return [
//           { icon: <FaHome />, label: "Dashboard" },
//           { icon: <FaChalkboardTeacher />, label: "My Classes" },
//           {
//             icon: <FaClipboardCheck />,
//             label: "Manage Tasks",
//             dropdown: true,
//             children: ["Create Task", "Submissions", "Grades"],
//           },
//           { icon: <FaUsers />, label: "Students" },
//         ];
//       default:
//         return [];
//     }
//   };

//   const menuItems = getMenuItems();

//   return (
//     <div
//       className={`fixed lg:relative z-50 transition-all duration-300 bg-white border-r shadow-md h-screen overflow-y-auto ${
//         isCollapsed ? "w-16" : "w-64"
//       }`}
//     >
//       {/* Top Section with Toggle Button */}
//       <div className="flex justify-between items-center p-4 border-b">
//         {!isCollapsed && <h2 className="text-3xl font-impact">AISKILLS</h2>}
//         <button onClick={() => setIsCollapsed(!isCollapsed)}>
//           <FaBars />
//         </button>
//       </div>

//       {/* Sidebar Menu */}
//       <ul className="flex flex-col">
//         {menuItems.map((item, idx) => (
//           <li key={idx}>
//             <div
//               className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all ${
//                 active === item.label
//                   ? "bg-teal-700 font-semibold"
//                   : " hover:bg-teal-100"
//               }`}
//               onClick={() => {
//                 if (item.dropdown) {
//                   setDropdownOpen(!dropdownOpen);
//                 } else {
//                   setActive(item.label);
//                 }
//               }}
//             >
//               <span className="text-lg">{item.icon}</span>
//               {!isCollapsed && (
//                 <>
//                   {item.path ? (
//                     <NavLink
//                       to={item.path}
//                       className={({ isActive }) =>
//                         `flex-1 ${
//                           isActive
//                             ? "text-white"
//                             : "text-black hover:text-teal-700"
//                         }`
//                       }
//                       onClick={() => setActive(item.label)}
//                     >
//                       {item.label}
//                     </NavLink>
//                   ) : (
//                     <span className="flex-1 text-black">{item.label}</span>
//                   )}

//                   {item.dropdown && (
//                     <span>
//                       {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
//                     </span>
//                   )}
//                 </>
//               )}
//             </div>

//             {item.dropdown && dropdownOpen && !isCollapsed && (
//               <ul className="ml-10 mb-2">
//                 {item.children.map((child, cidx) => (
//                   <li
//                     key={cidx}
//                     className={`py-1 px-2 cursor-pointer ${
//                       active === child
//                         ? "font-semibold text-blue-900"
//                         : "hover:text-blue-600"
//                     }`}
//                     onClick={() => setActive(child)}
//                   >
//                     {child}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}

//         {/* Logout */}
//         <li>
//           <div
//             className="flex items-center gap-3 px-4 py-3 text-gray-800 cursor-pointer hover:bg-red-100 hover:text-red-600 transition-all"
//             onClick={() => {
//               localStorage.removeItem("user");
//               window.location.href = "/login";
//             }}
//           >
//             <FaSignOutAlt className="text-lg" />
//             {!isCollapsed && <span>Logout</span>}
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default RoleBasedSidebar;

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBookOpen,
  FaBox,
  FaPlus,
  FaComments,
  FaChartLine,
  FaCog,
  FaUsers,
  FaFileInvoiceDollar,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaBook,
  FaChalkboardTeacher,
  FaClipboardCheck,
} from "react-icons/fa";

const RoleBasedSidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [active, setActive] = useState("Dashboard");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [role, setRole] = useState("");
  // const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User in Sidebar:", user);
    if (user) setRole(user.role);

    // Responsive logic to keep sidebar open even on small screens
    const handleResize = () => {
      setIsCollapsed(false); // Always open by default on all screen sizes
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!role) return <div className="p-4">Loading Sidebar...</div>;

  const getMenuItems = () => {
    switch (role) {
      case "admin":
        return [
          { icon: <FaHome />, label: "Dashboard", path: "/admin-dashboard" },
          {
            icon: <FaBookOpen />,
            label: "My Courses",
            dropdown: true,
            children: ["Web Development", "UI/UX Design"],
          },
          {
            icon: <FaBox />,
            label: "Digital Products",
            path: "/instructor",
          },
          { icon: <FaPlus />, label: "Create New Course" },
          { icon: <FaComments />, label: "Messages" },
          { icon: <FaChartLine />, label: "Analytics" },
          { icon: <FaCog />, label: "Settings" },
        ];
      case "student":
        return [
          { icon: <FaHome />, label: "Dashboard", path: "/student-dashboard" },
          { icon: <FaBook />, label: "My Courses" },
          { icon: <FaClipboardCheck />, label: "Assignments" },
          { icon: <FaUsers />, label: "Classmates" },
        ];
      case "instructor":
        return [
          {
            icon: <FaHome />,
            label: "Dashboard",
            path: "/instructor-dashboard",
          },
          { icon: <FaChalkboardTeacher />, label: "My Classes" },
          {
            icon: <FaClipboardCheck />,
            label: "Manage Tasks",
            dropdown: true,
            children: ["Create Task", "Submissions", "Grades"],
          },
          { icon: <FaUsers />, label: "Students" },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div
      // className={`fixed lg:relative z-50 transition-all duration-300 bg-white border-r shadow-md h-screen overflow-y-auto ${
      //   isCollapsed ? "w-16" : "w-64"
      // }`}
      className={`fixed z-50 transition-all duration-300 bg-white border-r shadow-md h-screen overflow-y-auto ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Top Section with Toggle Button */}
      <div className="flex justify-between items-center p-4 border-b">
        {!isCollapsed && <h2 className="text-3xl font-impact">AISKILLS</h2>}
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          <FaBars />
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul className="flex flex-col">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <div
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all ${
                active === item.label
                  ? "bg-teal-700 font-semibold text-white"
                  : "hover:bg-teal-100"
              }`}
              onClick={() => {
                if (item.dropdown) {
                  setDropdownOpen(!dropdownOpen);
                } else {
                  setActive(item.label);
                }
              }}
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && (
                <>
                  {item.path ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex-1 ${
                          isActive
                            ? "text-white"
                            : "text-black hover:text-teal-700"
                        }`
                      }
                      onClick={() => setActive(item.label)}
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <span className="flex-1 text-black">{item.label}</span>
                  )}

                  {item.dropdown && (
                    <span>
                      {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  )}
                </>
              )}
            </div>

            {item.dropdown && dropdownOpen && !isCollapsed && (
              <ul className="ml-10 mb-2">
                {item.children.map((child, cidx) => (
                  <li
                    key={cidx}
                    className={`py-1 px-2 cursor-pointer ${
                      active === child
                        ? "font-semibold text-blue-900"
                        : "hover:text-blue-600"
                    }`}
                    onClick={() => setActive(child)}
                  >
                    {child}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* Logout */}
        <li>
          <div
            className="flex items-center gap-3 px-4 py-3 text-gray-800 cursor-pointer hover:bg-red-100 hover:text-red-600 transition-all"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
          >
            <FaSignOutAlt className="text-lg" />
            {!isCollapsed && <span>Logout</span>}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RoleBasedSidebar;
