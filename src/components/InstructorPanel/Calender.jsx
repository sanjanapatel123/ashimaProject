import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";

const CalendarPage = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen flex">
        <div className="flex-1">
          <main className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
              <button
                className="!rounded-button bg-custom text-white px-4 py-2 flex items-center space-x-2 hover:bg-custom/90"
                style={{ display: "none" }}
              >
                <i className="fas fa-plus"></i>
                <span>Create New Course</span>
              </button>
            </div>

            <div className="flex space-x-4 mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800">
                    Month
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">
                    Week
                  </button>
                </div>
                <button className="px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-800 flex items-center space-x-2">
                  <i className="fas fa-plus"></i>
                  <span>Add Session</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
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

export default CalendarPage;
