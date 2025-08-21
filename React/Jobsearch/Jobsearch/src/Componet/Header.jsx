import React from 'react'

function Header() {
  return (
    <div className="mt-10 flex flex-col gap-4 items-center justify-center text-center px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        Your ideal job awaits, start the search
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-white bg-blue-500 px-4 py-2 rounded-md shadow-md">
        Get the latest job openings that best suit you!
      </p>
    </div>
  )
}

export default Header
