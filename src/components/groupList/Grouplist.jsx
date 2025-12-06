import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { getDatabase, onValue, push, ref, set } from 'firebase/database'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";

import GroupCreateForm from './GroupCreateForm';




const GroupList = () => {
    const db = getDatabase()

    //Get data from Redux
    const data = useSelector((selector) => (selector.userDetails.value))

    const [show, setShow] = useState(false)

    const handleGroup = () => {
        setShow(!show)
    }

    // Retriving/ Get data towards -> Group List section ... no Repeat data Reading.
    const [groupList, setGroupList] = useState([])
    useEffect(() => {
        const groupListRef = ref(db, "groupList/")
        onValue(groupListRef, (snapshot) => {
            const arr = []
            snapshot.forEach((item) => {
                if (item.val().groupAdmin != data.uid) {
                    arr.push(item?.val())
                }

            });
            // sob data aikhane chole asche...
            setGroupList(arr);

        });

    }, [])
    console.log(groupList);

    return (
        <div>

            <div className=' rounded-xl md:px-5 md:py-3 font-primary shadow shadow-black/40 scrollbar-thin mb-10  '>
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
                            <div className='absolute top-0 left-40  bg-gray-800/90 rounded-2xl px-20 md:px-50 py-10 md:py-30  z-[1]'>
                                <GroupCreateForm />

                            </div>
                        </div>

                        :
                        <div>
                            {
                                groupList.map((item) => (
                                    <div className=' overflow-y-scroll custom-scrollbar pr-1 '>

                                        <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25   '>
                                            <img className='pr-2 mb-3' src={friends} alt="" />
                                            <div className='pr-12'>
                                                <p className=' text-sm'> {item.groupCreator},<span className='text-blue-800'>Admin</span></p>
                                                <p className='font-semibold text-sm'>{item.groupName}</p>
                                                <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>{item.groupTagline}</p>
                                            </div>
                                            <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Join</button>
                                        </div>


                                    </div>
                                ))
                            }
                        </div>


                }

            </div>
        </div>
    )
}

export default GroupList