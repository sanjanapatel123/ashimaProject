import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config";
import Swal from "sweetalert2";
import Select from "react-select";
import { createStudent } from "../Redux/slices/adminSlices/addStudentSlice";
import { useDispatch } from "react-redux";

const AddStudentModal = ({ isOpen, onClose }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [active, setIsActive] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  if (!isOpen) return null;

  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordError("");
    }

    const formData = {
      full_name,
      email,
      mobile_number,
      password,
      course_id: selectedCourses.map((course) => course.value),
      active,
    };

    dispatch(createStudent(formData));
    onClose();
  };

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
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border px-3 py-2 rounded"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border px-3 py-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter mobile number"
              className="w-full border px-3 py-2 rounded"
              value={mobile_number}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border px-3 py-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border px-3 py-2 rounded"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  
                }}
              />
              {passwordError && (
                <p className="text-sm text-red-600 mt-1">{passwordError}</p>
              )}
            </div>

            <Select
              isMulti
              name="courses"
              options={[
                { value: "1", label: "Web Development" },
                { value: "2", label: "Mobile App Development" },
                { value: "3", label: "Data Science" },
                { value: "4", label: "UI/UX Design" },
              ]}
              value={selectedCourses}
              onChange={setSelectedCourses}
              className="w-full"
            />

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={active}
                onChange={() => setIsActive(!active)}
              />
              <span>Active</span>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button onClick={onClose} className="border px-4 py-2 rounded">
                Cancel
              </button>
              <button
                className="bg-[#047670] text-white px-4 py-2 rounded"
                type="submit"
              >
                Save Student
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
