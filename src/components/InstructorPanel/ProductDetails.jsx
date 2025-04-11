import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";

const ProductDetails = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-6 max-w-5xl mx-auto">
        <button onClick={() => navigate(-1)} className="mb-4 bg-teal-700 p-2 text-sm rounded text-white">
          ← Back
        </button>

        <div className="bg-white p-6 rounded-lg">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="bg-gray-300 w-full lg:w-1/2 h-72 flex items-center justify-center text-2xl font-semibold">
              800 x 400
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-1">
                Complete Web Development Mastery
              </h2>
              <p className="text-gray-500 mb-3">
                Master modern web development from fundamentals to advanced
                concepts
              </p>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl font-bold text-green-700">$79.99</span>
                <span className="line-through text-gray-400">$99.99</span>
              </div>

              <div className="flex gap-4 mb-3">
                <button className="bg-teal-700 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
                <button className="bg-teal-700 text-white px-4 py-2 rounded">
                  Buy Now
                </button>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>🔒 Lifetime Access</span>
                <span>📄 300+ Page PDF</span>
                <span>🎥 50+ Video Lessons</span>
                <span>💻 Source Code Included</span>
              </div>
            </div>
          </div>

          <div className="border-t my-6" />

          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600 text-sm mb-2">
              A comprehensive guide to modern web development, covering HTML5,
              CSS3, JavaScript, React, and more.
            </p>
            <span className="text-sm text-teal-700 cursor-pointer">
              Read More
            </span>
          </div>

          <div className="border-t my-6" />

          <div>
            <h3 className="font-semibold mb-2">What's Included</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              <li>Complete eBook (PDF, EPUB, MOBI)</li>
              <li>50+ Video Tutorials</li>
              <li>Practice Projects & Source Code</li>
              <li>Certificate of Completion</li>
            </ul>
          </div>

          <div className="border-t my-6" />

          <div>
            <h3 className="font-semibold mb-2">Customer Reviews</h3>
            <p className="text-yellow-500 mb-1">
              ★★★★★ (4.8/5 from 120 reviews)
            </p>
            <p className="text-xs text-gray-500">
              30-Day Money-Back Guarantee.
            </p>
          </div>

          <div className="border-t my-6" />

          <div>
            <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
            <p className="text-sm mb-1">
              <b>How long do I have access to the course?</b>
            </p>
            <p className="text-gray-600 text-sm mb-3">
              Lifetime access after purchase.
            </p>

            <p className="text-sm mb-1">
              <b>Is the source code included?</b>
            </p>
            <p className="text-gray-600 text-sm">
              Yes, you'll receive all project source code and resources.
            </p>
          </div>

          <div className="border-t my-6" />

          {/* <div>
            <h3 className="font-semibold mb-3">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded p-3">
                  <div className="bg-gray-300 w-full h-32 flex items-center justify-center text-sm">
                    300 x 200
                  </div>
                  <p className="mt-2 text-sm">Advanced CSS Course</p>
                  <p className="font-semibold text-green-700">$59.99</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProductDetails;
