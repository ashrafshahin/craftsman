import React, { useEffect, useEffectEvent, useState } from 'react'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";

// database setup
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';

//Get data from Redux
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';


const FriendRequest = () => {
    const auth = getAuth()
    const user = auth.currentUser
    
    //Get data from Redux
    const data = useSelector((selector) => (selector.userDetails.value))
    const db = getDatabase()

    // Retriving data for friendRequest section ...
    const [friendRequest, setFriendRequest] = useState([])
    useEffect(() => {
        const friendRequestRef = ref(db, "friendRequest/")
        onValue(friendRequestRef, (snapshot) => {
            const arr = []
            snapshot.forEach((item) => {
                if (data?.uid === item?.val()?.receiverID) {
                    arr.push({...item?.val(), removalId: item?.key}); 
                }
                
            });
            // sob data aikhane chole asche...
            setFriendRequest(arr);
        
        });

    }, [])
    console.log(friendRequest, 'Database information, sender + receiver');
    
    const handleFriend = (item) => {
        console.log(item);
        // collection create korlam in Database 
        set(push(ref(db, "friend")), {
            receiverName: item.receiverName,
            receiverID: item.receiverID,
            senderName: item.senderName,
            senderID: item.senderID,
        }).then(() => {
            remove(ref(db, 'friendRequest/' + item.removalId))
            
        })
    }
    
    
    
    return (
      <div>
          <div className='rounded-xl px-5 py-3 font-primary shadow shadow-black/40 scrollbar-thin  '>
              <div className='flex justify-between items-center pb-3 '>
                  <h2 className='font-semibold text-lg text-blue-800   '>Friend Request - receiver can see this</h2>
                  <HiDotsVertical className='font-semibold text-xl' />
                  
              </div>
              <div className='h-[400px] overflow-y-scroll custom-scrollbar pr-1 '>
                    {
                        friendRequest.map((item) => (
                            <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25   '>
                                <img className='pr-2 mb-3' src={friends} alt="" />
                                <div className='pr-12'>
                                    <p className='font-semibold text-lg'>{ item?.senderName }</p>
                                    <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                                </div>
                            
                                {/* Accept / Reject friend request  */}
                                
                                <button onClick={() => handleFriend(item)}
                                    className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Accept</button>

                            </div>
                        ))
                  }
                    
                  
              </div>
          </div>
    </div>
  )
}

export default FriendRequest