import React, { useEffect, useState } from 'react'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";

import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';

import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { activeInfo } from '../slices/activeSlice';


const ChatFriends = () => {
    const auth = getAuth()
    
    // redux data pathano dec-07
    const dispatch = useDispatch()

    // database set kora ase
    const db = getDatabase()
    const data = useSelector((selector) => (selector.userDetails.value))

    // friendRequest click - 'Accept' korle Data Show on Friends...
    const [friendList, setFriendList] = useState([])
    useEffect(() => {
        const friendRef = ref(db, "friend/")
        onValue(friendRef, (snapshot) => {
            const arr = []
            snapshot.forEach((item) => {
                // data.uid mane je login ase hoi receiverID hobe or senderID hobe...
                if (data?.uid == item?.val().receiverID || data?.uid == item?.val().senderID) {
                    arr.push({ ...item?.val(), removalId: item.key })
                }


            });
            // sob data aikhane chole asche...
            setFriendList(arr);
        })

    }, [])
    console.log(friendList, "friend request Accept information");

    // message dynamic work Dec-07...
    const handleMessage = (item) => {
        console.log(item, "item value ase ki ?");
        //redux data pass korlam dec-07
        // dispatch(activeInfo(item)) condition dete hobe

        if (data.uid == item.senderID) {
            dispatch(activeInfo({
                name: item.receiverName,
                ID: item.receiverID
                // recipientName: item.receiverName,
                // recipientID: item.receiverID
                
            }))
        } else {
            dispatch(activeInfo({
                name: item.senderName,
                ID: item.senderID
                // texterName: item.senderName,
                // texterID: item.senderID
                
            }))
        }
        
    }

    return (
        <div>
            <div className='rounded-xl px-5 py-5 font-primary shadow shadow-black/40 mb-10 bg-primary/10'>
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='font-semibold text-lg mr-[200px] text-primary mb-3  '>Chatting Friends Available</h2>
                    <HiDotsVertical className='font-semibold text-xl' />

                </div>
                <div className='h-[600px] overflow-y-scroll custom-scrollbar pr-1 shadow-black shadow-lg rounded-xl'>
                    {
                        friendList.map((item) => (
                            <div className='flex justify-between items-center mt-6 border-b-2 border-b-black/25 m-4 bg-white/80 rounded-sm p-2  '>
                                <img className='pr-2 mb-3' src={friends} alt="" />
                                <div className='pr-12'>
                                    <p className='font-semibold text-lg'>
                                        {/* data.uid mane je login ase, o receiver or sender hole akta hobe */}
                                        {
                                            data.uid == item.receiverID ? item.senderName : item.receiverName
                                        }
                                    </p>
                                    <p className='font-medium text-[11px] text-[rgba(77,77,77,0.75)] '>
                                        {
                                            data.uid == item.receiverID ? item.senderID : item.receiverID
                                        }
                                    </p>
                                </div>
                                <button onClick={()=>handleMessage(item)}
                                    className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Message</button>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default ChatFriends