import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

const Home = () => {
  return (
      <div>
      <h1 className='text-6xl text-center p-10 bg-gray-950 text-white'>Home Page</h1>
      <div className=' bg-gray-600 h-screen'>
        <div >
          <ul className='flex justify-center items-center p-8 text-white text-[20px] bg-emerald-950 '>
            <li className='mr-10'><Link to="/home">Home</Link></li>
            <li className='mr-10'><Link to="/registration">Registration</Link></li>
            <li className='mr-10'><Link to="/login">Log In</Link></li>
            <button className='mr-10 bg-black px-6 py-2'><Link to="/forgotpassword">Forgot Password</Link></button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home