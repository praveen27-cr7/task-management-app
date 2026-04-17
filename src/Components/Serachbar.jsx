import React from 'react'

const Serachbar = ({ searchTerm , setSearchTerm }) => {
  return (
    <div className='w-full flex justify-center items-center mt-10 gap-3'>
        <input type="search"
        placeholder='Search Tasks...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
         className='w-[60%] border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500' />
    
    </div>
  )
}

export default Serachbar