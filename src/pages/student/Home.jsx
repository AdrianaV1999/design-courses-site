import React from "react";
import Hero from "../../components/student/Hero";
import Tools from "../../components/student/Tools";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Tools />
    </div>
  );
};

export default Home;
