import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-700 text-white flex items-center md:px-8 px-2 py-4 h-16 justify-around shadow-lg broder-b broder-gray-700'>
        <h1 className='font-bold md:text-2xl text-lg tracking-wide'>Task Manager</h1>

        <div className='flex md:space-x-10 space-x-3 items-center font-semibold  '>
            <NavLink to={'/'} className= {({isActive}) => isActive ? null : 'text-gray-300 hover:text-white'}>Home</NavLink>

            <NavLink to={'/create'} className=  {({ isActive }) => isActive ? 'bg-green-500 md:px-4 md:py-2 px-2 py-1 rounded-lg' : 'bg-green-500 md:px-4 md:py-2 px-2 py-1 rounded-lg text-gray-100 hover:text-white'} ><button >
                Add Task
                </button></NavLink>
        </div>

    </div>
  )
}

export default Navbar