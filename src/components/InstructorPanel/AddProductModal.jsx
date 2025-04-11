import React from 'react';

const AddProductModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-6">Add New Digital Product</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Product Title</label>
            <input type="text" placeholder="Enter product title" className="border px-3 py-2 w-full rounded mt-1" />
          </div>

          <div>
            <label className="text-sm">Category</label>
            <select className="border px-3 py-2 w-full rounded mt-1">
              <option>Select category</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm">Description</label>
            <textarea placeholder="Enter product description" className="border px-3 py-2 w-full rounded mt-1"></textarea>
          </div>

          <div>
            <label className="text-sm">Regular Price ($)</label>
            <input type="text" className="border px-3 py-2 w-full rounded mt-1" defaultValue="99.99" />
          </div>

          <div>
            <label className="text-sm">Sale Price ($)</label>
            <input type="text" className="border px-3 py-2 w-full rounded mt-1" defaultValue="79.99" />
          </div>

          <div>
            <label className="text-sm">Status</label>
            <select className="border px-3 py-2 w-full rounded mt-1">
              <option>Draft</option>
              <option>Published</option>
            </select>
          </div>
        </div>

        <div className="border border-dashed rounded mt-6 p-6 text-center">
          <p className="text-sm">Upload Product Images</p>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>

        <div className="border border-dashed rounded mt-4 p-6 text-center">
          <p className="text-sm">Upload Product Files</p>
          <p className="text-xs text-gray-500">ZIP, PDF, MP4 up to 2GB</p>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="border px-4 py-2 rounded">Cancel</button>
          <button className="bg-teal-700 text-white px-4 py-2 rounded">Create Product</button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
