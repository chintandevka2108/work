import React from 'react'

function Searchbar() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 my-10 justify-center px-6">
      <select className="w-full sm:w-48 md:w-56 lg:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md focus:ring-2 focus:ring-blue-500">
        <option hidden>Job Role</option>
        <option>iOS Developer</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Android Developer</option>
        <option>Developer Advocate</option>
      </select>

      <select className="w-full sm:w-48 md:w-56 lg:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md focus:ring-2 focus:ring-blue-500">
        <option hidden>Job Type</option>
        <option>Full Time</option>
        <option>Part Time</option>
        <option>Contract</option>
      </select>

      <select className="w-full sm:w-48 md:w-56 lg:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md focus:ring-2 focus:ring-blue-500">
        <option hidden>Location</option>
        <option>Remote</option>
        <option>In-Office</option>
        <option>Hybrid</option>
      </select>

      <select className="w-full sm:w-48 md:w-56 lg:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md focus:ring-2 focus:ring-blue-500">
        <option hidden>Experience</option>
        <option>Fresher</option>
        <option>Junior Level</option>
        <option>Mid Level</option>
        <option>Senior Developer</option>
      </select>

      <button className="w-full sm:w-48 md:w-56 lg:w-64 bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition">
        Search
      </button>
    </div>
  )
}

export default Searchbar
