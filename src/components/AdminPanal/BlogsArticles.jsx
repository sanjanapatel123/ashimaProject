
import React from "react";
import { FaSearch, FaDownload, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import  { useState } from "react";
import AddArticleModal from "./AddArticle";



const Blogs_article = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const blogData = [
    {
      id: "#BL001",
      title: "The Future of Online Learning",
      subtitle: "Published by Admin",
      category: "Education",
      author: "John Anderson",
      published_date: "Jan 15, 2024",
      status: "Published",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Blogs / Articles</h2>
            <p className="text-xs text-gray-500">
              Manage and monitor all blog posts and articles
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-50 px-4 py-2 rounded-lg text-sm flex items-center gap-2 border">
              <FaDownload /> Export
            </button>
            {/* <button className="bg-[#047670] text-white px-4 py-2 rounded-lg text-sm">
              + Add New Article
            </button> */}
            <button
              className="bg-[#047670] text-white px-4 py-2 rounded-lg text-sm"
              onClick={() => setIsModalOpen(true)}
            >
              + Add New Article
            </button>

            <AddArticleModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 shadow mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="flex flex-1 gap-2 items-center w-full">
            <div className="relative w-full md:w-[360px]">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
            </div>

            <select className="border rounded-lg px-2 py-2 text-sm w-full md:w-auto">
              <option>All Categories</option>
            </select>

            <select className="border rounded-lg px-2 py-2 text-sm w-full md:w-auto">
              <option>All Status</option>
            </select>

            <input
              type="date"
              className="border rounded-lg px-2 py-2 text-sm w-full md:w-auto"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Blog ID",
                  "Title",
                  "Category",
                  "Author",
                  "Published Date",
                  "Status",
                  "Actions",
                ].map((head) => (
                  <th key={head} className="px-4 py-3">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {blogData.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                  </td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3">{item.author}</td>
                  <td className="px-4 py-3">{item.published_date}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-3 items-center">
                    <FaEye className="text-blue-600 cursor-pointer" />
                    <FaEdit className="text-gray-600 cursor-pointer" />
                    <FaTrash className="text-red-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="p-4 text-sm flex justify-between items-center">
            <span>Showing 1 to 10 of 50 entries</span>
            <div className="flex gap-2">
              <button className="border px-3 py-1 rounded text-sm">
                Previous
              </button>
              <button className="border px-3 py-1 rounded bg-[#047670] text-white text-sm">
                1
              </button>
              <button className="border px-3 py-1 rounded text-sm">2</button>
              <button className="border px-3 py-1 rounded text-sm">3</button>
              <button className="border px-3 py-1 rounded text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Blogs_article;
