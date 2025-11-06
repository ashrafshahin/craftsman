import React, { useEffect, useState } from 'react'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";
import { getDatabase, onValue, ref } from 'firebase/database';


const Userlist = () => {
    const db = getDatabase()
    const [userList, setUserList] = useState([])

    // third-party api or kono database theke data Read korte
    //  useEffect() lagbe
    useEffect(() => {
        const userRef = ref(db, "users/")
        onValue(userRef, (snapshot) => {
            const arr = []
            // console.log(snapshot.val(), 'ldbdjbbgb');
            // const data = snapshot.val(); // full data snapshot asbe
            // full snapshot of data nibo na only ITEM ta nibo
            snapshot.forEach((item) => {
                arr.push(item.val())
            })
            // console.log(arr); // pore useState niye setUserList neya hoise
            setUserList(arr)

        })

    }, [])
    console.log(userList);
    

    return (
        <div>
            <div className='rounded-xl px-5 py-3 font-primary shadow shadow-black/40 mb-10 '>
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='font-semibold text-lg mr-[200px]  '>User List</h2>
                    <HiDotsVertical className='font-semibold text-xl' />

                </div>
                <div className='h-[400px] overflow-y-scroll custom-scrollbar pr-1 '>
                    {
                        userList.map((user) => (
                            <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                                <img className='pr-2 mb-3' src={friends} alt="" />
                                <div className='pr-12'>
                                    <p className='font-semibold text-lg'>{user.username}</p>
                                    <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>{ user.email }</p>
                                </div>
                                <button className='bg-primary py-1 px-5 rounded-lg text-white font-semibold text-xl'>+</button>
                            </div> 
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Userlist