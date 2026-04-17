import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CreateTask from './Pages/CreateTask'
import EditTask from './Pages/EditTask'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'


const App = () => {
   

  return (
 <BrowserRouter>
    <Routes>
     <Route path='/' element ={ <Home />} ></Route>
     <Route path='/create' element = { <CreateTask /> }></Route>
     <Route path='/edit/:id' element = { <EditTask /> }></Route>
    </Routes>
          <ToastContainer position='bottom-center' autoClose ={2000}/>

 </BrowserRouter>    

  )
}

export default App