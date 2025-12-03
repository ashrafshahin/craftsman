import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import ForgotPassword from './components/pages/ForgotPassword';

// integrate firebase with this project //
import firebaseConfig from './components/firebase/firebaseConfig';
import Message from './components/message/Message';
import Portfolio from './components/portfolio/Portfolio';



function App() {
  
  
  const routerShahin = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "/message",
      element: <Message />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
  ]);

  

  return (
    <>
      
      
      <RouterProvider router={routerShahin} />
      
    </>
  )
}

export default App
