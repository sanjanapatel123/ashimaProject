import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white pt-[150px] pb-20 pl-12 text-[#000000]">
      <div className="max-w-[1364px] mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <p className="text-[25px] text-[#1E1E1E] font-roboto leading-[24px] font-semibold">
            AI SKILLS.
          </p>
          <h1 className="text-[32px] md:text-[40px] font-normal text-[#000000] leading-[45px] md:leading-[55px] font-impact tracking-[0.5%]">
            TO LIFT UP YOUR CAREER <br />
            MASTER THE FUTURE OF TECHNOLOGY
          </h1>
          <button className="mt-4 px-6 py-2 bg-teal-700 text-[#ffffff] font-bold text-[16px] rounded-xl shadow-md hover:bg-teal-600">
            Explore Courses
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2  md:mt-0 md:ml-12">
          <p
            style={{ fontWeight: "700" }}
            className="text-[16px] text-[#1E1E1E] font-roboto leading-[22px] tracking-[1%] mt-[27px] w-full md:w-[500px] text-left"
          >
            A complete platform to provide you options to learn from Live,
            Hybrid, and Video courses. No need to look at separate places to
            learn. Technology changes very fast, and it is very crucial to keep
            yourself updated with the latest innovations. Our courses are
            AI-focused across all tech domains and help you learn from top
            experts in the field. Get the Skills to take your career forward!
          </p>
          <div className="flex gap-4  flex-wrap">
            <Link to="/live">
              <button
                style={{ backgroundColor: "#09D0C6", fontWeight: "500" }}
                className="w-[95px] py-2 rounded-xl text-[#000000] font-Roboto Condensed shadow-md hover:opacity-90"
              >
                Live
              </button>
            </Link>
            <Link to="/hybrid">
              <button
                style={{ fontWeight: "500" }}
                className="w-[95px] py-2 rounded-xl text-[#ffffff] font-Roboto Condensed bg-[#1E1E1E] shadow-md hover:opacity-90"
              >
                Hybrid
              </button>
            </Link>
            <Link to="/video">
              <button
                style={{ fontWeight: "500" }}
                className="w-[95px] py-2 rounded-xl text-[#ffffff] font-Roboto Condensed bg-[#FF6B6B] shadow-md hover:opacity-90"
              >
                Video
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
