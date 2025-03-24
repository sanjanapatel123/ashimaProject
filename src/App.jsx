import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Courses from "./components/Courses";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/allcourses" element={<Courses></Courses>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </>
  );
};

export default App;
