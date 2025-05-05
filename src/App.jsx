import React from "react";
import { Route, Routes, useMatch, Navigate } from "react-router-dom";
import { SignedIn, useUser } from "@clerk/clerk-react"; // Clerk imports for authentication
import Home from "./pages/student/Home";
import CoursesList from "./pages/student/CoursesList";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";
import Loading from "./components/student/Loading";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourses from "./pages/educator/MyCourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import Navbar from "./components/student/Navbar";

const App = () => {
  const { isSignedIn } = useUser(); // Proveravamo da li je korisnik prijavljen
  const isEducatorRoute = useMatch("/educator/*");

  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}

      <Routes>
        {/* Public Routes (accessible by all users) */}
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/loading/:path" element={<Loading />} />

        {/* Protected Routes (accessible only by authenticated users) */}
        <Route
          path="/my-enrollments"
          element={isSignedIn ? <MyEnrollments /> : <Navigate to="/" />}
        />
        <Route
          path="/player/:courseId"
          element={isSignedIn ? <Player /> : <Navigate to="/" />}
        />

        {/* Educator Routes */}
        <Route
          path="/educator"
          element={isSignedIn ? <Educator /> : <Navigate to="/" />}
        >
          <Route
            path="/educator"
            element={isSignedIn ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            path="add-course"
            element={isSignedIn ? <AddCourse /> : <Navigate to="/" />}
          />
          <Route
            path="my-courses"
            element={isSignedIn ? <MyCourses /> : <Navigate to="/" />}
          />
          <Route
            path="student-enrolled"
            element={isSignedIn ? <StudentsEnrolled /> : <Navigate to="/" />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
