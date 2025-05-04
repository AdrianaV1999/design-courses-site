import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-12 md:px-36 px-6">
      <h2 className="text-xl md:text-4xl font-semibold text-purple-800">
        Master the Skills
      </h2>
      <p className="text-sm md:text-base text-gray-600 mt-3">
        Join our courses to learn industry-leading tools and build a
        professional portfolio.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-600 hover:text-purple-700 border border-gray-500/30 px-10 py-3 rounded-full hover:border-purple-600"
      >
        Show All Courses
      </Link>
    </div>
  );
};

export default CourseSection;
