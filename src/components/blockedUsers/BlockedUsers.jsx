import React, { useEffect, useState } from 'react'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";

// database setup
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';

//Get data from Redux
import { useSelector } from 'react-redux';

import { getAuth } from 'firebase/auth';


const BlockedUsers = () => {
    const auth = getAuth()
     // const user = auth.currentUser
        
     //Get data from Redux
    const data = useSelector((selector) => (selector.userDetails.value))
    
    const db = getDatabase()
    
    
    const [blockUser, setBlockUser] = useState([])
    
    useEffect(() => {
        const blockUserRef = ref(db, "blockUsers/")
        onValue(blockUserRef, (snapshot) => {
            const arr = []
            snapshot.forEach((item) => {
                if (data?.uid == item?.val()?.receiverID) {
                    arr.push({ ...item?.val(), removalId: item?.key });
                }
                console.log(item);
                

            });
            // sob data aikhane chole asche...
            setBlockUser(arr);

        });

    }, [])

    

    
    
    return (
        <div>
            <div className='rounded-xl px-5 py-3 font-primary shadow shadow-black/40 mb-10'>
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='font-semibold text-xl mr-[200px]  '>BlockedUsers</h2>
                    <HiDotsVertical className='font-semibold text-xl' />

                </div>
                <div className='h-[400px] overflow-y-scroll custom-scrollbar pr-1'>
                    {
                        blockUser.map((item) => (
                            <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                                <img className='pr-2 mb-3' src={friends} alt="" />
                                <div className='pr-12'>
                                    <p className='font-semibold text-lg'>
                                        {
                                        data.uid == item.receiverID ? item.senderName : item.receiverName
                                        }
                                    </p>
                                    <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>
                                        {
                                            data.uid == item.receiverID ? item.senderID : item.receiverID
                                        }
                                    </p>
                                </div>
                                <button
                                    
                                    className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Unblock</button>
                            </div> 
                        ))
                    }
                    

                    {/* <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                        <img className='pr-3 mb-4' src={friends} alt="" />
                        <div className='pr-12'>
                            <p className='font-semibold text-lg'>Ashraf Shahin</p>
                            <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                        </div>
                        <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Date</button>
                    </div>
                    <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                        <img className='pr-3 mb-4' src={friends} alt="" />
                        <div className='pr-12'>
                            <p className='font-semibold text-lg'>Ashraf Shahin</p>
                            <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                        </div>
                        <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Date</button>
                    </div>
                    <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                        <img className='pr-3 mb-4' src={friends} alt="" />
                        <div className='pr-12'>
                            <p className='font-semibold text-lg'>Ashraf Shahin</p>
                            <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                        </div>
                        <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Date</button>
                    </div>
                    <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                        <img className='pr-3 mb-4' src={friends} alt="" />
                        <div className='pr-12'>
                            <p className='font-semibold text-lg'>Ashraf Shahin</p>
                            <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                        </div>
                        <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Date</button>
                    </div>
                    <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                        <img className='pr-3 mb-4' src={friends} alt="" />
                        <div className='pr-12'>
                            <p className='font-semibold text-lg'>Ashraf Shahin</p>
                            <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                        </div>
                        <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Date</button>
                    </div>
                    <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                        <img className='pr-3 mb-4' src={friends} alt="" />
                        <div className='pr-12'>
                            <p className='font-semibold text-lg'>Ashraf Shahin</p>
                            <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                        </div>
                        <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Date</button>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default BlockedUsers