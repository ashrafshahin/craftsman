import React from 'react'

import profile from "../images/logo.png"

import { SlHome } from "react-icons/sl";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { FaDollarSign } from "react-icons/fa";



import { Link, useNavigate } from 'react-router';
import { getAuth, signOut } from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../slices/userSlice';



const Sidebar = ({active}) => {
    //Bring Data from Database - profile update part 
    const data = useSelector((selector) => (selector.userDetails.value))
    
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
          <div className='bg-primary w-[200px] text-white font-primary rounded-xl'>
              <div className='flex justify-center pt-6'>
                  <img src={profile} alt="Profile" className='h-25 w-25 rounded-full border-white/65 border-4 mt-10' />
              </div>
              <div className='flex justify-center pt-6'>
                  <div>
                      <h1 className='flex justify-center mt-[57px] bg-gray-600 py-2 hover:bg-gray-700 text-xl rounded-xl  '>{data?.displayName}</h1>
                      <h1 className='flex justify-center mt-4 bg-gray-600 py-2 hover:bg-gray-700 text-[12px] rounded-sm  '>{data?.email}</h1>
                  </div>
              </div>
              <div className=''>
                  <div className='flex justify-center mt-[57px] bg-red-600 py-7 hover:bg-gray-700   '>
                      
                      <Link to="/portfolio">My Portfolio
                          <FaDollarSign className='text-[#bebaba] text-7xl hover:text-amber-400 shadow-2xs/90 shadow-[-2px_0px_4px_0px_rgba(0,0,0,0,0.25)] ' />
                      </Link>
                        
                  </div>
              </div>
              <div className=''>
                  <div className={`relative after:absolute after:top-0 after:left-0 after:content-[" "] after:w-[167px] after:h-full
                 ${ active == "home" ? "after:bg-white" : "after:bg-red-500"}  after:ml-5 after:z-[-1] z-1 after:rounded-lg

                  before:absolute before:top-0 before:right-0 before:content-[" "] before:w-[25px] before:h-full before:rounded-l-2xl before:bg-primary before:shadow-2xs/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0,0.25)] flex justify-center mt-[78px] py-6 my-4 cursor-pointer`}>
                      
                      {/* message work day 14... */}
                    
                      <Link to="/">
                          <SlHome className={`text-5xl ${active == "home" ? "text-primary" : "text-white"} `} />
                      </Link>
                      

                  </div>
              </div>
              <div className=''>
                  <div className={`relative after:absolute after:top-0 after:left-0 after:content-[" "] after:w-[167px] after:h-full
                 ${ active == "message" ? "after:bg-white" : "after:bg-red-500"}  after:ml-5 after:z-[-1] z-1 after:rounded-lg

                  before:absolute before:top-0 before:right-0 before:content-[" "] before:w-[25px] before:h-full before:rounded-l-2xl before:bg-primary before:shadow-2xs/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0,0.25)] flex justify-center mt-[78px] py-6 my-4 `}>
                      
                      <Link to="/message">
                          <LuMessageCircleMore
                              className={`text-5xl shadow-2xs/90 shadow-[-2px_0px_4px_0px_rgba(0,0,0,0,0.25)] ${active == "message" ? "text-primary" : "text-[#C3C3C3]"} `} />
                      </Link>
                      

                  </div>
              </div>
              <div className=''>
                  <div className={`relative after:absolute after:top-0 after:left-0 after:content-[" "] after:w-[167px] after:h-full
                 ${active == "settings" ? "after:bg-white" : "after:bg-red-500"}  after:ml-5 after:z-[-1] z-1 after:rounded-lg

                  before:absolute before:top-0 before:right-0 before:content-[" "] before:w-[25px] before:h-full before:rounded-l-2xl before:bg-primary before:shadow-2xs/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0,0.25)] flex justify-center mt-[78px] py-6 my-4 `}>

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