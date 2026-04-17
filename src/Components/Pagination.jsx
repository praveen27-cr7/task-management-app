import React from 'react'

const Pagination = ({currentPage , setCurrentPage, totalTasks, tasksPerPage}) => {

  const totalPages = Math.ceil(totalTasks/tasksPerPage) || 0
   console.log(totalPages, totalTasks, tasksPerPage);
   
  return (
    <div className='flex justify-center items-center gap-3 mt-6'>
        <button className='px-3 py-1 bg-gray-200 rounded'
        disabled={currentPage === 1 }
        onClick={() => setCurrentPage(currentPage -1)}>&lt; Prev</button>

        {[...Array(totalPages)].map((_, index) =>{
          const page = index + 1

          return (
            <button 
            key={page}
            onClick={() => {
              setCurrentPage(page)
            }
            }
            className={`px-3 py-1 rounded ${page === currentPage ? "bg-green-600 text-white" : 'bg-gray-200'} hover:bg-gray-300`} >
                {page}
            </button>
          )
        })}

        <button className='px-3 py-1 bg-gray-200 rounded'
        disabled={currentPage === totalPages }
        onClick={() => setCurrentPage(currentPage +1)}>Next &gt;</button>
    </div>
  )
}

export default Pagination