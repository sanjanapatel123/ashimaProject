// import React, { useState } from "react";
// import { FaHeart, FaComment, FaShare, FaRegBookmark } from "react-icons/fa";

// const DiscusionTrending = () => {
//   const [activeTab, setActiveTab] = useState("Trending");

//   const tabs = ["Trending", "New", "Unanswered", "Most Liked"];
//   const tags = ["#javascript", "#react", "#nodejs", "#python", "#webdev"];

//   const posts = [
//     {
//       title: "Best practices for React Hooks?",
//       tag: "React",
//       tagColor: "blue",
//       author: "John Doe",
//       time: "2 hours ago",
//       content:
//         "I'm new to React Hooks and would love to know what are some best practices when using them...",
//       likes: 24,
//       comments: 12,
//     },
//     {
//       title: "Tips for debugging Node.js applications",
//       tag: "Node.js",
//       tagColor: "green",
//       author: "Jane Smith",
//       time: "5 hours ago",
//       content:
//         "What are your favorite tools and techniques for debugging Node.js applications?",
//       likes: 18,
//       comments: 8,
//     },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen py-6 px-4 md:px-8 w-full">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">

//         {/* Left Section */}
//         <div className="lg:col-span-2 space-y-6">

//           {/* Tabs */}
//           <div className="flex flex-wrap gap-4 mb-6">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`text-sm font-medium ${
//                   activeTab === tab
//                     ? "bg-gray-300 border border-gray-300 px-4 py-1 rounded text-gray-900"
//                     : "text-gray-500"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Posts */}
//           <div className="space-y-4">
//             {posts.map((post, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white p-5 rounded-md border border-gray-200 shadow-sm"
//               >
//                 <div className="flex justify-between mb-2 flex-wrap gap-2">
//                   <div>
//                     <h2 className="text-sm font-semibold text-gray-900">
//                       {post.title}{" "}
//                       <span
//                         className={ml-2 text-xs px-2 py-0.5 rounded bg-${post.tagColor}-100 text-${post.tagColor}-700}
//                       >
//                         {post.tag}
//                       </span>
//                     </h2>
//                     <p className="text-xs text-gray-500 mt-1">
//                       Posted by {post.author} <span className="mx-1">•</span> {post.time}
//                     </p>
//                   </div>
//                   <FaRegBookmark className="text-gray-400 w-4 h-4 cursor-pointer" />
//                 </div>

//                 <p className="text-sm text-gray-700 mb-4">{post.content}</p>

//                 <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
//                   <span className="flex items-center gap-1">
//                     <FaHeart /> {post.likes}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <FaComment /> {post.comments}
//                   </span>
//                   <span className="flex items-center gap-1 cursor-pointer">
//                     <FaShare /> Share
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <div className="space-y-6">

//           {/* Popular Groups */}
//           <div className="bg-white p-5 rounded-md border border-gray-200 shadow-sm">
//             <h3 className="font-semibold text-sm mb-4 text-gray-900">
//               Popular Groups
//             </h3>

//             {[
//               { name: "React Developers", members: "2.4k" },
//               { name: "Python Enthusiasts", members: "1.8k" },
//             ].map((group, idx) => (
//               <div
//                 key={idx}
//                 className="flex justify-between items-center mb-4 last:mb-0"
//               >
//                 <div>
//                   <p className="font-medium text-sm text-gray-800">
//                     {group.name}
//                   </p>
//                   <p className="text-xs text-gray-500">{group.members} members</p>
//                 </div>
//                 <button className="border border-gray-400 text-sm px-4 py-1 rounded hover:bg-gray-100">
//                   Join
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Trending Tags */}
//           <div className="bg-white p-5 rounded-md border border-gray-200 shadow-sm">
//             <h3 className="font-semibold text-sm mb-4 text-gray-900">
//               Trending Tags
//             </h3>

//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag, idx) => (
//                 <span
//                   key={idx}
//                   className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default DiscusionTrending;



import React, { useState } from "react";
import { FaHeart, FaComment, FaShare, FaRegBookmark } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";

const DiscusionTrending = () => {
  const [activeTab, setActiveTab] = useState("Trending");

  const tabs = ["Trending", "New", "Unanswered", "Most Liked"];
  const tags = ["#javascript", "#react", "#nodejs", "#python", "#webdev"];

  const posts = [
    {
      title: "Best practices for React Hooks?",
      tag: "React",
      tagColor: "blue",
      author: "John Doe",
      time: "2 hours ago",
      content:
        "I'm new to React Hooks and would love to know what are some best practices when using them...",
      likes: 24,
      comments: 12,
    },
    {
      title: "Tips for debugging Node.js applications",
      tag: "Node.js",
      tagColor: "green",
      author: "Jane Smith",
      time: "5 hours ago",
      content:
        "What are your favorite tools and techniques for debugging Node.js applications?",
      likes: 18,
      comments: 8,
    },
  ];

  return (
    <DashboardLayout>
      <div className="bg-gray-100 min-h-screen py-6 px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium ${
                    activeTab === tab
                      ? "bg-gray-300 border border-gray-300 px-4 py-1 rounded text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-md border border-gray-200 shadow-sm"
                >
                  <div className="flex justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <h2 className="text-sm font-semibold text-gray-900">
                        {post.title}{" "}
                        <span
                          className={`ml-2 text-xs px-2 py-0.5 rounded bg-${post.tagColor}-100 text-${post.tagColor}-700`}
                        >
                          {post.tag}
                        </span>
                      </h2>
                      <p className="text-xs text-gray-500 mt-1">
                        Posted by {post.author} <span className="mx-1">•</span>{" "}
                        {post.time}
                      </p>
                    </div>
                    <FaRegBookmark className="text-gray-400 w-4 h-4 cursor-pointer" />
                  </div>

                  <p className="text-sm text-gray-700 mb-4">{post.content}</p>

                  <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <FaHeart /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComment /> {post.comments}
                    </span>
                    <span className="flex items-center gap-1 cursor-pointer">
                      <FaShare /> Share
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Popular Groups */}
            <div className="bg-white p-5 rounded-md border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-sm mb-4 text-gray-900">
                Popular Groups
              </h3>

              {[
                { name: "React Developers", members: "2.4k" },
                { name: "Python Enthusiasts", members: "1.8k" },
              ].map((group, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center mb-4 last:mb-0"
                >
                  <div>
                    <p className="font-medium text-sm text-gray-800">
                      {group.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {group.members} members
                    </p>
                  </div>
                  <button className="border border-gray-400 text-sm px-4 py-1 rounded hover:bg-gray-100">
                    Join
                  </button>
                </div>
              ))}
            </div>

            {/* Trending Tags */}
            <div className="bg-white p-5 rounded-md border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-sm mb-4 text-gray-900">
                Trending Tags
              </h3>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DiscusionTrending;
