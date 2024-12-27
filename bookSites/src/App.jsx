import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import Routers from "./routes/routes.jsx"
const router = createBrowserRouter(Routers)
import './App.css'

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
