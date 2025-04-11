import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";

const StudentDetails = () => {
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6">Student Details</h2>

        <div className="bg-white p-6 rounded shadow flex gap-6">
          {/* Left Side Image & Basic */}
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://via.placeholder.com/120"
              alt="student"
              className="rounded-full w-[120px] h-[120px]"
            />
            <h3 className="font-semibold">Sarah Johnson</h3>
            <p className="text-xs text-gray-500">Student ID: ST0204001</p>
            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
              Active
            </span>
          </div>

          {/* Right Side Details */}
          <div className="w-full grid grid-cols-2 gap-4 text-sm">
            <p>
              <strong>Email Address</strong>
              <br />
              sarah.johnson@example.com
            </p>
            <p>
              <strong>Mobile Number</strong>
              <br />
              +1 234 567 8900
            </p>
            <p>
              <strong>Enrollment Date</strong>
              <br />
              January 15, 2024
            </p>
            <p>
              <strong>Completed Courses</strong>
              <br />4 of 6 courses
            </p>

            <div className="col-span-2 border-t my-3"></div>

            <p className="col-span-2 font-semibold">Enrolled Courses</p>

            <div className="col-span-2 flex justify-between">
              Web Development Fundamentals{" "}
              <span className="text-green-500 text-xs">In Progress</span>
            </div>

            <div className="col-span-2 flex justify-between">
              UI/UX Design Basics{" "}
              <span className="text-blue-500 text-xs">Completed</span>
            </div>

            <div className="col-span-2 border-t my-3"></div>

            <p className="col-span-2 font-semibold">Certificates Earned</p>

            <div className="border p-3 rounded flex justify-between items-center">
              UI/UX Design Certificate
              <button className="text-lg">⬇️</button>
            </div>

            <div className="col-span-2 border-t my-3"></div>

            <p className="col-span-2 font-semibold">Recent Activity</p>

            <ul className="col-span-2 list-disc pl-4 text-gray-600 text-xs">
              <li>Completed Module 5 of Web Development - 2 hours ago</li>
              <li>Submitted Project: Portfolio Website - Yesterday</li>
            </ul>

            <div className="col-span-2 flex justify-end gap-2 mt-4">
              <button className="border px-4 py-2 rounded">Edit Profile</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded">
                Block Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDetails;
