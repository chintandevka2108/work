import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {Usersid} = useParams()
  return (
    <div className='bg-gray-600 text-white p-4 text-3xl'>Users: {Usersid}</div>
  )
}

export default Users