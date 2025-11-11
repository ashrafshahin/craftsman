import React, { useEffect, useState } from 'react'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";

// database setup
import { getDatabase, onValue, ref, set } from 'firebase/database';

//Get data from Redux
import { useSelector } from 'react-redux';

import { getAuth } from 'firebase/auth';






const Userlist = () => {
    
    const auth = getAuth()
    const user = auth.currentUser

    //Get data from Redux
    const data = useSelector((selector) => (selector.userDetails.value))
    console.log(data?.uid, data?.email, "login info check...");

    const db = getDatabase()

    // this is array, single objects ase, as users...
    const [userList, setUserList] = useState([])

    // third-party api or kono database theke data Read korte
    //  useEffect() lagbe
    useEffect(() => {
        const userRef = ref(db, "users/")
        onValue(userRef, (snapshot) => {
            const arr = []
            // full snapshot of data nibo na only ITEM ta nibo
            snapshot.forEach((item) => {
                // item.key used to specify data and Not sign "!" to ignore loggedin user/person here... 
                if (data?.uid !== item.key) {
                    arr.push(item.val())
                }

            })
            // sob data userList e chole asche...
            setUserList(arr)

        })

    }, [])
    console.log(userList);

    const handleFriendRequest = (item, uid) => {
        console.log(item, "friend request information...");
        // database new parametre CREATE data collection work cls-10
        set(ref(db, 'friendRequest/' ), {
            senderName: data?.displayName,
            senderID: data?.uid,
            receiverName: item.username,
            // receiverID: item.email,

        });
        console.log(user.uid);
        console.log(item, uid);
        // experiment
        

    }

    return (
        <div>
            <div className='rounded-xl px-5 py-3 font-primary shadow shadow-black/40 mb-10 '>
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='font-semibold text-lg mr-[200px]  '>User List</h2>
                    <HiDotsVertical className='font-semibold text-xl' />

                </div>
                <div className='h-[400px] overflow-y-scroll custom-scrollbar pr-1 '>
                    {/* map kora hoise uporer userList Arrar sob data dynamically show korar jonno */}
                    {
                        userList.map((user) => (
                            <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                                <img className='pr-2 mb-3' src={friends} alt="" />
                                <div className='pr-12'>
                                    <p className='font-semibold text-lg'>{user.username}</p>
                                    <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>{user.email}</p>
                                </div>
                                <button onClick={() => handleFriendRequest(user)}
                                    className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>+</button>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Userlist