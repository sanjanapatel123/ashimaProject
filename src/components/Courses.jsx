import React from "react";
import Header from "./Header";
import AllCourses from "./AllCourses";

const Courses = () => {
  return (
    <div className="lg:bg-black lg:px-[34px]">
      <Header></Header>
      <AllCourses></AllCourses>
    </div>
  );
};

export default Courses;
