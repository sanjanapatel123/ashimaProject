import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";

const ProfilePage = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen flex">
        <div className="flex-1 ">
          <main className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
              <button
                className="!rounded-button bg-custom text-white px-4 py-2 flex items-center space-x-2 hover:bg-custom/90"
                style={{ display: "none" }}
              >
                <i className="fas fa-plus"></i>
                <span>Create New Course</span>
              </button>
            </div>

            <div className="flex space-x-4 mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex flex-col items-center">
                      <img
                        src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a person with a friendly smile, wearing business casual attire, against a neutral background"
                        className="w-32 h-32 rounded-full mb-4"
                        alt="Profile Picture"
                      />
                      <h2 className="text-2xl font-bold">John Smith</h2>
                      <p className="text-gray-600 mb-4">
                        Senior Web Development Instructor
                      </p>
                      <button className="w-full bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow">
                    <div className="border-b">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">About Me</h3>
                        <p className="text-gray-600">
                          Passionate web development instructor with over 8
                          years of experience. Specialized in frontend
                          technologies and modern JavaScript frameworks.
                          Committed to helping students master programming
                          skills through practical, hands-on learning.
                        </p>
                      </div>
                    </div>
                    <div className="border-b">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">
                          Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                            JavaScript
                          </span>
                          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                            React
                          </span>
                          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                            Node.js
                          </span>
                          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                            HTML/CSS
                          </span>
                          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                            Vue.js
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 divide-x">
                      <div className="p-6 text-center">
                        <h4 className="text-2xl font-bold text-teal-700">12</h4>
                        <p className="text-gray-600">Courses</p>
                      </div>
                      <div className="p-6 text-center">
                        <h4 className="text-2xl font-bold text-teal-700">
                          2.4K
                        </h4>
                        <p className="text-gray-600">Students</p>
                      </div>
                      <div className="p-6 text-center">
                        <h4 className="text-2xl font-bold text-teal-700">
                          4.8
                        </h4>
                        <p className="text-gray-600">Avg. Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hidden Calendar Section (can be displayed if needed) */}
            <div
              className="bg-white rounded-lg shadow"
              style={{ display: "none" }}
            >
              <div className="p-6">
                <div className="grid grid-cols-7 gap-4 mb-4">
                  <div className="text-center text-gray-600">Sun</div>
                  <div className="text-center text-gray-600">Mon</div>
                  <div className="text-center text-gray-600">Tue</div>
                  <div className="text-center text-gray-600">Wed</div>
                  <div className="text-center text-gray-600">Thu</div>
                  <div className="text-center text-gray-600">Fri</div>
                  <div className="text-center text-gray-600">Sat</div>
                </div>
                <div className="grid grid-cols-7 gap-4">
                  <div className="h-32 border rounded-lg p-2">1</div>
                  <div className="h-32 border rounded-lg p-2">
                    2
                    <div className="bg-teal-700 text-white rounded p-1 text-sm mb-1">
                      Web Dev Basics
                      <br />
                      9:00 AM
                    </div>
                  </div>
                  <div className="h-32 border rounded-lg p-2">3</div>
                  <div className="h-32 border rounded-lg p-2">
                    4
                    <div className="bg-teal-700 text-white rounded p-1 text-sm mb-1">
                      Python Course
                      <br />
                      2:00 PM
                    </div>
                  </div>
                  <div className="h-32 border rounded-lg p-2">5</div>
                  <div className="h-32 border rounded-lg p-2">6</div>
                  <div className="h-32 border rounded-lg p-2">
                    7
                    <div className="bg-teal-700 text-white rounded p-1 text-sm mb-1">
                      UI/UX Workshop
                      <br />
                      10:00 AM
                    </div>
                  </div>
                  <div className="h-32 border rounded-lg p-2">8</div>
                  <div className="h-32 border rounded-lg p-2">9</div>
                  <div className="h-32 border rounded-lg p-2">
                    10
                    <div className="bg-teal-700 text-white rounded p-1 text-sm mb-1">
                      React Tutorial
                      <br />
                      3:00 PM
                    </div>
                  </div>
                  <div className="h-32 border rounded-lg p-2">11</div>
                  <div className="h-32 border rounded-lg p-2">12</div>
                  <div className="h-32 border rounded-lg p-2">13</div>
                  <div className="h-32 border rounded-lg p-2">14</div>
                  <div className="h-32 border rounded-lg p-2">
                    15
                    <div className="bg-teal-700 text-white rounded p-1 text-sm mb-1">
                      Database Course
                      <br />
                      1:00 PM
                    </div>
                  </div>
                  <div className="h-32 border rounded-lg p-2">16</div>
                  <div className="h-32 border rounded-lg p-2">17</div>
                  <div className="h-32 border rounded-lg p-2">18</div>
                  <div className="h-32 border rounded-lg p-2">19</div>
                  <div className="h-32 border rounded-lg p-2">20</div>
                  <div className="h-32 border rounded-lg p-2">21</div>
                  <div className="h-32 border rounded-lg p-2">22</div>
                  <div className="h-32 border rounded-lg p-2">23</div>
                  <div className="h-32 border rounded-lg p-2">24</div>
                  <div className="h-32 border rounded-lg p-2">25</div>
                  <div className="h-32 border rounded-lg p-2">26</div>
                  <div className="h-32 border rounded-lg p-2">27</div>
                  <div className="h-32 border rounded-lg p-2">28</div>
                  <div className="h-32 border rounded-lg p-2">29</div>
                  <div className="h-32 border rounded-lg p-2">30</div>
                  <div className="h-32 border rounded-lg p-2">31</div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
