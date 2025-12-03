import React, { useEffect, useState } from 'react'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";

import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';

import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';


const Friends = () => {
    const auth = getAuth()

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
                if (data.uid == item.val().receiverID || data.uid == item.val().senderID) {
                    arr.push({...item?.val(), removalId: item.key})  
                }        
                
                        
            });
            // sob data aikhane chole asche...
            setFriendList(arr);
        })

    }, [])
    console.log(friendList, "friend request Accept information");
    
    const handleBlock = (item) => {
                
                // collection create korlam in Database 
                set(push(ref(db, "blockUsers")), {
                    receiverName: item.receiverName,
                    receiverID: item.receiverID,
                    senderName: item.senderName,
                    senderID: item.senderID,
                    
                }).then(() => {
                    remove(ref(db, 'friend/' + item.removalId))
                    
                })
        }
        
    return (
        <div>
            <div className='rounded-xl px-5 py-3 font-primary shadow shadow-black/40 mb-10'>
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='font-semibold text-lg mr-[200px]  '>Friends</h2>
                    <HiDotsVertical className='font-semibold text-xl' />

                </div>
                <div className='h-[400px] overflow-y-scroll custom-scrollbar pr-1'>
                    {
                        friendList.map((item) => (
                            <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                                <img className='pr-2 mb-3' src={friends} alt="" />
                                <div className='pr-12'>
                                    <p className='font-semibold text-lg'>
                                        {/* data.uid mane je login ase, o receiver or sender hole akta hobe */}
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
                                <button onClick={() => handleBlock(item)}
                                    className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Block</button>
                            </div> 
                        ))
                    }
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Friends