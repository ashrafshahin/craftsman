import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { data, Link } from 'react-router'

import { useSelector } from 'react-redux'

const EmailVerifyPage = () => {
    
    const data = useSelector(state => (state.userDetails.value))
    console.log(data);
    
    return (
        <div>
           
                <div className='bg-primary w-full h-screen flex justify-center items-center text-white font-primary font-bold '>
                    <div className='text-center shadow-xl/30 shadow-white/40 py-10 px-30 rounded-2xl '>

                        <p className='text-4xl mb-10 '>Please verify your email</p>
                        <p className='mb-10'>This is your Registerred Email : <span className='text-yellow-600 text-2xl'>{data.email}</span></p>
                        <button className=' bg-white rounded-lg text-primary py-4 font-semibold text-[16px] cursor-pointer  hover:text-white hover:bg-gray-600'>
                            <Link to="/login">
                                <div className='flex justify-center         items-center'>
                                    <FaArrowCircleLeft className='ml-2' />
                                    <span className='px-6'>Back to Login</span>
                                </div>
                            </Link>
                        </button>

                    </div>
                </div>
            
        </div>
    )
}

export default EmailVerifyPage