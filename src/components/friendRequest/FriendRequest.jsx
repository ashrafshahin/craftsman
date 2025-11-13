import React, { useEffect, useEffectEvent, useState } from 'react'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";

// database setup
import { getDatabase, onValue, ref } from 'firebase/database';

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
    const [friendRequestList, setFriendRequestList] = useState([])
    useEffect(() => {
        const FriendResuestRef = ref(db, "friendRequest/")
        onValue(FriendResuestRef, (snapshot) => {
            const arr = []
            snapshot.forEach((item) => {
                if (data?.uid == item?.val().receiverID) {
                    arr.push(item.val()); 
                }
                
            });
            // sob data aikhane chole asche...
            setFriendRequestList(arr);
        
        });

    }, [])
    console.log(friendRequestList);
    
    
    return (
      <div>
          <div className='rounded-xl px-5 py-3 font-primary shadow shadow-black/40 scrollbar-thin  '>
              <div className='flex justify-between items-center pb-3 '>
                  <h2 className='font-semibold text-lg  '>Friend Request</h2>
                  <HiDotsVertical className='font-semibold text-xl' />
                  
              </div>
              <div className='h-[400px] overflow-y-scroll custom-scrollbar pr-1 '>
                    {
                        friendRequestList.map((item) => (
                            <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25   '>
                                <img className='pr-2 mb-3' src={friends} alt="" />
                                <div className='pr-12'>
                                    <p className='font-semibold text-lg'>{ item?.senderName }</p>
                                    <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                                </div>

                                <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Accept</button>

                            </div>
                        ))
                  }
                    
                  {/* <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                        <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Accept</button>
                  </div>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Accept</button>
                  </div>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Accept</button>
                  </div>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Accept</button>
                  </div>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Accept</button>
                  </div>
                  <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                      <img className='pr-3 mb-4' src={friends} alt="" />
                      <div className='pr-12'>
                          <p className='font-semibold text-lg'>Ashraf Shahin</p>
                          <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>Hi Guys, Wassup!</p>
                      </div>
                      <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>Accept</button>
                  </div> */}
              </div>
          </div>
    </div>
  )
}

export default FriendRequest