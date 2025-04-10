import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddProductModal from "./AddProductModal";
import { useNavigate } from "react-router-dom";

const DigitalProducts = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Digital Products</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-teal-700 text-white px-4 py-2 rounded"
          >
            + Add New Product
          </button>
        </div>

        {showModal && <AddProductModal onClose={() => setShowModal(false)} />}

        <div className="flex flex-wrap gap-4 mb-4">
          <select className="border px-3 py-2 rounded">
            <option>All Categories</option>
          </select>

          <select className="border px-3 py-2 rounded">
            <option>Sort by</option>
          </select>

          <input
            type="text"
            placeholder="Search products..."
            className="border px-3 py-2 rounded w-72"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, i) => (
            <div key={i} className="border rounded p-4">
              <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
                400 x 250
              </div>

              <div className="flex justify-between mt-2">
                <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded">
                  {i === 1 ? "Draft" : "Published"}
                </span>
              </div>

              <h3 className="font-semibold mt-2">
                Complete Guide to Web Development
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive guide covering HTML, CSS, and JavaScript
                fundamentals...
              </p>

              <div className="mt-2 font-semibold">$29.99</div>

              <div className="flex gap-3 mt-3 text-gray-600 text-lg">
                <i className="ri-edit-line cursor-pointer"></i>
                <i
                  onClick={() => navigate("/product/1")}
                  className="ri-eye-line cursor-pointer"
                ></i>
                <i className="ri-delete-bin-line cursor-pointer"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-600">
            Showing 1-3 of 12 products
          </span>

          <div className="flex gap-2">
            <button className="border px-3 py-1 rounded">{"<"}</button>
            <button className="bg-black text-white px-3 py-1 rounded">1</button>
            <button className="border px-3 py-1 rounded">2</button>
            <button className="border px-3 py-1 rounded">3</button>
            <button className="border px-3 py-1 rounded">{">"}</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DigitalProducts;
