import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {
  //use useNavigate() for navigate on other pages
  const navigate = useNavigate()

  // after that we use state vriable for storing input field data
  const [input , setInput ] = useState(data ? data : '')// initialize with if data is present then with data else with empty string 
  
  const onSearchHandler = (e)=>{
    e.preventDefault()//whenever we submit the form it prevent from loading
    navigate('/course-list/' + input) // in this one we have provide the path + input
  }

  return (
    <form
      onSubmit={onSearchHandler}
      className="max-w-xl w-full h-12 md:h-14 flex items-center bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition"
      role="search"
    >
      <img
        src={assets.search_icon}
        alt="Search"
        className="w-5 h-5 mx-3 opacity-60"
      />

      <input
        onChange={e=> setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses"
        aria-label="Search for courses"
        className="w-full h-full outline-none text-gray-600 placeholder-gray-400"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white rounded-md px-6 md:px-8 py-2 mr-2 hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
