import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Registration from './components/pages/Registration';
import Login from './components/pages/Login';


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  

  return (
    <>
      
      <RouterProvider router={router} />,
      
    </>
  )
}

export default App
