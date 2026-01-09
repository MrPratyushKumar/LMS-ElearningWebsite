import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'
const  CourseCard = ({course}) => {
  const {currency , calculateRating} = useContext(AppContext)
  return (
    <Link to={'/course/' + course._id} onClick={()=> scrollTo(0 ,0)}
    className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'>
      {/* Course thumbnail */}
      <img className='w-full' src={course.courseThumbnail}/>
      <div className='p-3 text-left'>
        {/* Course title */}
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        {/* Educator Name */}
        <p className='text-gray-500'>Pratyush Pandey</p>
        <div className='flex items-center space-x-2'>
          {/* Ratings */}
          <p>{calculateRating(course)}</p>
          <div className='flex'>
            {[...Array(5)].map((_,i)=>(<img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt='' className='w-3.5 h-3.5' />
            ))}
          </div>
          {/* Total no of ratings */}
          <p className='text-gray-500'>{course.courseRatings.length}</p>
        </div>
        {/*Course Price */}
        <p className='text-base font-semibold text-gray-800'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>

      </div>
      

      
      
      
      
    </Link>
  )
}

export default CourseCard
