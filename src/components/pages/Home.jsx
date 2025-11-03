import { getAuth, onAuthStateChanged } from 'firebase/auth'

import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router'

import { FaArrowCircleLeft } from "react-icons/fa";

import EmailVerifyPage from './EmailVerifyPage';







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
        <EmailVerifyPage />
        
        
        }

      
    </div>
  )
}

export default Home