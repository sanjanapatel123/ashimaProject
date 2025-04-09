import DashboardLayout from "../../Layout/DashboardLayout";
import Instructordash1 from "../../assets/Instructordash1.png";
import Instructordash2 from "../../assets/Instructordash2.png";
import Instructordash3 from "../../assets/Instructordash3.png";
import Instructordash4 from "../../assets/Instructordash4.png";
import Instructordash5 from "../../assets/Instructordash5.png";


const InstructorDashboard = () => {
  return (
    <DashboardLayout>
      <div className="bg-[#F9FAFB] min-h-screen p-6 font-sans">
        <h1 className="text-[22px] font-medium font-jost text-[#333946] mb-6">
          Instructor Dashboard
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
            <img
              src={Instructordash1}
              alt="Total Students"
              className="w-[49px] h-[52px]"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#9DA1AA] text-[13px] font-[Jost] font-normal leading-[18px]">
                Total Students
              </p>
              <h2 className="text-[22px] font-semibold text-[#363C49] leading-[26px]">
                1,234
              </h2>
            </div>
          </div>

          <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
            <img
              src={Instructordash2}
              alt="Total Students"
              className="w-[49px] h-[52px]"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#9DA1AA] text-[13px] font-[Jost] font-normal leading-[18px]">
                Active Courses
              </p>
              <h2 className="text-[22px] font-semibold text-[#363C49] leading-[26px]">
                12
              </h2>
            </div>
          </div>

          <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
            <img
              src={Instructordash3}
              alt="Total Students"
              className="w-[49px] h-[52px]"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#9DA1AA] text-[13px] font-[Jost] font-normal leading-[18px]">
                Average Rating
              </p>
              <h2 className="text-[22px] font-semibold text-[#363C49] leading-[26px]">
                4.8
              </h2>
            </div>
          </div>

          <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
            <img
              src={Instructordash3}
              alt="Total Students"
              className="w-[49px] h-[52px]"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#9DA1AA] text-[13px] font-[Jost] font-normal leading-[18px]">
                Total Revenue
              </p>
              <h2 className="text-[22px] font-semibold text-[#363C49] leading-[26px]">
                $8,945
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Live Classes */}
          <div className="bg-[#ffffff] p-4 rounded shadow">
            <h3 className="text-[17px] text-[#545964] font-jost font-normal mb-4">
              Upcoming Live Classes
            </h3>
            <div className="mb-3">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium font-jost text-[15px] text-[#4C4C4C]">
                    Advanced JavaScript Concepts
                  </p>
                  <p className="text-[13px] text-[#A0A4AD] font-jost font-normal">
                    Today at 2:00 PM
                  </p>
                </div>
                <button className="mt-2 w-[114px] h-[48px] bg-[#047670] text-[#ffffff] px-2">
                  Join Class
                </button>
              </div>

              <div className="flex justify-between mt-5">
                <div>
                  <p className="font-medium text-[#4C4C4C] font-jost text-[15px]">
                    UI Design Workshop
                  </p>
                  <p className="text-[13px] text-[#A0A4AD] font-jost font-normal">
                    Tomorrow at 10:00 AM
                  </p>
                </div>
                <button className="mt-2 w-[114px] h-[48px] bg-[#047670] text-[#ffffff] px-2">
                  Join Class
                </button>
              </div>
            </div>
          </div>

          {/* Revenue Graph Placeholder */}
          <div className="bg-[#ffffff] p-4 rounded shadow">
            <h3 className="text-[16px] font-normal font-jost mb-4">
              Revenue Overview
            </h3>
            <div className="h-48 bg-gradient-to-t from-[#E0E7FF] to-white rounded flex items-end justify-center">
              <p className="text-sm text-[#6B7280]">[Chart Placeholder]</p>
            </div>
          </div>
        </div>

        {/* Course Reviews and Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Course Reviews */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-[16px] font-normal font-jost mb-4">
              Recent Course Reviews
            </h3>

            {/* Review 1 */}
            <div className="flex gap-3 mb-4 items-start">
              <img
                src={Instructordash5}
                alt="user"
                className="w-[40px] h-[40px] rounded-[20px] object-cover"
              />
              <div>
                <p className="text-[18px] font-normal  text-[#464646] mb-1">
                  Sarah Johnson
                </p>
                <div className="flex items-center mb-1">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-sm w-[17px] h-[16px]"
                      >
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-sm text-[#6B7280]">
                  Great course content and delivery! Very helpful.
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex gap-3 items-start">
              <img
                src={Instructordash5}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-[18px] font-normal  text-[#464646] mb-1">
                  Sarah Johnson
                </p>
                <div className="flex items-center mb-1">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-sm w-[17px] h-[16px]"
                      >
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-sm text-[#6B7280]">
                  Great course content and delivery! Very helpful.
                </p>
              </div>
            </div>
          </div>
          {/* Digital Products */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Course Reviews */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-[16px] font-normal font-jost mb-4">
              Recent Course Reviews
            </h3>

            {/* Review 1 */}
            <div className="flex gap-3 mb-4 items-start">
              <img
                src={Instructordash5}
                alt="user"
                className="w-[40px] h-[40px] rounded-[20px] object-cover"
              />
              <div>
                <p className="text-[18px] font-normal  text-[#464646] mb-1">
                  Sarah Johnson
                </p>
                <div className="flex items-center mb-1">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-sm w-[17px] h-[16px]"
                      >
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-sm text-[#6B7280]">
                  Great course content and delivery! Very helpful.
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex gap-3 items-start">
              <img
                src={Instructordash5}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-[18px] font-normal  text-[#464646] mb-1">
                  Sarah Johnson
                </p>
                <div className="flex items-center mb-1">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-sm w-[17px] h-[16px]"
                      >
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-sm text-[#6B7280]">
                  Great course content and delivery! Very helpful.
                </p>
              </div>
            </div>
          </div>
          {/* Digital Products */}
        </div>

        {/* Community Discussions */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Community Discussions</h3>
          <div className="mb-3">
            <p className="font-medium">Teaching Tips & Tricks</p>
            <p className="text-sm text-[#6B7280]">
              15 new posts - 3 unread messages
            </p>
          </div>
          <div>
            <p className="font-medium">Course Creation Support</p>
            <p className="text-sm text-[#6B7280]">
              8 new posts - 1 unread message
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InstructorDashboard;
