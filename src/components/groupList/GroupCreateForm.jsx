import React, { useState } from 'react'

const GroupCreateForm = () => {

    
    const [groupName, setGroupName] = useState(" ")
    const [groupNameError, setGroupNameError] = useState(" ")

    const [groupCreator, setGroupCreator] = useState(" ")
    const [groupCreatorError, setGroupCreatorError] = useState(" ")

    const [groupTagline, setGroupTagline] = useState(" ")
    const [groupTaglineError, setGroupTaglineError] = useState(" ")
 
    const handleCreateGroup = () => {
        console.log(groupName, 'error keno ase na');
        console.log(groupCreator, 'error');
        console.log(groupTagline, 'error');
       
        if (!groupName.trim()) {
            console.log('Group Name is Required');
            setGroupNameError('Group Name is Required')
        }
        if (!groupCreator.trim()) {
            console.log('creator name nai');
            setGroupCreatorError('Group creator name is Required')
        }
        if (!groupTagline.trim()) {
            console.log('tagline dete hobe');
            setGroupTaglineError('Group tagline is Required')
            
        }
        
        
        
    }
    
    const handleGoBack = () => {
        
    }

    return (
      <div>
          <div className='font-primary text-center'>
              <div>
                  <h3 className='md:w-[497px] font-bold font-second text-[25px] md:text-[34px] text-[#f2f3f6] '>Group Create Form</h3>
                  
              </div>
              <h4 className='text-[20px] p-5 font-bold text-[#61c2ef]'>Create your own Group and Enjoy it for Free</h4>
              <div>
                    <div>
                        
                        <input onChange={(e) => (setGroupName(e.target.value), setGroupNameError(''))}
                            className='w-full border-2 text-[#ffffff] py-[20px] pl-[52px] pr-[66px] rounded-[9px] ' type="text" placeholder='Group Name' />
                        

                        <p className='w-full bg-red-600 text-center rounded-full text-white px-3 mt-2 font-second font-semibold text-[15px]'>{groupNameError}</p>

                  </div>
                  <div className='py-8'>
                        <input onChange={(e) => (setGroupCreator(e.target.value), setGroupCreatorError(''))}
                            className='w-full border-2 text-[#ffffff] py-[20px] pl-[52px] pr-[66px] rounded-[9px] ' type="text" placeholder='Group Creator' />
                        <p className='w-full bg-red-600 text-center rounded-full text-white px-3 mt-2 font-second font-semibold text-[15px]'>{groupCreatorError}</p>

                  </div>
                  <div>
                        <input onChange={(e) => (setGroupTagline(e.target.value), setGroupTaglineError(''))}
                            className='w-full border-2 text-[#ffffff] py-[20px] pl-[52px] pr-[66px] rounded-[9px] ' type="text" placeholder='Group Tagline' />
                        <p className='w-full bg-red-600 text-center rounded-full text-white px-3 mt-2 font-second font-semibold text-[15px]'>{groupTaglineError}</p>

                  </div>
              </div>
              <div className='py-5'>
                    <button onClick={handleCreateGroup}
                        className=' w-full bg-primary hover:bg-green-800  rounded-xl text-white py-5 font-second font-semibold text-[20px] cursor-pointer'>Create Group</button>
                    <button onClick={handleGoBack}
                        className='bg-red-500 hover:bg-green-800 rounded-lg text-white py-2 px-4 cursor-pointer mt-10'>Go Back</button>
                            
              </div>
              
          </div>
          
    </div>
  )
}

export default GroupCreateForm