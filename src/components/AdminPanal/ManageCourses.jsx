// import React from "react";
// import { FaEye, FaEdit, FaBan, FaTrash } from "react-icons/fa";

// const ManageCourses = () => {
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-semibold">Manage Courses</h2>
//         <button className="bg-black text-white px-4 py-2 rounded">
//           Add Course
//         </button>
//       </div>

//       <div className="bg-white p-4 rounded shadow">
//         <div className="flex flex-wrap gap-2 mb-4">
//           <input
//             type="text"
//             placeholder="Search courses..."
//             className="border px-3 py-2 rounded w-full md:w-auto"
//           />
//           <select className="border px-3 py-2 rounded">
//             <option>All Status</option>
//           </select>
//           <select className="border px-3 py-2 rounded">
//             <option>All Categories</option>
//           </select>
//           <select className="border px-3 py-2 rounded">
//             <option>All Instructors</option>
//           </select>
//           <button className="border px-3 py-2 rounded">Price Range</button>
//           <button className="border px-3 py-2 rounded flex items-center gap-2">
//             Export
//           </button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-gray-50">
//               <tr className="text-gray-500">
//                 <th className="p-2">
//                   <input type="checkbox" /> Bulk Actions
//                 </th>
//                 <th className="p-2">Course Name</th>
//                 <th className="p-2">Category</th>
//                 <th className="p-2">Instructor</th>
//                 <th className="p-2">Price</th>
//                 <th className="p-2">Mode</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr className="border-b">
//                 <td className="p-2">
//                   <input type="checkbox" />
//                 </td>
//                 <td className="p-2">
//                   <div>
//                     <strong>Advanced Web Development</strong>
//                     <div className="text-xs text-gray-500">
//                       Updated 2 days ago
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p-2">Development</td>
//                 <td className="p-2">John Smith</td>
//                 <td className="p-2">$99</td>
//                 <td className="p-2">
//                   <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
//                     Live
//                   </span>
//                 </td>
//                 <td className="p-2">
//                   <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
//                     Published
//                   </span>
//                 </td>
//                 <td className="p-2 flex gap-2 text-gray-600 text-base">
//                   <FaEye />
//                   <FaEdit />
//                   <FaBan />
//                   <FaTrash />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
//           <div>Showing 1 to 10 of 50 entries</div>
//           <div className="flex gap-2">
//             <button className="border px-2 py-1 rounded">Previous</button>
//             <button className="bg-black text-white px-2 py-1 rounded">1</button>
//             <button className="border px-2 py-1 rounded">2</button>
//             <button className="border px-2 py-1 rounded">3</button>
//             <button className="border px-2 py-1 rounded">Next</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageCourses;

import React from "react";
import { FaEye, FaEdit, FaBan, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";

const ManageCourses = () => {
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage Courses</h2>
          <button className="bg-black text-white px-4 py-2 rounded">
            Add Course
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="flex flex-wrap gap-2 mb-4">
            <input
              type="text"
              placeholder="Search courses..."
              className="border px-3 py-2 rounded w-full md:w-auto"
            />
            <select className="border px-3 py-2 rounded">
              <option>All Status</option>
            </select>
            <select className="border px-3 py-2 rounded">
              <option>All Categories</option>
            </select>
            <select className="border px-3 py-2 rounded">
              <option>All Instructors</option>
            </select>
            <button className="border px-3 py-2 rounded">Price Range</button>
            <button className="border px-3 py-2 rounded flex items-center gap-2">
              Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50">
                <tr className="text-gray-500">
                  <th className="p-3">
                    <input type="checkbox" />{" "}
                    <span className="ml-2">Bulk Actions</span>
                  </th>
                  <th className="p-3">Course Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Instructor</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Mode</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">
                    <div className="flex flex-col">
                      <strong>Advanced Web Development</strong>
                      <span className="text-xs text-gray-500">
                        Updated 2 days ago
                      </span>
                    </div>
                  </td>
                  <td className="p-3">Development</td>
                  <td className="p-3">John Smith</td>
                  <td className="p-3">$99</td>
                  <td className="p-3">
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                      Live
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                      Published
                    </span>
                  </td>
                  <td className="p-3 flex gap-2 text-gray-600 text-base">
                    <FaEye />
                    <FaEdit />
                    <FaBan />
                    <FaTrash />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <div>Showing 1 to 10 of 50 entries</div>
            <div className="flex gap-2">
              <button className="border px-2 py-1 rounded">Previous</button>
              <button className="bg-black text-white px-2 py-1 rounded">
                1
              </button>
              <button className="border px-2 py-1 rounded">2</button>
              <button className="border px-2 py-1 rounded">3</button>
              <button className="border px-2 py-1 rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageCourses;
