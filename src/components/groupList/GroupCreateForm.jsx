
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { getDatabase, onValue, push, ref, set } from 'firebase/database'
import { useNavigate } from 'react-router'

const GroupCreateForm = () => {
    //navigate page 
    const navigate = useNavigate()

    const db = getDatabase()

    //Get data from Redux
    const data = useSelector((selector) => (selector.userDetails.value))

    const [groupName, setGroupName] = useState(" ")
    const [groupNameError, setGroupNameError] = useState(" ")

    const [groupCreator, setGroupCreator] = useState(" ")
    const [groupCreatorError, setGroupCreatorError] = useState(" ")

    const [groupTagline, setGroupTagline] = useState(" ")
    const [groupTaglineError, setGroupTaglineError] = useState(" ")

    const [loading, setLoading] = useState(false)

    const [show, setShow] = useState(false)

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

        // Writing/push data to database ChtDay-13
        if (groupName && groupCreator && groupTagline) {
            setLoading(true)
            set(push(ref(db, 'groupList')), {
                groupName: groupName,
                groupCreator: groupCreator,
                groupTagline: groupTagline,
                groupAdmin: data?.uid,
            });
            // setTimeout(() => {
            //     // navigate("/")
            // }, 3000)
            setLoading(false)
            // after group create fields will be empty bcoz of these codes ..
            setGroupName('')
            setGroupCreator('')
            setGroupTagline('')
            /// windows reload...
            setTimeout(() => {
                window.location.reload()
            }, 5000)
        }
      
    }

    const handleGoBack = () => {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }

    return (
        <div>
            <div className='md:w-full'>
                <div className=' font-primary text-center'>
                    <div>
                        <h3 className='w-100 md:w-[497px] font-bold font-second text-[20px] md:text-[34px] text-[#f2f3f6] '>Group Create Form</h3>

                    </div>
                    <h4 className='md:text-[20px] p-5 font-bold text-[#61c2ef]'>Create your own Group and Enjoy it for Free</h4>
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
        </div>
    )
}

export default GroupCreateForm