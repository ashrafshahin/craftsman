import { getAuth, onAuthStateChanged } from 'firebase/auth'

import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router'

import { FaArrowCircleLeft } from "react-icons/fa";







const Home = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const data = useSelector(state => (state.userDetails.value))
  console.log(data);
  
  const [verify, setVerify] = useState(false)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (!data) {
      navigate("/login")
    }
  })

  // email verification part
  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true) 
    } else {
      
    }
    setLoading(false)
  })
  // email verified no more bounces to another page...
  if (loading) {
    return null
  }


  return (
    <div>
      
      {verify ?
        <div className='bg-primary w-full h-screen text-white'><h1>Home</h1></div>
        
        :
        
        <div>
          <div className='bg-primary w-full h-screen flex justify-center items-center text-white font-primary font-bold '>
            <div className='text-center shadow-xl/30 shadow-white/40 py-10 px-30 rounded-2xl '>

              <p className='text-4xl mb-10 '>Please verify your email</p>
              <p className='mb-10'>This is your Registerred Email : <span className='text-yellow-600 text-2xl'>{data.email}</span></p>
              <button className=' bg-white rounded-lg text-primary py-4 font-semibold text-[16px] cursor-pointer  hover:text-white hover:bg-gray-600'>
                <Link to="/login">
                  <div className='flex justify-center         items-center'>
                    <FaArrowCircleLeft className='ml-2' />
                    <span className='px-6'>Back to Login</span>
                  </div>
                </Link>
              </button>

            </div>
          </div>
        </div>
  
        
        }

    </div>
  )
}

export default Home