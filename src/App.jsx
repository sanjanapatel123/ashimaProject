import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Company from "./components/Company";
import Trending from "./components/Trending";
import "./App.css";

function App() {
  return (
    <div className="font-sans bg-gray-100">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Hero Section */}
      <Hero></Hero>

      {/* Company Section */}
      <Company></Company>

      {/* Trending Courses */}
      <Trending></Trending>
    </div>
  );
}

export default App;
