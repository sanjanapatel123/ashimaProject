import React, { useState } from "react";
import { FaEye, FaEdit, FaBan, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddInstructorModal from "./AddInstructor";

const ManageInstructors = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage Instructors</h2>
        
          <button
            className="bg-[#047670] text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Add Instructor
          </button>

          <AddInstructorModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="flex flex-wrap gap-2 mb-4">
            <input
              type="text"
              placeholder="Search instructors..."
              className="border px-3 py-2 rounded w-full md:w-auto"
            />
            <select className="border px-3 py-2 rounded">
              <option>All Status</option>
            </select>
            <select className="border px-3 py-2 rounded">
              <option>All Courses</option>
            </select>
            <button className="border px-3 py-2 rounded flex items-center gap-2">
              <span>Export</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50">
                <tr className="text-gray-500">
                  <th className="p-2">
                    <input type="checkbox" />
                  </th>
                  <th className="p-2">Instructor</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Mobile</th>
                  <th className="p-2">Courses</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2">
                    <div>
                      <strong>Dr. Michael Brown</strong>
                      <div className="text-xs text-gray-500">
                        Web Development
                      </div>
                    </div>
                  </td>
                  <td className="p-2">michael.brown@example.com</td>
                  <td className="p-2">+1 234 567 8901</td>
                  <td className="p-2">12</td>
                  <td className="p-2">
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                      Active
                    </span>
                  </td>
                  <td className="p-2 flex gap-2 text-gray-600 text-base">
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
            <div>Showing 1 to 10 of 50 results</div>
            <div className="flex gap-2">
              <button className="border px-2 py-1 rounded">Previous</button>
              <button className="bg-[#047670] text-white px-2 py-1 rounded">
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

export default ManageInstructors;
