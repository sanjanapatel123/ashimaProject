import { useState } from "react";

const Navbar = () => {
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Marketing");
  const [selectedDate, setSelectedDate] = useState("16th Mar 2025");

  const categories = [
    { id: "marketing", name: "Marketing", active: true },
    { id: "tech", name: "Tech" },
    { id: "growth", name: "Growth" },
    { id: "data", name: "Data" },
    { id: "design", name: "Design" },
    { id: "product", name: "Product" },
    { id: "business", name: "Business" },
    { id: "genai", name: "Gen AI" },
  ];

  const mentorshipPrograms = [
    {
      title: "SEO",
      mentor: "by Kaushal, Founder & MD, Infidigit",
      duration: "8 Weeks",
      startDate: "16th Mar 2025",
      type: "Live And Recorded",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDO5WXuCC8YAFDEhFWLbFSvNod-9vDSEs8-YDiReeFLVME68LvXCT8EoceUxeJITMH7ddC&s",
    },
    {
      title: "Digital Marketing",
      mentor: "Multiple mentors from Dunzo, Amazon and 1 more",
      duration: "6 Months",
      startDate: "16th Mar 2025",
      type: "Live",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDO5WXuCC8YAFDEhFWLbFSvNod-9vDSEs8-YDiReeFLVME68LvXCT8EoceUxeJITMH7ddC&s",
    },
    {
      title: "Performance Marketing",
      mentor: "Multiple mentors from Google and Amazon Mini",
      duration: "10 Weeks",
      startDate: "23rd Mar 2025",
      type: "Live",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDO5WXuCC8YAFDEhFWLbFSvNod-9vDSEs8-YDiReeFLVME68LvXCT8EoceUxeJITMH7ddC&s",
    },
  ];

  const selfPacedPrograms = [
    {
      title: "Art of Advertising",
      mentor:
        "by Sudeep Chawla Ex-Chief Marketing Manager - Pidilite, GrowthSchool",
    },
    {
      title: "SEO Ondemand",
      mentor: "by Kaushal Founder & MD, Infidigit",
    },
    {
      title: "Digital Marketing Kickstarter",
      mentor: "Multiple mentors from OTO, Google and 2 more",
    },
    {
      title: "Generative AI for Marketers",
      mentor: "Multiple mentors from AdWorld and Even",
    },
  ];
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="text-2xl font-bold text-gray-800 pr-4">AiSkills</div>

          <nav className="nav-section">
            <div className="nav-group">
              <div className="learn-dropdown">
                <button
                  className="learn-button"
                  onClick={() => setIsLearnOpen(!isLearnOpen)}
                >
                  Courses
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 4.5L6 8L9.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {isLearnOpen && (
                  <div className="learn-panel">
                    <div className="learn-container">
                      <div className="categories-sidebar">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            className={`category-item ${
                              activeCategory === category.name ? "active" : ""
                            }`}
                            onClick={() => setActiveCategory(category.name)}
                          >
                            {category.name}
                            <svg
                              className="arrow-right"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M6 12L10 8L6 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        ))}
                      </div>

                      <div className="programs-content">
                        <div className="mentorship-section">
                          <h2>Mentorship Programs</h2>
                          <p>Get personalized guidance from industry experts</p>

                          <div className="programs-grid">
                            {mentorshipPrograms.map((program, idx) => (
                              <div key={idx} className="program-card">
                                <img
                                  src={program.image}
                                  alt=""
                                  className="mentor-image"
                                />
                                <div className="program-details">
                                  <h3>{program.title}</h3>
                                  <p>{program.mentor}</p>
                                  <div className="meta-info">
                                    <span className="duration">
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <path
                                          d="M8 14A6 6 0 108 2a6 6 0 000 12z"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                        />
                                        <path
                                          d="M8 5v3l2 2"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                        />
                                      </svg>
                                      {program.duration}
                                    </span>
                                    <span className="date">
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <rect
                                          x="3"
                                          y="4"
                                          width="10"
                                          height="9"
                                          rx="1"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                        />
                                        <path
                                          d="M3 7h10M6 2v3M10 2v3"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                        />
                                      </svg>
                                      {program.startDate}
                                    </span>
                                    <span className="type-tag">
                                      {program.type}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="self-paced-section">
                          <h2>Self-Paced Programs</h2>
                          <p>
                            Programs to give you a perfect overview at your own
                            speed
                          </p>
                          <div className="programs-grid">
                            {selfPacedPrograms.map((program, idx) => (
                              <div key={idx} className="program-card simple">
                                <h3>{program.title}</h3>
                                <p>{program.mentor}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="nav-link">
                Business
              </a>
              <a href="#" className="nav-link">
                Digital Product
              </a>
              <a href="#" className="nav-link">
                NewsLetter
              </a>
            </div>
          </nav>

          <div className="action-buttons">
            <button className="dashboard-btn">Instructor</button>
            <button className="mentor-btn">Login</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
