import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TaskContext } from '../Context/TaskContext'

const TaskTable = ({ tasks }) => {
    
  const {handledelte} = useContext(TaskContext)
   
 
  console.log(tasks);
  
    
  return (
    <div className='p-10 mt-5 w-full max-w-6xl mx-auto '>
        <div className='mb-4'>
          <h1 className='text-2xl font-semibold text-gray-800'>All Tasks</h1>
        <p className='text-gray-500 text-sm mt-1'>Track and organize your work.</p>
        </div>
        <div className='w-full overflow-auto'>

         <table className='text-left w-full'>
              <thead>
                <tr className='bg-gray-100 border-b'>
                    <th className='p-3'>Title</th>
                    <th className='p-3'>Description</th>
                    <th className='p-3'>Status</th>
                    <th className='p-3'>Priority</th>
                    <th className='p-3'>Actions</th>
                </tr>
              </thead>

              <tbody>
              
                {tasks.map((task) => {
                  return(
                  <tr className='border-b hover:bg-gray-50' key={task.id}>
                    <td className='p-3 whitespace-nowrap'>{task.title}</td>
                    <td className='p-3 whitespace-nowrap'>{task.desc}</td>
                    <td className='p-3 whitespace-nowrap'>
                        <span className={`px-3 py-1 text-sm rounded-full ${task.status === "Pending" ? 'bg-red-200 text-red-900' : task.status === 'Completed' ? 'bg-green-200 text-green-900' : 'bg-yellow-200 text-yellow-900'} `}>
                           {task.status}
                        </span>
                    </td>
                    <td className='p-3'>
                        <span className={`px-3 py-1 text-sm rounded-full ${task.priority === "High" ? 'bg-red-200 text-red-900' : task.priority === 'Medium' ? 'bg-yellow-200 text-yellow-900' : 'bg-green-200 text-green-900'} `}>
                            {task.priority}
                            </span>
                    </td>
                    <td className='p-3 space-x-2 whitespace-nowrap'><Link to={`/edit/${task.id}`}><button className='bg-blue-500 px-3 py-1 text-white rounded-lg hover:bg-blue-600'>Edit</button></Link>
                    <button 
                    type='buttom'
                    onClick={() => handledelte(task.id)}
                    className='bg-red-500 px-3 py-1 text-white rounded-lg hover:bg-red-600'>Delete</button>
                    </td>

                    </tr>
                  )
                })}

                    
                
              </tbody>
        </table>
        
        </div>
    </div>
  )
}

export default TaskTable