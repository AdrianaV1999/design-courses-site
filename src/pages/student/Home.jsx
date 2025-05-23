import React from "react";
import Hero from "../../components/student/Hero";
import Tools from "../../components/student/Tools";
import CourseSection from "../../components/student/CourseSection";
import TestimonialsSection from "../../components/student/TestimonialsSection";
import CallToAction from "../../components/student/CallToAction";
import Footer from "../../components/student/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Tools />
      <CourseSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
