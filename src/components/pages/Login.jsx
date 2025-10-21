import React, { useState } from 'react'
import login from "../images/login.png"

import { Route, Routes, Link, useNavigate } from 'react-router-dom';

import { FcGoogle } from "react-icons/fc";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

// authentication 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// google sign in
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { Slide, toast, ToastContainer, Zoom } from 'react-toastify';
import { DNA } from 'react-loader-spinner';


const Login = () => {
  // firebase channel
  const auth = getAuth()
  
  //navigate page
  const navigate = useNavigate()
  
  // google signin
  const provider = new GoogleAuthProvider()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  // login
  const [loading, setLoading] = useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')

  }

  const hanglePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  const handleLogIn = () => {
    console.log(email, password);
    if (!email) {
      setEmailError('Please enter a valid email!')
      
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError('Invalid Email Address')
      }
    }
    if (!password) {
      setPasswordError('Correct Password Required!')
    } else {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^€#£√<>=+$_%-;:^])[A-Za-z\d@$!%*-?_&^€#£√<>=+$%^;:]{6,20}$/.test(password)) {
        setPasswordError('password must have one lowercase, one uppercase, one digit, one special character and minimum length of 8 to 20 characters')
      }
    }
    if (email && password && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          const user = userInfo.user
          const notify = toast.success('Sign In successfully done!')
          setTimeout(() => {
            navigate("/forgotpassword")
          }, 3000)
          setLoading(false)
          setEmail('')
          setPassword('')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          const toastError = toast.error('Your Email or Password is Incorrect !')

          
      })
    }

  }
  
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        
        // ...
      }).catch((error) => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
        
        // ...
      });
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
      <div className='md:flex md:justify-between items-center'>
        <div className='md:w-1/2 flex justify-end mr-[70px]  '>
          <div>
            <div>
              <h3 className='md:w-[497px] font-bold font-third text-[25px] md:text-[34px] text-[#03014C] '>Login to your account!</h3>
            
            </div>
            <div className='relative w-[220px] text-[#03014C] mt-12 cursor-pointer'>
              <div>
                <button onClick={handleGoogleSignIn} className='w-full bg-transparent border-2 border-[#B3B3C9] rounded-lg py-5 font-third font-semibold text-[14px] cursor-pointer'>
                  <span><FcGoogle className='absolute top-[22px] left-[0px] w-1/3 h-1/3 cursor-pointer ' /></span> Login with Google</button>
                </div>
              
            </div>
            <div className='relative w-[368px] text-[#11175D] mt-12 '>
              <p className='absolute top-[-10px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold text-[14px] font-third '>Email Address</p>
              <input onChange={handleEmail}
                className='w-full border-b-2 text-[#585D8E] font-third py-[20px] pl-[12px] pr-[66px] rounded-[9px] outline-0 '
                type="email" value={email} placeholder='Enter Your Email Address' />
              <p className='w-full bg-red-600 text-center rounded-full text-white px-3 mt-2 font-second font-semibold text-[20px]'>{emailError}</p>
            </div>
            
            <div className='relative w-[368px] text-[#11175D] mt-10 '>
              <p className='absolute top-[-10px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold font-second text-[14px] '>Password</p>
              <input onChange={hanglePassword}
                className='w-full border-b-2 text-[#585D8E] font-second py-[20px] pl-[12px] pr-[66px] rounded-[9px] outline-0 '
                type={showPassword ? 'text' : 'password'}
                value={password} placeholder='Enter your password' />
            
              <div onClick={() => setShowPassword(!showPassword)} className='absolute top-6 right-6'>
                     {
                       showPassword ? <FaEye /> : <FaEyeSlash />

                     }
                             
                </div>
              <p className='w-full bg-red-600 text-center rounded-full text-white px-3 mt-2 font-second font-semibold text-[20px]'>{passwordError}</p>
            </div>
            <div className='w-[368px] text-[#11175D] mt-12'>
              <button onClick={handleLogIn}
                className='w-full bg-primary rounded-lg text-white py-5 font-third font-semibold text-[20px] relative cursor-pointer'>
                <div className='flex justify-center'>
                  {
                    loading ? <DNA
                      visible={true}
                      height="35"
                      width="35"
                      ariaLabel="dna-loading"
                      wrapperStyle={{}}
                      wrapperClass="dna-wrapper"
                    /> :
                      <span className=''>Login to Continue</span>
                  }
                </div>
                
              </button>
            </div>
            <div className='w-[368px] mt-6 cursor-pointer '>
              <p className='w-full pl-[52px] text-[#ff0000] font-bold font-third text-[13px] ml-12'>
                <Link to="/forgotpassword">Forgot Password </Link>
              </p>
            </div>
            <div className='w-[368px] mt-5 '>
              <p className='w-full pl-[52px] text-[#03014C] font-third text-[13px] '>Don’t have an account ? 
                <Link to="/registration">
                  <span className='text-[#EA6C00] font-bold'> Sign up</span>
                </Link>
              </p>
            </div>
          </div>

        </div>
        <div className='md:w-1/2'>
          <img className='w-100 md:w-full h-screen object-cover ml-10 md:ml-0 mt-5 md:mt-0' src={login} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login