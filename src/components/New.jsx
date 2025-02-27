import React, { useState } from "react";

const New = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-100 p-4">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              {/* <img
                className="h-8 w-auto"
                src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                alt="Growth School"
              /> */}
              <div className="text-2xl font-bold text-gray-800 pr-4">
                AiSkills
              </div>
            </a>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <div className="relative inline-block text-left border-2">
                <button
                  type="button"
                  className="group inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                >
                  Courses
                  <i className="fas fa-chevron-down ml-2 h-4 w-4"></i>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                    >
                      <path
                        d="M1 7.11108L6 12L11 7.11108"
                        stroke="#002726"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M1 1L6 5.88889L11 1"
                        stroke="#002726"
                        stroke-opacity="0.5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Business
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Digital Products
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Newsletter
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button className="rounded-md inline-flex items-center px-4 py-2 text-sm font-medium border hover:text-white hover:bg-green-700">
              Instructor
            </button>
            <button className="rounded-md ml-4 inline-flex items-center px-4 py-2 text-sm font-medium border-2 hover:bg-green-700 hover:text-white">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16v2H4V5zm0 12h16v2H4v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 7h16v2H4V7zm0 8h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow md:hidden">
          <li className="hover:text-gray-900 cursor-pointer">Courses</li>
          <li className="hover:text-gray-900 cursor-pointer">Business</li>
          <li className="hover:text-gray-900 cursor-pointer">
            Digital Products
          </li>
          <li className="hover:text-gray-900 cursor-pointer">Newsletter</li>
          <li className="hover:text-gray-900 cursor-pointer">Instructor</li>
          <li className="hover:text-gray-900 cursor-pointer">Login</li>
        </ul>
      )}
    </nav>
  );
};

export default New;
