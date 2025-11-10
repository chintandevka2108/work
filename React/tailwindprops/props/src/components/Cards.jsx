import React from 'react'

function Cards({channel,username,btnText}) {  
  console.log(channel,username,btnText);
  
  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://cdn.pixabay.com/photo/2016/03/27/21/37/tea-1284366_1440_2560.jpg"
          alt="Sarah Dayan"
          width="512"
          height="512"

        /> <br />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg text-blue-100 font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-blue-200 dark:text-sky-400">
           {channel}
            </div>
            <div className="text-blue-200dark:text-slate- 500">
             {username}
            </div>
            <button>{btnText}</button>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export default Cards
