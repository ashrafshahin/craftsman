import React, { useState } from 'react'
import registration from "../images/registration.png"

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { Route, Routes, Link, useNavigate } from 'react-router-dom'

// Create a form that allows new users to register with your firebase app//
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// notification
import { Slide, toast, ToastContainer, Zoom } from 'react-toastify';




const Registration = () => {
  // firebase channel
  const auth = getAuth()
  //navigate page 
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState('')
  const [fullNameError, setFullNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  
  const [showPassword, setShowPassword] = useState(false)

  const handleEmail = (e) => {
    console.log('email value check');
    setEmail(e.target.value)
    setEmailError('')

  }
  const handleFullName = (e) => {
    console.log('name value check');
    setFullName(e.target.value)
    setFullNameError('')
    
  }
  const handlePassword = (e) => {
    console.log('password value check');
    setPassword(e.target.value)
    setPasswordError('')
  }

  const handleSignUp = () => {
    // console.log(email, fullName, password);
    if (!email) {
      console.log('show email error');
      setEmailError('Valid Email is Required');
      
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError('Invalid Email Address');
        
      }
    }
    
    if (!fullName) {
      console.log('show name error');
      setFullNameError('Your Full Name is Required')
      
    } else {
      if (!/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(fullName)) {
        setFullNameError('Write Name in Correct Format')
      }
    }
    
    if (!password) {
      console.log('password error');
      setPasswordError('A valid Password is Required!')
      
    } else {
      if (!/^(?=.*[a-z])/.test(password)) {
        setPasswordError('at least one lowercase letter required!')
      } else if (!/(?=.*[A-Z])/.test(password)) {
        setPasswordError('at least one uppercase letter required')
      } else if (!/(?=.*\d)/.test(password)) {
        setPasswordError('at least one digit (0-9) must present')
      } else if (!/(?=.*[@$!%*?&£√#=€#£√<>=+$_%-;:^])/.test(password)) {
        setPasswordError('at least one special character required')
      } else if (!/[A-Za-z\d@$!%*?&£√#=€#£√<>=+$_%-;:^]{6,20}$/.test(password)) {
        setPasswordError('password length must be 8 to 20 characters')
      }
    }
    console.log(email, fullName, password);
    
    // firebase database integration
    if (email && fullName && password && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          const user = userInfo.user;
          const notify = toast.success('Registration Successfully Done!')
          setTimeout(() => {
            navigate("/login")
          } ,3000)
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message
          // const toastError = toast.error(errorCode)
          const toastError = toast.error('Email already in use !')
          
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
        transition={Zoom}
        toastStyle={{
          fontSize: '13px',
          padding: '20px',
          minHeight: '60px'
        }}
      />
      
          <div className='md:flex md:justify-between items-center'>
            <div className='md:w-1/2 flex justify-end mr-[70px]  '>
              <div>
                <div>
                  <h3 className='md:w-[497px] font-bold font-second text-[25px] md:text-[34px] text-[#11175D] '>Get started with easily register</h3>
                  <p className='text-[#808080] font-second text-[20px] mt-[13px] '>Free register and you can enjoy it</p>
            </div>
            
                <div className='relative w-[368px] text-[#11175D] mt-10 '>
                  <p className='absolute top-[-10px] left-[42px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold font-second text-[14px] '>Email Address</p>
              <input onChange={handleEmail} value={email} type="email" placeholder='Email Address' 
                className='w-full border-2 text-[#585D8E] font-second py-[20px] pl-[52px] pr-[66px] rounded-[9px] ' />
              <p className='w-full bg-red-600 text-center rounded-full text-white px-3 mt-2 font-second font-semibold text-[15px]'>{emailError} </p>
            
                </div>
                <div className='relative w-[368px] text-[#11175D] mt-10 '>
                  <p className='absolute top-[-10px] left-[42px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold font-second text-[14px] '>Full Name</p>
              <input onChange={handleFullName}
                type="text" placeholder='Full Name'
                className='w-full border-2 text-[#585D8E] font-second py-[20px] pl-[52px] pr-[66px] rounded-[9px] ' />
              <p className='w-full bg-red-600 text-center rounded-full text-white px-3 mt-2 font-second font-semibold text-[15px]'>{fullNameError}</p>
                </div>
                <div className='relative w-[368px] text-[#11175D] mt-10 '>
                  <p className='absolute top-[-10px] left-[42px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold font-second text-[14px] '>Password</p>
              <input onChange={handlePassword}
                className='w-full border-2 text-[#585D8E] font-second py-[20px] pl-[52px] pr-[66px] rounded-[9px] '
                type={showPassword ? 'text' : 'password'}
                placeholder='Password' />
              
              <div className='absolute top-6 right-6'>
                {
                  showPassword ? <FaEye onClick={() => setShowPassword(!showPassword)} />
                    :
                    <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />

                }
               
              </div>

              <p className='w-full bg-red-600 text-center rounded-full text-white px-3 mt-2 font-second font-semibold text-[15px]'>{passwordError}</p>
                </div>
                <div className='w-[368px] text-[#11175D] mt-12'>
              <button
                onClick={handleSignUp}
                
                className='w-full bg-primary rounded-full text-white py-5 font-second font-semibold text-[20px] relative z-[999999] cursor-pointer'>
                    <span className=''>Sign up</span>
                    <span className='absolute top-1/2 left-1/2 bg-[#5B36F5]/25 w-[78px] h-[30px] blur-[10px] -translate-1/2 -z-[999999] '></span>
                  </button>
                </div>
                <div className='w-[368px] mt-8 '>
              <p className='w-full pl-[52px] text-[#03014C] text-third text-[13px] '>Already  have an account ?
                <Link to="/login">
                  <span className='text-[#EA6C00] font-bold'>Sign In</span>
                </Link>
              </p>
                </div>
              </div>
              
            </div>
            <div className='md:w-1/2'>
          <img className='w-100 md:w-full h-screen object-cover ml-10 md:ml-0' src={registration} alt="" />
            </div>
          </div>
        </div>
  )
}

export default Registration