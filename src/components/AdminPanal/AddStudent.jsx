import React, { useState } from "react";
import axios from "axios"; // Make sure to import axios
import BASE_URL from "../../../config";
import Swal from "sweetalert2"; // Ensure to import Swal
import Select from "react-select"; // Import react-select for multi-select dropdown

const AddStudentModal = ({ isOpen, onClose }) => {
  const [selectedCourses, setSelectedCourses] = useState([]); // To hold multiple selected courses
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Prepare FormData to send
    const formData = {
      fullName,
      email,
      mobileNumber,
      password,
      confirmPassword,
      courses: selectedCourses.map((course) => course.value), // Extracting the selected course values
      isActive,
    };

    console.log("Form Data:", formData); // Log the form data to the console

    try {
      // Perform the POST request to the API
      const response = await axios.post(`${BASE_URL}/createStudent`, formData, {
        headers: {
          "Content-Type": "application/json", // Ensure correct content type for JSON
        },
      });

      console.log("API Response:", response); // Log the API response

      // Check if the API response is successful
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Student Added Successfully!",
          text: "The student has been added to the system.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("API Error:", error);

      // Error handling with detailed information
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response ? error.response.data.message : "An error occurred while adding the student.",
      });
    }
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
              value={fullName}
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
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border px-3 py-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border px-3 py-2 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* Multi-select dropdown using react-select */}
            <Select
              isMulti
              name="courses"
              options={[
                { value: "Web Development", label: "Web Development" },
                { value: "Mobile App Development", label: "Mobile App Development" },
                { value: "Data Science", label: "Data Science" },
                { value: "UI/UX Design", label: "UI/UX Design" },
              ]}
              value={selectedCourses}
              onChange={setSelectedCourses}
              className="w-full"
            />

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
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
      