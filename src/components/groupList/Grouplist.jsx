import React, { useState } from 'react'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";

import GroupCreateForm from './GroupCreateForm';




const GroupList = () => {
    
    const [show, setShow] = useState(false)
    
    const handleGroup = () => {
        setShow(!show)
    }

  return (
      <div>
          <div className=' rounded-xl px-5 py-3 font-primary shadow shadow-black/40 scrollbar-thin mb-10  '>
              <div className='flex justify-between items-center pb-3 '>
                  <h2 className='font-semibold text-lg  '>Groups List</h2>
                  {/* <HiDotsVertical className='font-semibold text-xl' /> */}
                  <div>
                      <div>
                         
                          {
                              show ? 
                                  <button onClick={handleGroup}
                                      className='bg-red-500 rounded-lg text-white py-2 px-4'>Go Back</button>
                                  :
                                  <button onClick={handleGroup}
                                      className='bg-green-600 rounded-lg text-white py-2 px-4'>Create Group</button>
                          }
                          
                      </div>
                  </div>
                  
              </div>
              {
                  show ?
                      <div className='relative'>
                          <div className='absolute top-0 left-40  bg-gray-800/90 rounded-2xl px-50 py-30  z-[1]'>
                              <GroupCreateForm />
                              
                          </div>
                      </div>
                      
                      : 
                      <div className='h-[400px] overflow-y-scroll custom-scrollbar pr-1 '>

                          <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25   '>
                              <img className='pr-2 mb-3' src={friends} alt="" />
                              <div className='pr-12'>
                                  <p className='font-semibold text-lg'>Shahin</p>
                                  <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                              </div>
                              <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Join</button>
                          </div>
                          <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                              <img className='pr-3 mb-4' src={friends} alt="" />
                              <div className='pr-12'>
                                  <p className='font-semibold text-lg'>Shahin</p>
                                  <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                              </div>
                              <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Join</button>
                          </div>

                      </div>
                      
                  }
              
          </div>
    </div>
  )
}

export default GroupList