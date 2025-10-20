import React, { useState } from 'react'
import { DNA } from 'react-loader-spinner'

import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

import { Route, Routes, Link, useNavigate } from 'react-router-dom';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import { Slide, toast, ToastContainer } from 'react-toastify';


const ForgotPassword = () => {
  const auth = getAuth()
  //navigate page 
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [show, setShow] = useState(false)

  const [loading, setLoading] = useState(false)

  const handleEmail = (e) => {
    console.log('email value check');
    setEmail(e.target.value)
    setEmailError('')

  }
  const handResetPassword = ()=> {
    console.log(email);
    if (!email) {
      setEmailError('Please enter a valid email!')

    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError('Invalid Email Address')
      }
    }
    if (email && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      
      sendPasswordResetEmail(auth, email)
      
        .then((userInfo) => {
          setLoading(true)
          const user = userInfo.user
          const notify = toast.success('Password reset email sent!')
              setTimeout(() => {
              navigate("/resetpassword")
              }, 3000)
          setLoading(false)
          setEmail('')
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // const toastError = toast.error('Your Email or Password is Incorrect !')
          // ..
        });
        }
  }

  return (
    <div>
      {/* notification design */}
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Slide}
              toastStyle={{
                fontSize: '13px',
                padding: '20px',
                minHeight: '60px'
              }}
            />
      
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