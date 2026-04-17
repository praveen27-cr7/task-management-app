import React from 'react'
import Navbar from '../Components/Navbar'
import TaskForm from '../Components/TaskForm'

const CreateTask = () => {
  return (
    <div>
      <Navbar />
      <TaskForm mode = "create"/>
    </div>
  )
}

export default CreateTask