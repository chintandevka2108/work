import React from 'react'
import dayjs from 'dayjs'

function Jobcard(props) {
  const date1 = dayjs(Date.now())
  const diffInDays = date1.diff(props.posted, 'day')

  return (
    <div className="px-4 sm:px-10 lg:px-40 mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6 py-4 bg-white rounded-lg border border-gray-200 shadow-md hover:border-blue-500 hover:shadow-lg transition">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg md:text-xl font-semibold text-gray-900">
            {props.title} - {props.company}
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            {props.type} • {props.experience} • {props.location}
          </p>
          <div className="flex flex-wrap gap-2">
            {props.skills.map((skill) => (
              <p
                key={skill}
                className="text-gray-700 text-sm py-1 px-3 rounded-md border border-gray-300 bg-gray-100"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <p className="text-gray-500 text-sm md:text-base">
            Posted {diffInDays} days ago
          </p>
          <a href={props.job_link}>
            <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Jobcard
