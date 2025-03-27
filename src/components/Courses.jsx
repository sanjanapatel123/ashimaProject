import React from "react";
import Header from "../components/Courses/Header"
import AllCourses from "./Courses/AllCourses";

const Courses = () => {
  return (
    <div className="lg:px-[34px]">
      <Header></Header>
      <AllCourses></AllCourses>
    </div>
  );
};

export default Courses;
