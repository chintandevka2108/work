import React, { useState } from 'react'
import Navbar from './Componet/Navbar'
import Header from './Componet/Header'
import Searchbar from './Componet/Searchbar'
import Jobcard from './Componet/Jobcard'
import JobDummyData from './JobDummyData'

function jobportal() {
 

  return (
   <div>
    <Navbar/>
    <Header/>
    <Searchbar/>
   {JobDummyData.map((job) => {
  return <Jobcard key={job.id} {...job} />
})}

   </div>
   
  )
}

export default jobportal