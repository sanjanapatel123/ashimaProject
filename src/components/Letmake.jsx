import React from "react";

const Letmake = () => {
  return (
    <div>
      <main className="bg-gray-50 font-inter">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Let's make learning better
          </h1>
          <p className="text-xl text-gray-600">
            Become a Pro with us through industry-relevant skills
          </p>
        </div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Row of Cards - Flex Layout to show exactly 5 Cards */}
          <div className="flex justify-between items-stretch gap-4">
            {[
              {
                title: "Industry-Relevant Skills",
                desc: "Stay ahead in your field by mastering high-demand skills through our online sessions",
                img: "https://i.ibb.co/FLZh9wLF/21d0a875-94d2-49b8-b3e6-15837e6ba289.jpg",
              },
              {
                title: "Hybrid Learning Platform",
                desc: "Work experience certificates for real projects and cohort learning.",
                img: "https://i.ibb.co/324nFB2/75d77568-48cb-4c5c-b884-7e874570965a.jpg",
              },
              {
                title: "Career Networking",
                desc: "Showcase your learning journey to prospective employers.",
                img: "https://i.ibb.co/p6Mgw6qG/bf19ef8b-fad6-471b-88cc-0b31cd9e935b.jpg",
              },
              {
                title: "Personalized Learning",
                desc: "Tailored learning paths to match your career goals.",
                img: "https://i.ibb.co/p6Mgw6qG/bf19ef8b-fad6-471b-88cc-0b31cd9e935b.jpg",
              },
              {
                title: "Certification Benefits",
                desc: "Earn recognized certificates to boost your resume.",
                img: "https://i.ibb.co/p6Mgw6qG/bf19ef8b-fad6-471b-88cc-0b31cd9e935b.jpg",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="w-[19%] h-[350px] bg-gray-800 rounded-lg overflow-hidden relative flex-shrink-0 group"
              >
                <div className="p-4 text-white relative z-10">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-100">{card.desc}</p>
                </div>
                <img
                  src={card.img}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={card.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-semibold text-whi mb-2">
                    Explore More
                  </h4>
                  <p className="text-sm text-gray-600">
                    Discover interactive cohort-based learning with hands-on
                    projects.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Letmake;

