import React from 'react'
import registration from "../images/registration.png"

const Registration = () => {
  return (
    <div>
          <div className='flex justify-between items-center'>
            <div className='w-1/2 flex justify-end mr-[70px]  '>
              <div>
                <div>
                  <h3 className='w-[497px] font-bold font-second text-[34px] text-[#11175D] '>Get started with easily register</h3>
                  <p className='text-[#808080] font-second text-[20px] mt-[13px] '>Free register and you can enjoy it</p>
                </div>
                <div className='relative w-[368px] text-[#11175D] mt-10 '>
                  <p className='absolute top-[-10px] left-[42px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold font-second text-[14px] '>Email Address</p>
                  <input className='w-full border-2 text-[#585D8E] font-second py-[20px] pl-[52px] pr-[66px] rounded-[9px] '
                    type="text" placeholder='Email Address' />
                </div>
                <div className='relative w-[368px] text-[#11175D] mt-10 '>
                  <p className='absolute top-[-10px] left-[42px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold font-second text-[14px] '>Full Name</p>
                  <input className='w-full border-2 text-[#585D8E] font-second py-[20px] pl-[52px] pr-[66px] rounded-[9px] '
                    type="text" placeholder='Full Name' />
                </div>
                <div className='relative w-[368px] text-[#11175D] mt-10 '>
                  <p className='absolute top-[-10px] left-[42px] bg-white px-3 tracking-[2px] text-[#585D8E] font-semibold font-second text-[14px] '>Password</p>
                  <input className='w-full border-2 text-[#585D8E] font-second py-[20px] pl-[52px] pr-[66px] rounded-[9px] '
                    type="text" placeholder='Password' />
                </div>
                <div className='w-[368px] text-[#11175D] mt-12'>
                  <button className='w-full bg-primary rounded-full text-white py-5 font-second font-semibold text-[20px] relative z-[999999]'>
                    <span className=''>Sign up</span>
                    <span className='absolute top-1/2 left-1/2 bg-[#5B36F5]/25 w-[78px] h-[30px] blur-[10px] -translate-1/2 -z-[999999] '></span>
                  </button>
                </div>
                <div className='w-[368px] mt-8 '>
                  <p className='w-full pl-[52px] text-[#03014C] text-third text-[13px] '>Already  have an account ? <span className='text-[#EA6C00] font-bold'>Sign In</span></p>
                </div>
              </div>
              
            </div>
            <div className='w-1/2'>
              <img className='w-full h-screen object-cover' src={registration} alt="" />
            </div>
          </div>
        </div>
  )
}

export default Registration