import React from 'react'

import profile from "../images/logo.png"

import { SlHome } from "react-icons/sl";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";


import { useNavigate } from 'react-router';
import { getAuth, signOut } from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../slices/userSlice';



const Sidebar = () => {
    //Bring Data from Database - profile update part 
    const data = useSelector((shahin) => (shahin.userDetails.value))
    
    const auth = getAuth();
    
    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    const handleSignout = () => {
        signOut(auth).then(() => {
            
            // remove data from localhost
                localStorage.removeItem('userDetails')
                
            // remove data from redux, use any of these
                dispatch(userDetails(null))
            
            setTimeout(() => {
                navigate('/login')
            },1000)
        }).catch((error) => {
         
        });
        
    }
  return (
      <div>
          <div className='bg-primary w-[186px] text-white font-primary rounded-xl'>
              <div className='flex justify-center pt-6'>
                  <img src={profile} alt="Profile" className='h-25 w-25 rounded-full border-white/65 border-4 mt-10' />
              </div>
              <div className='flex justify-center pt-6'>
                  <div>
                      <h1 className='font-semibold '>{data?.displayName}</h1>
                      <h1 className='font-semibold text-xs '>{data?.email}</h1>
                  </div>
              </div>
              <div className=''>
                  <div className='flex justify-center mt-[78px] py-5 bg-white rounded-l-2xl ml-6 relative 
                  after:absolute after:top-0 after:left-0 after:content-[" "] after:w-[167px] after:h-full after:ml-5 

                  before:absolute before:top-0 before:right-0 before:content-[" "] before:w-[15px] before:h-full before:bg-primary before:rounded-l-lg before:shadow-2xs/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0,0.25)] '>
                      
                      <SlHome className='text-[#1E1E1E] text-5xl ' />

                  </div>
              </div>
              <div className=''>
                  <div className='flex justify-center mt-[57px] py-5   '>
                      
                      <LuMessageCircleMore className='text-[#C3C3C3] text-5xl shadow-2xs/90 shadow-[-2px_0px_4px_0px_rgba(0,0,0,0,0.25)] ' />

                  </div>
              </div>
              <div className=''>
                  <div className='flex justify-center mt-[69px] py-5   '>

                      <IoSettingsOutline className='text-white text-5xl shadow-2xs/90 shadow-[-2px_0px_4px_0px_rgba(0,0,0,0,0.25)] ' />

                  </div>
              </div>
              <div className=''>
                  <div className='flex justify-center mt-[334px] pb-[47px] py-5   '>

                      <ImExit className='text-white text-5xl  hover:text-red-600 hover:p-[1px] 
                      shadow-2xs/90 shadow-[-2px_0px_4px_0px_rgba(0,0,0,0,0.25)] cursor-pointer' onClick={handleSignout}
                      />
                      

                  </div>
              </div>
          </div>
      </div>
  )
}

export default Sidebar