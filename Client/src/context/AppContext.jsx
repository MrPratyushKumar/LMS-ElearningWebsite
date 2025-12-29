import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()



export const AppContextProvider = (props)=>{

  const currency = import.meta.env.VITE_CURRENCY
  
  const navigate = useNavigate()
  

  const [allCourses , setAllCourses] = useState([]) //whenever we run the application we will have store the data from assets file into allCourses 

  const [isEducator , setIsEducator] = useState(true) // it means user is already educator

  // Fetch All Courses
  const fetchAllCourses = async ()=>{
    // in this we have to store the data from assets file
    setAllCourses(dummyCourses) 

  }

  // function to calculate average rating of course
   const calculateRating = (course)=>{
    if(course.courseRatings.length === 0){
      // it means there is no rating on the course
      return 0; 
    }
    // if not then calculate the average rating 
    let totalRating = 0
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating
    })
    return totalRating / course.courseRatings.length
   }

  useEffect(()=>{
    fetchAllCourses()
  },[])

  const value = {
    // whenever we pass any data through this value we can acess it any other component 
    currency , allCourses , navigate , calculateRating , isEducator , setIsEducator
}
return (
  <AppContext.Provider value={value}>
    {props.children}
  </AppContext.Provider>
)

}