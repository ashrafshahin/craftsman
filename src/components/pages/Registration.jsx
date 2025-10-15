import React, { useState } from 'react'
import registration from "../images/registration.png"

const Registration = () => {

  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')

  const [emailError, setEmailError] = useState('')
  const [fullNameError, setFullNameError] = useState('')
  

  const handleEmail = (e) => {
    console.log('show email value');
    setEmail(e.target.value)
    setEmailError('')

  }
  const handleFullName = (e) => {
    console.log('show full name value');
    setFullName(e.target.value)
    setFullNameError('')
    
  }

  const handleSignUp = () => {
    console.log(email, fullName);
    if (!email) {
      console.log('show email error');
      setEmailError('bhai email de');  
    } if (!fullName) {
      console.log('show name error');
      setFullNameError('bhai full name de')
      
    }
    
  }

  return (
    <div>
          <div className='md:flex md:justify-between items-center'>
            <div className='md:w-1/2 flex justify-end mr-[70px]  '>
              <div>
                <div>
                  <h3 className='md:w-[497px] font-bold font-second text-[25px] md:text-[34px] text-[#11175D] '>Get started with easily register</h3>
                  <p className='text-[#808080] font-second text-[20px] mt-[13px] '>Free register and you can enjoy it</p>
                </div>
                <div className='relative w-[368px] text-[#11175D] mt-10 '>
                  <p className='absolute top-[-10px] left-[42px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold font-second text-[14px] '>Email Address</p>
              <input onChange={handleEmail} value={email}
                type="email" placeholder='Email Address' 
                className='w-full border-2 text-[#585D8E] font-second py-[20px] pl-[52px] pr-[66px] rounded-[9px] ' />
              <p className='w-full bg-red-600 text-center rounded-full text-white px-3 mt-2 font-second font-semibold text-[25px]'>{emailError}</p>
                </div>
                <div className='relative w-[368px] text-[#11175D] mt-10 '>
                  <p className='absolute top-[-10px] left-[42px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold font-second text-[14px] '>Full Name</p>
              <input onChange={handleFullName}
                type="text" placeholder='Full Name'
                className='w-full border-2 text-[#585D8E] font-second py-[20px] pl-[52px] pr-[66px] rounded-[9px] ' />
              <p className='w-full bg-red-600 text-center rounded-full text-white px-3 mt-2 font-second font-semibold text-[25px]'>{fullNameError}</p>
                </div>
                <div className='relative w-[368px] text-[#11175D] mt-10 '>
                  <p className='absolute top-[-10px] left-[42px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold font-second text-[14px] '>Password</p>
                  <input className='w-full border-2 text-[#585D8E] font-second py-[20px] pl-[52px] pr-[66px] rounded-[9px] '
                    type="text" placeholder='Password' />
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
                  <p className='w-full pl-[52px] text-[#03014C] text-third text-[13px] '>Already  have an account ? <span className='text-[#EA6C00] font-bold'>Sign In</span></p>
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