
import './App.css';
import React from 'react'
import Jobs from './Components/Jobs/Jobs';
import JobsDetails from './Components/JobsDetails/JobsDetails';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

const App = () => {

const router = createBrowserRouter([

{path:"/", element: <Layout/> , children:[

{path:"/", element:<Navigate to="/jobs" />},
  {path:"/jobs" , element: <Jobs/>},
  {path:"jobs/:position" , element: <JobsDetails/>}

]}





])

  return (
    <>
 <RouterProvider router={router}/>

    </>
  )
}

export default App
