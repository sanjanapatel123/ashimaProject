import React, { useState } from "react";
import { FaEye, FaEdit, FaBan, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddInstructorModal from "./AddInstructorModal";
import { Link } from "react-router-dom";

const ManageInstructors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage Instructors</h2>
          {/* <button className="bg-[#047670] text-white px-4 py-2 rounded">
            Add Instructor
          </button> */}

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
            <table className="w-full text-sm text-center text-nowrap">
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
                {[
                  {
                    id: 1,
                    name: "Dr. Michael Brown",
                    specialization: "Web Development",
                    email: "michael.brown@example.com",
                    mobile: "+1 234 567 8901",
                    courses: 12,
                    status: "Active",
                  },
                  {
                    id: 2,
                    name: "John Smith",
                    specialization: "UI/UX Expert",
                    email: "john.smith@example.com",
                    mobile: "+1 987 654 3210",
                    courses: 8,
                    status: "Active",
                  },
                ].map((instructor) => (
                  <tr className="border-b" key={instructor.id}>
                    <td className="p-2">
                      <input type="checkbox" />
                    </td>
                    <td className="p-2">
                      <Link
                        to={`/instructor/${instructor.id}`}
                        className="text-teal-700 hover:underline"
                      >
                        <strong>{instructor.name}</strong>
                        <div className="text-xs text-gray-500">
                          {instructor.specialization}
                        </div>
                      </Link>
                    </td>
                    <td className="p-2">{instructor.email}</td>
                    <td className="p-2">{instructor.mobile}</td>
                    <td className="p-2">{instructor.courses}</td>
                    <td className="p-2">
                      <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                        {instructor.status}
                      </span>
                    </td>
                    <td className="p-2 mt-2 flex gap-2 text-gray-600 text-base">
                      <Link
                        to={`/instructor/${instructor.id}`}
                        className="text-gray-600"
                      >
                        <FaEye />
                      </Link>
                      <FaEdit />
                      <FaTrash />
                    </td>
                  </tr>
                ))}
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
