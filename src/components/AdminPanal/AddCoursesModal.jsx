import React from "react";

const AddCoursesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[95%] md:w-[70%] lg:w-[50%] max-h-[90vh] overflow-y-auto p-5 rounded shadow relative">
        <h3 className="text-xl font-bold mb-4">Add New Course</h3>

        <form className="space-y-4">
          {/* Course Title & Description */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Course Title
            </label>
            <input
              type="text"
              placeholder="Enter course title"
              className="border p-2 rounded w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">
              Course Description
            </label>
            <textarea
              placeholder="Enter course description"
              className="border p-2 rounded w-full"
              rows="3"
            ></textarea>
          </div>

          {/* Course Image */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Course Image
            </label>
            <div className="border border-dashed p-5 rounded text-center">
              <p className="text-sm mb-1">
                Drag and drop your image here or <b>browse files</b>
              </p>
              <input type="file" className="hidden" />
            </div>
          </div>

          {/* Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <select className="border p-2 rounded w-full">
              <option>Select Type</option>
              <option>Live</option>
              <option>Recorded</option>
            </select>

            <select className="border p-2 rounded w-full">
              <option>Select Category</option>
            </select>

            <select className="border p-2 rounded w-full">
              <option>Select Instructor</option>
            </select>

            <input
              type="text"
              placeholder="Enter price"
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Syllabus */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Course Syllabus
            </label>

            <div className="border p-3 rounded space-y-2">
              <input
                type="text"
                placeholder="Module Title"
                className="border p-2 rounded w-full"
              />
              <textarea
                placeholder="Module description"
                className="border p-2 rounded w-full"
                rows="2"
              ></textarea>
            </div>

            <button type="button" className="text-sm text-teal-700 mt-2">
              + Add Module
            </button>
          </div>

          {/* Video Link */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Course Content - Video Link
            </label>
            <input
              type="text"
              placeholder="Enter video URL"
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Test Video Upload */}
          <div>
            <label className="text-sm font-medium mb-1 block">Test Video</label>
            <div className="border border-dashed p-5 rounded text-center">
              <p className="text-sm mb-1">
                Upload a test video <b>browse files</b>
              </p>
              <input type="file" className="hidden" />
            </div>
          </div>

          {/* FAQ */}
          <div>
            <label className="text-sm font-medium mb-1 block">FAQs</label>
            <div className="border p-3 rounded space-y-2">
              <input
                type="text"
                placeholder="Question"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Answer"
                className="border p-2 rounded w-full"
              />
            </div>

            <button type="button" className="text-sm text-teal-700 mt-2">
              + Add FAQ
            </button>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-sm">Active</label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-teal-700 text-white px-4 py-2 rounded"
            >
              Save Course
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

export default AddCoursesModal;
