import React from 'react'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";


const Grouplist = () => {
  return (
      <div>
          <div className='rounded-xl px-5 py-3 font-primary shadow shadow-black/40 '>
              <div className='flex justify-between items-center'>
                  <h2 className='font-semibold text-xl mr-[200px]  '>Groups List</h2>
                  <HiDotsVertical className='font-semibold text-xl' />
                  
              </div>
              <div className='h-[400px] overflow-y-scroll'>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-2 mb-3' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Join</button>
                  </div>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Join</button>
                  </div>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Join</button>
                  </div>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Join</button>
                  </div>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Join</button>
                  </div>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Join</button>
                  </div>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Join</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Grouplist