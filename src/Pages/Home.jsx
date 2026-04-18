import React, { useState, useContext } from 'react'
import Navbar from '../Components/Navbar'
import Serachbar from '../Components/Serachbar'
import TaskTable from '../Components/TaskTable'
import Pagination from '../Components/Pagination'
import { TaskContext } from '../Context/TaskContext'

const Home = () => {
     const {tasks} = useContext(TaskContext)
   const [searchTerm, setSearchTerm] = useState("")
   const filteredTasks = tasks.filter((task) => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
   )


   {/* Pagination */}

   const [currentPage , setCurrentPage] = useState(1)
   const tasksPerPage = 5

   const indexOfLastTask = currentPage * tasksPerPage
   const indexOfFirstTask = indexOfLastTask - tasksPerPage

   const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask)
    
  return (
    <div>
      <Navbar />
      <Serachbar searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
      <TaskTable tasks = {currentTasks}/>
      <Pagination 
      currentPage = {currentPage} setCurrentPage = {setCurrentPage} totalTasks = {filteredTasks.length} 
      tasksPerPage = {tasksPerPage}
      />
    </div>
  )
}

export default Home