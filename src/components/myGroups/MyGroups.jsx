import React, { useEffect, useState } from 'react'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";

import { useSelector } from 'react-redux';
import { getDatabase, onValue, push, ref, set } from 'firebase/database'


const MyGroups = () => {
    const db = getDatabase()

    //Get data from Redux
    const data = useSelector((selector) => (selector.userDetails.value))

    // Retriving/ Get data towards -> My Group section ... 
    const [myGroup, setMyGroup] = useState([])
    
        useEffect(() => {
            const myGroupRef = ref(db, "groupList/")
            onValue(myGroupRef, (snapshot) => {
                const arr = []
                snapshot.forEach((item) => {
                    if (item.val().groupAdmin === data.uid) {
                        arr.push(item?.val())
                    }
    
                });
                // sob data aikhane chole asche...
                setMyGroup(arr);
    
            });
    
        }, [])
    console.log(myGroup);
    
    return (
        <div>
            <div className='rounded-xl px-5 py-3 font-primary shadow shadow-black/40 '>
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='font-semibold text-lg mr-[200px]  '>My Groups</h2>
                    <HiDotsVertical className='font-semibold text-xl' />

                </div>
                <div className='h-[400px] overflow-y-scroll custom-scrollbar pr-1'>
                    {
                        myGroup.map((item) => (
                            <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                                <img className='pr-2 mb-3' src={friends} alt="" />
                                <div className='pr-12'>
                                    <p className=' text-sm'> {item.groupCreator},<span className='text-blue-800'>Admin</span></p>
                                    <p className='font-semibold text-sm'>{item.groupName}</p>
                                    <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>{item.groupTagline}</p>
                                </div>
                                <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Remove</button>
                            </div> 
                        ))
                    }
                    
                   
                </div>
            </div>
        </div>
    )
}

export default MyGroups