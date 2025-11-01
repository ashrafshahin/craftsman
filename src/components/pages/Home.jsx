import { getAuth, onAuthStateChanged } from 'firebase/auth'

import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router'
import { FaArrowCircleLeft } from "react-icons/fa";




const Home = () => {
  const auth = getAuth()
  
  const data = useSelector(state => (state.userDetails.value))
  console.log(data);
  
  const [verify, setVerify] = useState(false)
  const [loading, setLoading] = useState(true)
  
  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true) 
    } else {
      
    }
    setLoading(false)
  })
  
  if (loading) {
    return null
  }


  return (
    <div>
      
      {verify ?
        <h1>Home</h1>
        :
        <div className='bg-primary w-full h-screen flex justify-center items-center text-white font-primary font-bold '>
          <div className='text-center'>
           
              <p className='text-4xl mb-10 '>Please verify your email</p>
              <button className=' bg-white rounded-lg text-primary py-4 font-semibold text-[16px] cursor-pointer'>
                <Link to="/login">
                  <div className='flex justify-center         items-center'>
                    <FaArrowCircleLeft className='ml-2' />
                    <span className='px-6'>Back to Login</span>
                  </div>
                </Link>
              </button>
            
          </div>
        </div>
        }

    </div>
  )
}

export default Home