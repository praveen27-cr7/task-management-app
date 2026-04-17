import React from 'react'
import TaskForm from '../Components/TaskForm'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { TaskContext } from '../Context/TaskContext'


const EditTask = () => {

  const { id } = useParams()
  const {tasks} = useContext(TaskContext)

  const taskToEdit = tasks.find((task) => task.id === id)

  if(!taskToEdit){
    return <p>Task Not Found</p>
  }

  return (
    <div>
      <Navbar />
      <TaskForm mode = "edit" initialData = {taskToEdit}/>
    </div>
  )
}

export default EditTask