import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/educator/Navbar";
import Sidebar from "../../components/educator/Sidebar";
import Footer from "../../components/educator/Footer";
import { SignedIn } from "@clerk/clerk-react";

const Educator = () => {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar />
      <div className="flex">
        <SignedIn>
          <Sidebar />
        </SignedIn>
        <div className="flex-1">
          <SignedIn>
            <Outlet />
          </SignedIn>
        </div>
      </div>
      <SignedIn>
        <Footer />
      </SignedIn>
    </div>
  );
};

export default Educator;
