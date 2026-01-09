import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import CourseCard from "../../components/student/CourseCard";
import { assets } from "../../assets/assets";
import Footer from '../../components/student/Footer'
function CoursesList() {
  /* =======================
     Global State & Params
  ======================== */
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();

  /* =======================
     Local State
  ======================== */
  const [filteredCourses, setFilteredCourses] = useState([]);

  /* =======================
     Filter Logic
  ======================== */
  useEffect(() => {
    if (!allCourses?.length) return;

    const result = input
      ? allCourses.filter(course =>
          course.courseTitle
            .toLowerCase()
            .includes(input.toLowerCase())
        )
      : allCourses;

    setFilteredCourses(result);
  }, [allCourses, input]);

  /* =======================
     UI
  ======================== */
  return (
    <section className="relative w-full px-6 sm:px-10 md:px-24 lg:px-36 pt-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Title & Breadcrumb */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Course List
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            <span
              onClick={() => navigate("/")}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Home
            </span>
            <span className="mx-1">/</span>
            <span>Course List</span>
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar data={input} />
      </div>

      {/* Active Filter */}
      {input && (
        <div className="mt-6 flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg w-fit">
          <span className="text-sm text-gray-700">
            Filtered by: <strong>{input}</strong>
          </span>

          <img
            src={assets.cross_icon}
            alt="Clear filter"
            className="w-4 h-4 cursor-pointer"
            onClick={() => navigate("/course-list")}
          />
        </div>
      )}

      {/* Courses Grid */}
      <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No courses found.
          </p>
        )}
      </div>
      {/* add footer component to this page  */}
      <Footer/>
    </section>
  );
}

export default CoursesList;
