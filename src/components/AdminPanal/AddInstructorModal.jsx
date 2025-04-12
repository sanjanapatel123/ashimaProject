import React, { useState } from "react";

const AddInstructorModal = ({ isOpen, onClose }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseChange = (e) => {
    const options = [...e.target.options];
    const selected = options.filter((opt) => opt.selected).map((opt) => opt.value);
    setSelectedCourses(selected);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[95%] md:w-[70%] lg:w-[50%] max-h-[90vh] overflow-y-auto p-5 rounded shadow relative">
        <h3 className="text-xl font-bold mb-4">Add New Instructor</h3>

        <form className="space-y-4">
          {/* Full Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium mb-1 block">Full Name</label>
              <input type="text" className="border p-2 rounded w-full" placeholder="Enter full name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Email Address</label>
              <input type="email" className="border p-2 rounded w-full" placeholder="Enter email address" />
            </div>
          </div>

          {/* Mobile & Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium mb-1 block">Mobile Number</label>
              <input type="text" className="border p-2 rounded w-full" placeholder="Enter mobile number" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Password</label>
              <input type="password" className="border p-2 rounded w-full" placeholder="Enter password" />
            </div>
          </div>

          {/* Confirm Password & Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium mb-1 block">Confirm Password</label>
              <input type="password" className="border p-2 rounded w-full" placeholder="Confirm password" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Expertise</label>
              <input type="text" className="border p-2 rounded w-full" placeholder="Enter expertise" />
            </div>
          </div>

          {/* Profile Image */}
          <div>
            <label className="text-sm font-medium mb-1 block">Profile Image</label>
            <div className="border border-dashed p-5 rounded text-center">
              <p className="text-sm mb-1">Upload a file or drag and drop</p>
              <small className="text-gray-500">PNG, JPG, GIF up to 10MB</small>
              <input type="file" className="hidden" />
            </div>
          </div>

          {/* Bank & IFSC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium mb-1 block">Bank Account Number</label>
              <input type="text" className="border p-2 rounded w-full" placeholder="Enter account number" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">IFSC Code</label>
              <input type="text" className="border p-2 rounded w-full" placeholder="Enter IFSC code" />
            </div>
          </div>

          {/* Course Categories */}
          <div>
            <label className="text-sm font-medium mb-1 block">Course Categories</label>
            <select
              multiple
              value={selectedCourses}
              onChange={handleCourseChange}
              className="border p-2 rounded w-full"
            >
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Data Science">Data Science</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">
              (Hold Ctrl or Command for multiple selection)
            </p>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-sm">Active</label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="border px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-teal-700 text-white px-4 py-2 rounded">
              Save Instructor
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default AddInstructorModal;
