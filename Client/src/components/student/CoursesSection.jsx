import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

function CoursesSection() {
  const { allCourses } = useContext(AppContext)

  return (
    <section className="py-16 px-8 md:px-40 text-center">
      
      {/* Title */}
      <h2 className="section-heading">
        Learn from the best
      </h2>

      {/* Description */}
      <p className="section-subheading mt-3">
        Discover our top-rated courses across various categories. From coding and design to
        business and wellness, our courses are crafted to deliver results.
      </p>

      {/* Courses grid */}
      <div className="grid grid-auto-fit gap-6 my-10 md:my-16">
        {allCourses.slice(0, 4).map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      {/* CTA */}
      <Link
        to="/course-list"
        onClick={() => window.scrollTo(0, 0)}
        className="inline-block text-gray-600 border border-gray-400/40 px-10 py-3 rounded-md hover:bg-gray-50 transition"
      >
        Show all courses
      </Link>
    </section>
  )
}

export default CoursesSection
