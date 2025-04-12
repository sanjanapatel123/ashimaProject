import React, { useState } from "react";
import { FaEye, FaEdit, FaBan, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddCoursesModal from "./AddCoursesModal";
import { Link } from "react-router-dom";

const ManageCourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const coursesData = [
    {
      id: 1,
      name: "Advanced Web Development",
      category: "Development",
      instructor: "John Smith",
      price: "$99",
      mode: "Live",
      status: "Published",
      updated: "2 days ago",
    },
    {
      id: 2,
      name: "UI/UX Design Masterclass",
      category: "Design",
      instructor: "Sarah Johnson",
      price: "$79",
      mode: "Hybrid",
      status: "Draft",
      updated: "5 days ago",
    },
    {
      id: 3,
      name: "Data Science Fundamentals",
      category: "Data Science",
      instructor: "Mike Wilson",
      price: "$120",
      mode: "Recorded",
      status: "Published",
      updated: "1 day ago",
    },
    {
      id: 4,
      name: "Digital Marketing Basics",
      category: "Marketing",
      instructor: "Emma Brown",
      price: "$49",
      mode: "Live",
      status: "Published",
      updated: "3 days ago",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Heading & Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage Courses</h2>
          <button
            className="bg-teal-700 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Add Course
          </button>
        </div>

        <AddCoursesModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        {/* Filter Section */}
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

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-nowrap">
              <thead className="bg-gray-50">
                <tr className="text-gray-500">
                  <th className="p-2">
                    <input type="checkbox" />
                  </th>
                  {/* Course Name */}
                  <th className="p-2">Course Name</th>

                  <th className="p-2">Category</th>
                  <th className="p-2">Instructor</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Mode</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {coursesData.map((course) => (
                  <tr className="border-b" key={course.id}>
                    <td className="p-2">
                      <input type="checkbox" />
                    </td>

                    <td className="p-2">
                      <div className="flex flex-col">
                        <Link
                          to={`/course/${course.id}`}
                          className="font-semibold text-teal-700"
                        >
                          {course.name}
                        </Link>
                        <span className="text-xs text-gray-500">
                          Updated {course.updated}
                        </span>
                      </div>
                    </td>

                    <td className="p-2">{course.category}</td>
                    <td className="p-2">{course.instructor}</td>
                    <td className="p-2">{course.price}</td>
                    <td className="p-2">
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                        {course.mode}
                      </span>
                    </td>
                    <td className="p-2">
                      <span
                        className={`${
                          course.status === "Published"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        } text-xs px-2 py-1 rounded`}
                      >
                        {course.status}
                      </span>
                    </td>
                    <td className="p-2 flex mt-2 gap-2 text-gray-600 text-base">
                      <Link
                        to={`/course/${course.id}`}
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

          {/* Pagination Section */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <div>Showing 1 to 10 of 50 entries</div>
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

export default ManageCourses;
