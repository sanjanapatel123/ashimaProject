import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Link } from "react-router-dom";

import {
  faPlus,
  faEdit,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const MyCourses = () => {
  return (
    <DashboardLayout>
      <div className="bg-gray-50 font-sans min-h-screen flex">
        {/* Sidebar space reserved */}
        <div className="flex-1">
          <main className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
              <button className="!rounded-button bg-custom text-white px-4 py-2 flex items-center space-x-2 hover:bg-custom/90">
                <i className="fas fa-plus"></i>
                <Link to="/createnewpage">
                  <span>Create New Course</span>
                </Link>
              </button>
            </div>

            <div className="flex space-x-4 mb-6">
              <select className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-gray-700">
                <option>All Types</option>
                <option>Video</option>
                <option>Live</option>
                <option>Hybrid</option>
              </select>
              <select className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-gray-700">
                <option>All Status</option>
                <option>Published</option>
                <option>Draft</option>
              </select>
            </div>

            <div className="bg-white rounded-lg shadow">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Course Title
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Mode
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Enrollment
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Status
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Last Updated
                    </th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src="https://creatie.ai/ai/api/search-image?query=A modern web development interface showing code editor and browser preview, with clean design elements&width=40&height=40&orientation=squarish&flag=2817f38f-bb86-4538-ae0e-53702b44bb41"
                          className="w-10 h-10 rounded-lg mr-3"
                        />
                        <span className="font-medium text-gray-900">
                          Advanced Web Development
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        Video
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">234 students</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Published
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">2024-02-15</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end space-x-2">
                        <button className="!rounded-button text-custom hover:bg-custom/10 p-2">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="!rounded-button text-gray-600 hover:bg-gray-100 p-2">
                          <i className="fas fa-eye"></i>
                        </button>
                        <button className="!rounded-button text-red-600 hover:bg-red-50 p-2">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src="https://creatie.ai/ai/api/search-image?query=A creative UI/UX design workspace with wireframes and design tools visible&width=40&height=40&orientation=squarish&flag=267bb08f-87e9-463a-9e07-334ef6971130"
                          className="w-10 h-10 rounded-lg mr-3"
                        />
                        <span className="font-medium text-gray-900">
                          UI/UX Design Fundamentals
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        Hybrid
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">156 students</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Published
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">2024-02-10</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end space-x-2">
                        <button className="!rounded-button text-custom hover:bg-custom/10 p-2">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="!rounded-button text-gray-600 hover:bg-gray-100 p-2">
                          <i className="fas fa-eye"></i>
                        </button>
                        <button className="!rounded-button text-red-600 hover:bg-red-50 p-2">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src="https://creatie.ai/ai/api/search-image?query=A mobile app development workspace with React Native code and mobile device simulators&width=40&height=40&orientation=squarish&flag=788483eb-16b4-4e23-8ae0-96730f6b583a"
                          className="w-10 h-10 rounded-lg mr-3"
                        />
                        <span className="font-medium text-gray-900">
                          React Native Masterclass
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Live
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">89 students</td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        Draft
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">2024-02-08</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end space-x-2">
                        <button className="!rounded-button text-custom hover:bg-custom/10 p-2">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="!rounded-button text-gray-600 hover:bg-gray-100 p-2">
                          <i className="fas fa-eye"></i>
                        </button>
                        <button className="!rounded-button text-red-600 hover:bg-red-50 p-2">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyCourses;





