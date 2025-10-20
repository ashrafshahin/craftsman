import React, { useState } from 'react'
import { DNA } from 'react-loader-spinner'

import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

import { Link } from 'react-router';



const ForgotPassword = () => {

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [show, setShow] = useState(false)

  const handleEmail = (e) => {
    console.log('email value check');
    setEmail(e.target.value)
    setEmailError('')

  }
  const handResetPassword = ()=> {
    console.log('ok cool');
    if (!email) {
      setEmailError('Please enter a valid email!')

    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError('Invalid Email Address')
      }
    }
  }

  return (
    <div>
      <div className='w-full h-screen bg-gray-600 flex justify-center items-center text-black font-primary  '>
        <div className='bg-white py-10 px-30 rounded-2xl shadow-2xl shadow-black'>
          
          <div>
            <div onClick={()=>{setShow(!show)}} className='flex justify-center text-6xl '>
              {
                show ? <FaUnlock /> : <FaLock />
              }
              
            </div>
            <h1 className='font-bold text-2xl text-center mt-10 mb-4'>Forgot Password</h1>
            <p>No Worries, we will send you a reset password instruction</p>
            <div className='relative w-full text-[#11175D] mt-10 '>
              <p className='absolute top-[-10px] left-[42px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold font-second text-[14px] '>Email Address</p>
              <input onChange={handleEmail} value={email} type="email" placeholder='Enter your Verified Email Address '
                className='w-full border-2 text-[#585D8E] font-second py-[20px] pl-[52px] pr-[66px] rounded-[9px] ' />
              <p className='w-full bg-red-600 text-center rounded-full text-white px-3 mt-2 font-second font-semibold text-[15px]'>{emailError} </p>

            </div>
            <div className='flex justify-between items-center mt-10'>
              <div className=''>
                <button onClick={handResetPassword}
                  className='w-full bg-primary rounded-lg text-white py-4 font-third font-semibold text-[16px] relative cursor-pointer'>
                  <div className='flex justify-center'>
                    <span className='px-10'>Reset Password</span>

                  </div>

                </button>
              </div>
              <div className=''>
                <button className='w-full bg-primary rounded-lg text-white py-4 font-third font-semibold text-[16px] relative cursor-pointer'>
                  <Link to="/login">
                    <div className='flex justify-center items-center px-2'>
                      <FaArrowCircleLeft className='ml-2' />
                      <span className='px-6'>Back to Login</span>
                    </div>
                  </Link>
                </button>
              </div>
            </div>

          </div>

        </div>


      </div>

    </div>
  )
}

export default ForgotPassword