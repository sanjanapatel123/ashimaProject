import DashboardLayout from "../../Layout/DashboardLayout";
import Instructordash1 from "../../assets/Instructordash1.png";
import Instructordash2 from "../../assets/Instructordash2.png";
import Instructordash3 from "../../assets/Instructordash3.png";
import Instructordash4 from "../../assets/Instructordash4.png";
import Instructordash5 from "../../assets/Instructordash5.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";


const InstructorDashboard = () => {
  const data = [
    { month: "Jan", revenue: 4500 },
    { month: "Feb", revenue: 5500 },
    { month: "Mar", revenue: 6700 },
    { month: "Apr", revenue: 6900 },
    { month: "May", revenue: 8100 },
    { month: "Jun", revenue: 8900 },
  ];


  return (
    <DashboardLayout>
      <div className="bg-[#F9FAFB] min-h-screen p-6">
        <h1 className="text-[22px] font-medium font-jost text-[#333946] mb-6">
          Instructor Dashboard
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
            <img
              src={Instructordash1}
              alt="Total Students"
              className="w-[49px] h-[52px] rounded-[8px]"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#9DA1AA] text-[15px] font-[Jost] font-normal ">
                Total Students
              </p>
              <h2 className="text-[22px] font-medium text-[#363C49]">1,234</h2>
            </div>
          </div>

          <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
            <img
              src={Instructordash2}
              alt="Total Students"
              className="w-[49px] h-[52px] rounded-[8px]"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#9DA1AA] text-[15px] font-[Jost] font-normal leading-[18px]">
                Active Courses
              </p>
              <h2 className="text-[22px] font-medium text-[#363C49] leading-[26px]">
                12
              </h2>
            </div>
          </div>

          <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
            <img
              src={Instructordash3}
              alt="Total Students"
              className="w-[49px] h-[52px] rounded-[8px]"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#9DA1AA] text-[15px] font-[Jost] font-normal leading-[18px]">
                Average Rating
              </p>
              <h2 className="text-[22px] font-medium text-[#363C49] leading-[26px]">
                4.8
              </h2>
            </div>
          </div>

          <div className="bg-[#FEFEFE] flex items-center gap-4 p-3 rounded-[22px] shadow border border-[#E5E7EB] w-full max-w-[260px]">
            <img
              src={Instructordash3}
              alt="Total Students"
              className="w-[49px] h-[52px] rounded-[8px]"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#9DA1AA] text-[15px] font-[Jost] font-normal leading-[18px]">
                Total Revenue
              </p>
              <h2 className="text-[22px] font-medium text-[#363C49] leading-[26px]">
                $8,945
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          {/* Live Classes */}
          <div className="bg-[#ffffff] p-4 rounded shadow w-[554px] h-[300px]">
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

          <div className="bg-[#ffffff] p-6 rounded shadow">
            <h3 className="text-[16px] font-jost font-normal mb-4">
              Revenue Overview
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6366F1"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#6366F1" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Course Reviews and Products */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="bg-[#ffffff] p-4 rounded shadow">
            <h3 className="text-[18px] font-normal text-[#525762] font-jost mb-4">
              Recent Course Reviews
            </h3>

            {/* Review 1 */}
            <div className="flex gap-3 mb-4 items-center">
              <img
                src={Instructordash5}
                alt="user"
                className="w-[48px] h-[48px] rounded-[20px] object-cover"
              />
              <div>
                <div className="flex gap-2 items-center">
                  <p className="text-[18px] font-normal text-[#464646] mb-0">
                    Sarah Johnson
                  </p>
                  <div className="flex items-center">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 text-2xl leading-none"
                        >
                          ★
                        </span>
                      ))}
                  </div>
                </div>
                <p className="text-sm text-[#6B7280] mt-1">
                  Great course content and delivery! Very helpful.
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex gap-3 items-center">
              <img
                src={Instructordash5}
                alt="user"
                className="w-[48px] h-[48px] rounded-[20px] object-cover"
              />
              <div>
                <div className="flex gap-2 items-center">
                  <p className="text-[18px] font-normal text-[#464646] mb-0">
                    Sarah Johnson
                  </p>
                  <div className="flex items-center">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 text-2xl leading-none"
                        >
                          ★
                        </span>
                      ))}
                  </div>
                </div>
                <p className="text-sm text-[#6B7280] mt-1">
                  Great course content and delivery! Very helpful.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="bg-[#ffffff] p-4 rounded shadow">
            <h3 className="text-[18px] font-normal text-[#525762] font-jost mb-4">
              Digital Products
            </h3>

            {/* Review 1 */}
            <div className="flex gap-3 mb-4 items-center">
              <img
                src={Instructordash5}
                alt="user"
                className="w-[48px] h-[48px] rounded-[20px] object-cover"
              />
              <div>
                <div className="flex gap-2 items-center">
                  <p className="text-[18px] font-normal text-[#464646] mb-0">
                    premium glow up akedemi metodu (% 50 Ozel indrim
                  </p>
                </div>
                <p className="text-sm text-[#6B7280] mt-1">e Book</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex gap-3 items-center">
              <img
                src={Instructordash5}
                alt="user"
                className="w-[48px] h-[48px] rounded-[20px] object-cover"
              />
              <div>
                <div className="flex gap-2 items-center">
                  <p className="text-[18px] font-normal text-[#464646] mb-0">
                    premium glow up akedemi metodu (% 50 Ozel indrim
                  </p>
                </div>
                <p className="text-sm text-[#6B7280] mt-1">e Book</p>
              </div>
            </div>
          </div>
        </div>
        {/* Community Discussions */}
        <div className="bg-[#ffffff] p-4 rounded shadow">
          <h3 className="text-[16px] font-normal text-[#5555A65] font-jost  mb-4">
            Community Discussions
          </h3>
          <div className="mb-3">
            <p className="font-normal text-[#4F4F4F] font-jost text-[25px]">
              Teaching Tips & Tricks
            </p>
            <p className="text-sm text-[#6B7280]">
              15 new posts - 3 unread messages
            </p>
          </div>
          <div>
            <p className="font-jost font-normal text-[15px] text-[#4E4E4E]">
              Course Creation Support
            </p>
            <p className="text-[13px] font-jost font-normal text-[#A3A7B0]">
              8 new posts - 1 unread message
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InstructorDashboard;
