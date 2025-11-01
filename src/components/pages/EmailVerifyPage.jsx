import React from 'react'

const EmailVerifyPage = () => {
  return (
      <div>
          <div>
              <div className='bg-primary w-full h-screen flex justify-center items-center text-white font-primary font-bold '>
                  <div className='text-center'>

                      <p className='text-4xl mb-10 '>Please verify your email</p>
                      <button className=' bg-white rounded-lg text-primary py-4 font-semibold text-[16px] cursor-pointer'>
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
    </div>
  )
}

export default EmailVerifyPage