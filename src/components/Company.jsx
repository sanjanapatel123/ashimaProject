import React from "react";

const Company = () => {
  return (
    <>
      <div className="bg-black text-white py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {" "}
            <h1 className="text-4xl font-bold mb-8">
              Join over 100k+ learners to upskill hottest AI skills
            </h1>
            <div className="flex items-center justify-center gap-8 mb-8">
              {" "}
              <p className="text-lg">Over learners works at companies like</p>
              <div className="flex items-center gap-6">
                {" "}
                <img
                  src="https://ai-public.creatie.ai/gen_page/google-white.png"
                  alt="Google"
                  className="h-8"
                />
                <img
                  src="https://ai-public.creatie.ai/gen_page/meta-white.png"
                  alt="Meta"
                  className="h-8"
                />{" "}
                <img
                  src="https://ai-public.creatie.ai/gen_page/tesla-white.png"
                  alt="Tesla"
                  className="h-8"
                />
                <img
                  src="https://ai-public.creatie.ai/gen_page/coinbase-white.png"
                  alt="Coinbase"
                  className="h-8"
                />{" "}
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://ai-public.creatie.ai/gen_page/award.png"
                  alt="Award"
                  className="h-10"
                />{" "}
                <span className="font-medium">Best Platform</span>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
