import React, { useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQSection = () => {
  const [openMainIndex, setOpenMainIndex] = useState(null);
  const [delayedOpenMainIndex, setDelayedOpenMainIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const mainContentRefs = useRef([]);
  const subContentRefs = useRef([]);

  // Main Question Toggle (with Delay Open & Close)
  const toggleMainQuestion = (mainIndex) => {
    if (openMainIndex === mainIndex) {
      // Start closing with delay (same as opening, but reversed)
      setDelayedOpenMainIndex(null);
      setTimeout(() => setOpenMainIndex(null), 200); // Close with delay
      setOpenSubIndex(null);
    } else {
      setOpenMainIndex(mainIndex);
      setTimeout(() => setDelayedOpenMainIndex(mainIndex), 200); // Open with delay
    }
  };

  // Sub Question Toggle (No Delay)
  const toggleSubQuestion = (subIndex) => {
    setOpenSubIndex(openSubIndex === subIndex ? null : subIndex);
  };

  // Dynamic height calculation for main questions
  const getMainHeight = (index) => {
    if (mainContentRefs.current[index]) {
      return delayedOpenMainIndex === index
        ? `${mainContentRefs.current[index].scrollHeight}px`
        : "0px";
    }
    return "0px";
  };

  // Dynamic height calculation for sub questions
  const getSubHeight = (index) => {
    if (subContentRefs.current[index]) {
      return openSubIndex === index
        ? `${subContentRefs.current[index].scrollHeight}px`
        : "0px";
    }
    return "0px";
  };

  const faqs = [
    {
      mainQuestion: "What makes AiSkills different from other platforms?",
      subQuestions: [
        {
          question: "Is AiSkills content created by industry experts?",
          answer:
            "Yes, all courses are created by experienced industry professionals.",
        },
        {
          question: "Does AiSkills offer real-world projects?",
          answer:
            "Absolutely! Every course comes with practical, real-world projects.",
        },
        {
          question: "Is AiSkills suitable for beginners and professionals?",
          answer: "Yes, we have beginner to advanced level courses.",
        },
        {
          question: "Is AiSkills available worldwide?",
          answer: "Yes, students from all over the world can join and learn.",
        },
        {
          question: "Can I access content offline?",
          answer: "Some content can be downloaded for offline viewing.",
        },
      ],
    },
    {
      mainQuestion: "How does AiSkills' AI-powered learning work?",
      subQuestions: [
        {
          question: "How does AI personalize my learning?",
          answer:
            "AI tracks your progress and recommends courses based on your learning style.",
        },
        {
          question: "Can I override AI recommendations?",
          answer:
            "Yes, you can explore any course you like outside AI suggestions.",
        },
        {
          question: "Does AI adjust in real-time?",
          answer:
            "Yes, AI dynamically adjusts recommendations based on your performance.",
        },
        {
          question: "Is AI available in all courses?",
          answer: "AI learning paths are available in most courses.",
        },
        {
          question: "Can AI help me track my progress?",
          answer:
            "Yes, a personalized dashboard tracks your learning milestones.",
        },
      ],
    },
    {
      mainQuestion: "What types of courses does AiSkills offer?",
      subQuestions: [
        {
          question: "Do you offer technical and non-technical courses?",
          answer:
            "Yes, AiSkills covers tech, business, design, marketing, and more.",
        },
        {
          question: "Are live classes available?",
          answer:
            "Yes, AiSkills offers live classes along with self-paced content.",
        },
        {
          question: "Are there assessments after each course?",
          answer:
            "Yes, quizzes and assessments are included to evaluate your learning.",
        },
        {
          question: "Do you offer certificates?",
          answer:
            "Yes, AiSkills provides certificates upon successful completion.",
        },
        {
          question: "Are courses regularly updated?",
          answer:
            "Yes, we constantly update our courses based on industry trends.",
        },
      ],
    },
    {
      mainQuestion: "What kind of support does AiSkills provide to students?",
      subQuestions: [
        {
          question: "Is technical support available?",
          answer: "Yes, 24/7 technical support is provided to all learners.",
        },
        {
          question: "Do I get mentorship?",
          answer:
            "Yes, AiSkills provides dedicated mentors to guide your learning journey.",
        },
        {
          question: "Is there career counseling?",
          answer:
            "Yes, resume reviews and interview prep are part of our services.",
        },
        {
          question: "Are there peer learning groups?",
          answer:
            "Yes, you can join peer groups and collaborate with fellow learners.",
        },
        {
          question: "How do I track my progress?",
          answer:
            "Your personalized dashboard tracks your progress in real-time.",
        },
      ],
    },
    {
      mainQuestion: "How does AiSkills help me build my career?",
      subQuestions: [
        {
          question: "Do you provide job placement assistance?",
          answer:
            "Yes, AiSkills offers job placement support and connects you with hiring partners.",
        },
        {
          question: "Are there industry networking events?",
          answer:
            "Yes, regular networking events and webinars are hosted for students.",
        },
        {
          question: "Can I showcase my projects to employers?",
          answer:
            "Yes, you get a portfolio page to showcase projects directly to employers.",
        },
        {
          question: "Is there a certification verification system?",
          answer:
            "Yes, employers can verify your AiSkills certifications online.",
        },
        {
          question: "Are alumni benefits available?",
          answer:
            "Yes, AiSkills offers lifetime access to alumni communities and resources.",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#002726] text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, mainIndex) => (
            <div
              key={mainIndex}
              className="border-b border-gray-100 pb-4 transition-all duration-500"
            >
              {/* Main Question Button */}
              <button
                onClick={() => toggleMainQuestion(mainIndex)}
                className="w-full text-left py-5 text-2xl font-bold flex justify-between items-center"
              >
                {faq.mainQuestion}
                {openMainIndex === mainIndex ? (
                  <IoIosArrowUp size={24} />
                ) : (
                  <IoIosArrowDown size={24} />
                )}
              </button>

              {/* Main Expand Section (Delayed Open & Close) */}
              <div
                ref={(el) => (mainContentRefs.current[mainIndex] = el)}
                style={{
                  maxHeight: getMainHeight(mainIndex),
                  overflow: "hidden",
                  transition: "max-height 0.5s ease-in-out",
                }}
                className="pl-4"
              >
                <div className="space-y-3">
                  {faq.subQuestions.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="border-b border-gray-800 pb-3"
                    >
                      <button
                        onClick={() =>
                          toggleSubQuestion(`${mainIndex}-${subIndex}`)
                        }
                        className="w-full text-left py-3 text-lg font-semibold flex justify-between items-center"
                      >
                        {sub.question}
                        {openSubIndex === `${mainIndex}-${subIndex}` ? (
                          <IoIosArrowUp size={20} />
                        ) : (
                          <IoIosArrowDown size={20} />
                        )}
                      </button>

                      {/* Sub Answer (Direct Open/Close) */}
                      <div
                        ref={(el) =>
                          (subContentRefs.current[`${mainIndex}-${subIndex}`] =
                            el)
                        }
                        style={{
                          maxHeight: getSubHeight(`${mainIndex}-${subIndex}`),
                          overflow: "hidden",
                          transition: "max-height 0.5s ease-in-out",
                        }}
                        className="pl-3"
                      >
                        <p className="text-sm text-gray-300">{sub.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
