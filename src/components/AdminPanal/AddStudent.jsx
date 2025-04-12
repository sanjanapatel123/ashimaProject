import React, { useState } from "react";

const AddStudentModal = ({ isOpen, onClose }) => {
  const [selectedCourse, setSelectedCourse] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-black"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4">Add New Student</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Enter mobile number"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full border px-3 py-2 rounded"
          />

          <select
            className="w-full border px-3 py-2 rounded"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select Courses</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">
              Mobile App Development
            </option>
            <option value="Data Science">Data Science</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>

          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" />
            <span>Active</span>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button onClick={onClose} className="border px-4 py-2 rounded">
              Cancel
            </button>
            <button className="bg-[#047670] text-white px-4 py-2 rounded">
              Save Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
