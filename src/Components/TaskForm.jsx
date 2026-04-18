import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { TaskContext } from '../Context/TaskContext.jsx'
import useForm from '../hooks/useForm.jsx'

const TaskForm = ({mode, initialData}) => {

 const { addTask , updateTask} = useContext(TaskContext)
   const navigate = useNavigate()


   

 const {formData, handleChange, setFormData} = useForm(initialData || {
   title : "",
   desc : "",
   status : "",
   priority : ""
 })

 const handleSubmit = (e) => {
    e.preventDefault()
    if(mode === 'create'){
      addTask(formData)
      setFormData({
        title : "",
        desc : "",
        status : "",
        priority : ""
      })
      navigate('/')
    }
    else{
      updateTask(formData)
            navigate('/')

    }
     console.log(formData);
     
 }

 const handleCancel = () => {
    setFormData("")
    navigate('/')
 }



  return (
    <div className=' flex justify-center items-center bg-gray-200 min-h-screen p-6 '>

      <form className=' bg-white p-6 rounded-lg space-y-4 w-full max-w-2xl shadow-lg'
      onSubmit={handleSubmit}>
              <h1 className='text-2xl font-semibold '>
                {mode === "create" ? "Create New Task" : "Edit Task"}
              </h1>

        <div>
        <label htmlFor="title" className='block mb-1 font-medium text-gray-700'>Title : </label>
        <input type="text" name="title" id="title"
        value={formData.title}
        onChange={handleChange}
        required
        className='w-full rounded-lg px-4 border py-2 focus:ring-2 focus:ring-green-400 focus:outline-none' />
        </div>

        <div>
        <label htmlFor="desc"
        className='block mb-1 font-medium text-gray-700'>Description : </label>
        <textarea name="desc" id="desc"
        value={formData.desc}
        onChange={handleChange}
        required
        className='w-full rounded-lg px-4 border py-2 focus:ring-2 focus:ring-green-400 focus:outline-none'></textarea>
        </div>

        <div>
        <label className='block mb-1 font-medium text-gray-700'>Status : </label>
        <div className='flex items-center flex-wrap gap-4 md:gap-8'>

          <div className='space-x-3'>
        <input type="radio" name="status" id="pending" value= "Pending"
        checked = {formData.status === "Pending"}
        onChange={handleChange} 
        required
        />
        <label htmlFor="pending">Pending</label> 
        </div>
        <div className='space-x-3'>
        <input type="radio" name="status" id="in-progress" value="In-Progress" 
        checked = {formData.status === "In-Progress"}
        onChange={handleChange}/>
        <label htmlFor="in-progress">In-Progess</label>
        </div>


        <div className='space-x-3'>
        <input type="radio" name="status" id="completed" value="Completed" 
        checked = {formData.status === "Completed"}
        onChange={handleChange}/>
        <label htmlFor="completed">Completed</label>
        </div>

         </div>
        </div>

        <div>
        <label htmlFor="priority"
        className='block mb-1 font-medium text-gray-700'>Priority : </label>
        <select name="priority" id="priority"
        value={formData.priority}
        onChange={handleChange}
        required
        className='w-full px-4 py-4 rounded-lg appearance-none focus:ring-2 focus:ring-green-400 focus:outline-none'>
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        </div>

        <div className='flex items-center gap-6 mt-6'>
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 focus:ring-2 focus:ring-green-400'>
        {mode === "create" ? "Save Task" : "Update Task"}
        </button>
        <button 
        type='button'
        className='bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-500'
        onClick={handleCancel}>Cancel</button>
        </div>

      </form>

    </div>
  )
}

export default TaskForm