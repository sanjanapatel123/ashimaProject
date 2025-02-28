import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Card = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-end items-center  mb-8">
        <div className="flex  items-center gap-4 ">
          {" "}
          <a href="#" className="text-custom hover:text-custom/80 font-medium">
            See All
          </a>
          <div className="flex gap-2">
            {" "}
            <button className="!rounded-button p-2 border border-gray-200 hover:border-custom text-gray-600 hover:text-custom">
              <IoIosArrowBack />
            </button>
            <button className="!rounded-button p-2 border border-gray-200 hover:border-custom text-gray-600 hover:text-custom">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-w-16 aspect-h-9 bg-gray-800">
            <img
              src="https://i.ibb.co/TDgHH6Ph/30348f85-f314-428c-a6f1-028d3f9109f0.jpg"
              alt="Art of Advertising"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Art of Advertising
            </h3>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <i className="far fa-clock mr-2" />
              <span>1.5+ Hours</span>
            </div>
            <div className="flex items-center">
              {" "}
              <img
                src="https://i.ibb.co/HDfGG15G/2fc5e5d9-fa21-457f-b2bb-802531fbe54f.jpg"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Sudeep Chawla
                </p>
                <p className="text-xs text-gray-500">
                  Ex-Chief Marketing Manager
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-w-16 aspect-h-9 bg-gray-800">
            {" "}
            <img
              src="https://i.ibb.co/TDgHH6Ph/30348f85-f314-428c-a6f1-028d3f9109f0.jpg"
              alt="SEO Ondemand"
              className="w-full h-full object-cover"
            />{" "}
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              SEO Ondemand
            </h3>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <i className="far fa-clock mr-2" />
              <span>10+ Hours</span>
            </div>
            <div className="flex items-center">
              {" "}
              <img
                src="https://i.ibb.co/hJ6nYkyG/2cd408e1-2e65-4667-b4c3-42f18fc9d77a.jpg"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Kaushal</p>
                <p className="text-xs text-gray-500">
                  Founder &amp; MD, Infidigit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-w-16 aspect-h-9 bg-gray-800">
            <img
              src="https://i.ibb.co/TDgHH6Ph/30348f85-f314-428c-a6f1-028d3f9109f0.jpg4"
              alt="Digital Marketing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Digital Marketing Kickstarter
            </h3>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <i className="far fa-clock mr-2" />
              <span>10+ Hours</span>
            </div>
            <div className="flex items-center">
              {" "}
              <img
                src="https://i.ibb.co/hJ6nYkyG/2cd408e1-2e65-4667-b4c3-42f18fc9d77a.jpg"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Kaushal</p>
                <p className="text-xs text-gray-500">
                  Founder &amp; MD, Infidigit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="aspect-w-16 aspect-h-9 bg-gray-800">
            <img
              src="https://i.ibb.co/TDgHH6Ph/30348f85-f314-428c-a6f1-028d3f9109f0.jpg"
              alt="Gen AI for Marketers"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Generative AI for Marketers
            </h3>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <i className="far fa-clock mr-2" />
              <span>10+ Hours</span>
            </div>
            <div className="flex items-center">
              {" "}
              <img
                src="https://i.ibb.co/hJ6nYkyG/2cd408e1-2e65-4667-b4c3-42f18fc9d77a.jpg"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Kaushal</p>
                <p className="text-xs text-gray-500">
                  Founder &amp; MD, Infidigit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
