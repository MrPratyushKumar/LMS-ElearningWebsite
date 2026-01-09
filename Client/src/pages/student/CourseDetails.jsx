import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import Footer from "../../components/student/Footer";

function CourseDetails() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [isAllreadyEnrolled , setIsAlreadyEnrolled] = useState(false);


  const {
  allCourses,
  calculateRating,
  calculateChapterTime,
  calculateCourseDuration,
  calculateNoOfLectures,
  currency,
} = useContext(AppContext);


  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id == id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    if (allCourses?.length) fetchCourseData();
  }, [allCourses, id]);

  const toggleSection = (index) => {
    setOpenSection((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return courseData ? (
    <div className="relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[50vh] sm:h-[60vh] -z-10 bg-gradient-to-b from-cyan-100/70" />

      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-14 px-5 sm:px-10 md:px-36 pt-14 md:pt-20">
        {/* ================= LEFT COLUMN ================= */}
        <div className="w-full md:max-w-xl text-gray-500 space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-course-details-heading-large font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>

          <p
            className="text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: courseData?.courseDescription?.slice(0, 200),
            }}
          />

          {/* Ratings */}
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <p className="font-medium text-gray-700">
              {calculateRating(courseData)}
            </p>

            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>

            <p className="text-blue-600">
              ({courseData.courseRatings.length} ratings)
            </p>
            <p>{courseData.enrolledStudents.length} students</p>
          </div>

          <p className="text-sm">
            Course by{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Pratyush Pandey
            </span>
          </p>

          {/* ================= COURSE STRUCTURE ================= */}
          <div className="pt-4">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">
              Course Structure
            </h2>

            <div className="pt-5 space-y-3">
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="border bg-white rounded-lg shadow-sm"
                >
                  <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={assets.down_arrow_icon}
                        alt="arrow"
                        className={`transition-transform duration-300 ${
                          openSection[index] ? "rotate-180" : ""
                        }`}
                      />
                      <p className="font-medium text-sm sm:text-base text-gray-700">
                        {chapter.chapterTitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500">
                      {chapter.chapterContent.length} lectures •{" "}
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection[index] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="border-t px-4 py-2 text-sm">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="flex gap-2 py-1">
                          <img
                            src={assets.play_icon}
                            alt=""
                            className="w-4 h-4 mt-1"
                          />
                          <div className="flex justify-between w-full">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex gap-2 text-xs">
                              {lecture.isPreviewFree && (
                                <span className="text-blue-500 cursor-pointer">
                                  Preview
                                </span>
                              )}
                              <span>
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ["h", "m"] }
                                )}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= FULL DESCRIPTION ================= */}
          <div className="pt-14 pb-24 rich-text">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              Course Description
            </h3>

            <div
              className="space-y-4 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription,
              }}
            />
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div
          className="w-full md:w-[380px] mb-10 md:mb-0 md:ml-8 
                max-w-course-card shadow-custom-card rounded 
                bg-white z-10
                overflow-visible sm:overflow-hidden"
        >
          <img
            src={courseData.courseThumbnail}
            alt="course thumbnail"
            className="w-full aspect-video object-contain sm:object-cover"
          />

          <div className="px-6 py-6 space-y-4">
            <div className="flex items-center gap-2">
              <img
                className="w-4"
                src={assets.time_left_clock_icon}
                alt="time left clock"
              />
              <p className="text-red-500 text-sm">
                <span className="font-medium">5 days</span> left at this price!
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-4xl font-semibold text-gray-800">
                {currency}
                {(
                  courseData.coursePrice -
                  (courseData.coursePrice * courseData.discount) / 100
                ).toFixed(2)}
              </p>

              <p className="text-gray-500 line-through">
                {currency}
                {courseData.coursePrice}
              </p>

              <p className="text-green-600 font-medium">
                {courseData.discount}% off
              </p>
            </div>
            <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
              <div className="flex items-center gap-1">
                <img src={assets.star} alt="star icon" />
                <p>{calculateRating(courseData)}</p>
              </div>

              <div className="h-4 w-px bg-gray-500/40"></div>

              <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="time clock icon" />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>

              <div className="h-4 w-px bg-gray-500/40"></div>

              <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="time clock icon" />
                <p>{calculateNoOfLectures(courseData)} lessons</p>
              </div>

            </div>

            <button className="md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium">{isAllreadyEnrolled ? 'Already Enrolleed' : 'Enroll Now'}</button>

            <div className="pt-6">
              <p className="md:text-xl text-lg font-medium text-gray-800">What's in the course?</p>
              <ul className="ml-4 pt-2 text-sm md:text-default list-disc text-gray-500">
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-on project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li>Quizes to test your knowledge.</li>
                <li>Certificate of completion </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loading />
  );
}

export default CourseDetails;
