import React, { useEffect, useState } from 'react'

import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";

// database setup
import { getDatabase, onValue, push, ref, set } from 'firebase/database';

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
                    arr.push({...item.val(), userId: item.key })
                }

            })
            // sob data userList e chole asche...
            setUserList(arr)

        })

    }, [])
    console.log(userList);

    const handleFriendRequest = (item, uid) => {
        console.log(item, "friend request information (receiver info)...");
        // database new parametre CREATE data collection work cls-10
        set(push(ref(db, 'friendRequest/') ), {
            senderName: data?.displayName,
            senderID: data?.uid,
            receiverName: item.username,
            receiverID: item.userId
            
        });
     
    }
    
    // Retriving data for friendRequest section ... no Repeat data Reading.
    const [friendRequestList, setFriendRequestList] = useState([])
    useEffect(() => {
        const friendRequestListRef = ref(db, "friendRequest/")
        onValue(friendRequestListRef, (snapshot) => {
            const arr = []
            snapshot.forEach((item) => {
                // "One will happen 12 or 21 - uid get merged"
                arr.push(item?.val().receiverID + item?.val().senderID)

            });
            // sob data aikhane chole asche...
            setFriendRequestList(arr);

        });

    }, [])
    console.log(friendRequestList, "One will happen 12 or 21 - uid get merged");
    console.log(userList, "receiver info dekbo");

    // friend accept korle userList e friend data dekhe show-ar kaj korbe... reverse kaj kortese...
    const [friendList, setFriendList] = useState([])
        useEffect(() => {
            const friendRef = ref(db, "friend/")
            onValue(friendRef, (snapshot) => {
                const arr = []
                snapshot.forEach((item) => {
                    // "je kon akjon thakbe-  either 12 or 21 - uid get merged"
                    arr.push(item?.val().receiverID + item?.val().senderID)   
                });
                // sob data aikhane chole asche...
                setFriendList(arr);
            })
    
        }, [])
    
    // data read kore niye aslam...3rd condition block korse
    const [blockList, setBlockList] = useState([])
    useEffect(() => {
        const blockRef = ref(db, "blockUsers/")
        onValue(blockRef, (snapshot) => {
            const arr = []
            snapshot.forEach((item) => {
                // "je kon akjon thakbe-  either 12 or 21 - uid get merged"
                arr.push(item?.val().receiverID + item?.val().senderID)
            });
            // sob data aikhane chole asche...
            setBlockList(arr);
        })

    }, [])

    // Search Filter work- december-06...
    const [filterUserList, setFilterUserList] = useState([])

    const handleSearch = (e) => {
        const arr = [ ]
        if (e.target.value.length == 0) {
            setFilterUserList([])
        } else {
            userList.filter((item) => {
                if (item.username.toLowerCase().includes(e.target.value.toLowerCase())) {
                    arr.push(item)
                    setFilterUserList(arr)
                }
            })
        } 
    }
    console.log(filterUserList);
    

    return (
        <div>
            <div className='rounded-xl px-5 py-3 font-primary shadow shadow-black/40 mb-10 '>
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='font-semibold text-lg text-blue-800 mr-[150px]  '>User List - sender can see this</h2>
                    <HiDotsVertical className='font-semibold text-xl' />

                </div>

                {/* userList search filter setup */}
                <div className='border-gray-800 border-3 rounded-lg my-2 cursor-pointer '>
                    <input onChange={handleSearch}
                        type="text" placeholder='Search here...'
                        className='w-full py-2 border-none pl-4'
                    />
                </div>
                <div className='h-[400px] overflow-y-scroll custom-scrollbar pr-1 '>
                    {/* search filter here december-06 - same system just show here   */}
                    {
                        filterUserList.length > 0 ?
                            filterUserList.map((item) => (
                                <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                                    <img className='pr-2 mb-3' src={friends} alt="" />
                                    <div className='pr-12'>
                                        <p className='font-semibold text-lg'>{item?.username}</p>
                                        <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>{item?.email}</p>
                                    </div>
                                    {/* *update - 3rd condition - block korle userList e blocked hoye jabe, je block kora person unblock korte parbe... */}
                                    {

                                        blockList.includes(data?.uid + item?.userId) ||
                                            blockList.includes(item?.userId + data?.uid)

                                            ?
                                            <button
                                                className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'> Blocked </button>

                                            :

                                            friendList.includes(data?.uid + item?.userId) ||
                                                friendList.includes(item?.userId + data?.uid)

                                                ?
                                                <button
                                                    className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Friend</button>
                                                :
                                                friendRequestList.includes(data?.uid + item?.userId) ||
                                                    friendRequestList.includes(item?.userId + data?.uid)
                                                    ?
                                                    <button
                                                        className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Request Sent </button>
                                                    :
                                                    <button onClick={() => handleFriendRequest(item)}
                                                        className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'> Add Friend </button>

                                    }
                                    {/* update- friendList either 12 or 21 hoi, tahole Friend otherwise ':' agar moto add friend or request sent dekhabe */}
                                    {/* {
                                    friendList.includes(data?.uid + item?.userId) ||
                                        friendList.includes(item?.userId + data?.uid)
                                        
                                        ?
                                            <button
                                                className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Friend</button>
                                        :
                                        friendRequestList.includes(data?.uid + item?.userId) ||
                                            friendRequestList.includes(item?.userId + data?.uid)
                                            ?
                                            <button
                                                className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Request Sent </button>
                                            :
                                            <button onClick={() => handleFriendRequest(item)}
                                                className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'> Add Friend </button>
                                } */}
                                    {/* already condition written here for 'add friend' system */}

                                    {/* friend request sending system
                                {
                                    friendRequestList.includes(data?.uid + item?.userId) || 
                                    friendRequestList.includes(item?.userId + data?.uid)
                                        ?
                                        <button 
                                            className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Request Sent </button>  
                                        :
                                        <button onClick={() => handleFriendRequest(item)}
                                            className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Add Friend </button>

                                } */}

                                </div>
                            ))
                            :
                            userList.map((item) => (
                                <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
                                    <img className='pr-2 mb-3' src={friends} alt="" />
                                    <div className='pr-12'>
                                        <p className='font-semibold text-lg'>{item?.username}</p>
                                        <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>{item?.email}</p>
                                    </div>
                                    {/* *update - 3rd condition - block korle userList e blocked hoye jabe, je block kora person unblock korte parbe... */}
                                    {

                                        blockList.includes(data?.uid + item?.userId) ||
                                            blockList.includes(item?.userId + data?.uid)

                                            ?
                                            <button
                                                className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'> Blocked </button>

                                            :

                                            friendList.includes(data?.uid + item?.userId) ||
                                                friendList.includes(item?.userId + data?.uid)

                                                ?
                                                <button
                                                    className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Friend</button>
                                                :
                                                friendRequestList.includes(data?.uid + item?.userId) ||
                                                    friendRequestList.includes(item?.userId + data?.uid)
                                                    ?
                                                    <button
                                                        className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Request Sent </button>
                                                    :
                                                    <button onClick={() => handleFriendRequest(item)}
                                                        className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'> Add Friend </button>

                                    }
                                    {/* update- friendList either 12 or 21 hoi, tahole Friend otherwise ':' agar moto add friend or request sent dekhabe */}
                                    {/* {
                                    friendList.includes(data?.uid + item?.userId) ||
                                        friendList.includes(item?.userId + data?.uid)
                                        
                                        ?
                                            <button
                                                className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Friend</button>
                                        :
                                        friendRequestList.includes(data?.uid + item?.userId) ||
                                            friendRequestList.includes(item?.userId + data?.uid)
                                            ?
                                            <button
                                                className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Request Sent </button>
                                            :
                                            <button onClick={() => handleFriendRequest(item)}
                                                className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'> Add Friend </button>
                                } */}
                                    {/* already condition written here for 'add friend' system */}

                                    {/* friend request sending system
                                {
                                    friendRequestList.includes(data?.uid + item?.userId) || 
                                    friendRequestList.includes(item?.userId + data?.uid)
                                        ?
                                        <button 
                                            className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Request Sent </button>  
                                        :
                                        <button onClick={() => handleFriendRequest(item)}
                                            className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Add Friend </button>

                                } */}

                                </div>
                            ))
                    }
                    {/* map kora hoise uporer userList Arrar sob data dynamically show korar jonno */}
                    {
        //                 userList.map((item) => (
        //                     <div className='flex justify-between items-center mt-4 border-b-2 border-b-black/25  '>
        //                         <img className='pr-2 mb-3' src={friends} alt="" />
        //                         <div className='pr-12'>
        //                             <p className='font-semibold text-lg'>{item?.username}</p>
        //                             <p className='font-medium text-sm text-[rgba(77,77,77,0.75)] '>{item?.email}</p>
        //                         </div>
        //                         {/* *update - 3rd condition - block korle userList e blocked hoye jabe, je block kora person unblock korte parbe... */}
        //                         {
                                    
        //                                 blockList.includes(data?.uid + item?.userId) ||
        //                                     blockList.includes(item?.userId + data?.uid)

        //                                     ?
        //                                     <button
        //                                     className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'> Blocked </button>
                                        
        //                                 :
                                        
        //                                 friendList.includes(data?.uid + item?.userId) ||
        //                                     friendList.includes(item?.userId + data?.uid)

        //                                     ?
        //                                     <button
        //                                         className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Friend</button>
        //                                     :
        //                                     friendRequestList.includes(data?.uid + item?.userId) ||
        //                                         friendRequestList.includes(item?.userId + data?.uid)
        //                                         ?
        //                                         <button
        //                                             className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Request Sent </button>
        //                                         :
        //                                         <button onClick={() => handleFriendRequest(item)}
        //                                             className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'> Add Friend </button>

        //                         }
        //      {/* update- friendList either 12 or 21 hoi, tahole Friend otherwise ':' agar moto add friend or request sent dekhabe */}
        //                         {/* {
        //                             friendList.includes(data?.uid + item?.userId) ||
        //                                 friendList.includes(item?.userId + data?.uid)
                                        
        //                                 ?
        //                                     <button
        //                                         className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Friend</button>
        //                                 :
        //                                 friendRequestList.includes(data?.uid + item?.userId) ||
        //                                     friendRequestList.includes(item?.userId + data?.uid)
        //                                     ?
        //                                     <button
        //                                         className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Request Sent </button>
        //                                     :
        //                                     <button onClick={() => handleFriendRequest(item)}
        //                                         className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'> Add Friend </button>
        //                         } */}
        //  {/* already condition written here for 'add friend' system */}
                                
        //                         {/* friend request sending system
        //                         {
        //                             friendRequestList.includes(data?.uid + item?.userId) || 
        //                             friendRequestList.includes(item?.userId + data?.uid)
        //                                 ?
        //                                 <button 
        //                                     className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Request Sent </button>  
        //                                 :
        //                                 <button onClick={() => handleFriendRequest(item)}
        //                                     className='bg-primary py-1 px-3 rounded-lg text-white  text-xl'>Add Friend </button>

        //                         } */}
                                
        //                     </div>
        //                 ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Userlist