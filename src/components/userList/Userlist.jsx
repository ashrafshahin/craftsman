import React, { useEffect, useState } from 'react'
import friends from "../images/friends.png"
import { HiDotsVertical } from "react-icons/hi";
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';

const Userlist = () => {

    const auth = getAuth()
    const data = useSelector((selector) => selector.userDetails.value)

    const db = getDatabase()
    const [userList, setUserList] = useState([])
    const [friendRequestList, setFriendRequestList] = useState([])
    const [friendList, setFriendList] = useState([])
    const [blockList, setBlockList] = useState([])
    const [filterUserList, setFilterUserList] = useState([])

    // ✅ Fix 1: Re-run when data.uid is available
    useEffect(() => {
        if (!data?.uid) return;  // ✅ Don't run until user is loaded
        const userRef = ref(db, "users/")
        onValue(userRef, (snapshot) => {
            const arr = []
            snapshot.forEach((item) => {
                if (data?.uid !== item.key) {
                    arr.push({ ...item.val(), userId: item.key })
                }
            })
            setUserList(arr)
        })
    }, [data?.uid])  // ✅ Fix 2: depend on uid

    useEffect(() => {
        const friendRequestListRef = ref(db, "friendRequest/")
        onValue(friendRequestListRef, (snapshot) => {
            const arr = []
            snapshot.forEach((item) => {
                arr.push(item?.val().receiverID + item?.val().senderID)
            });
            setFriendRequestList(arr);
        });
    }, [])

    useEffect(() => {
        const friendRef = ref(db, "friend/")
        onValue(friendRef, (snapshot) => {
            const arr = []
            snapshot.forEach((item) => {
                arr.push(item?.val().receiverID + item?.val().senderID)
            });
            setFriendList(arr);
        })
    }, [])

    useEffect(() => {
        const blockRef = ref(db, "blockUsers/")
        onValue(blockRef, (snapshot) => {
            const arr = []
            snapshot.forEach((item) => {
                arr.push(item?.val().receiverID + item?.val().senderID)
            });
            setBlockList(arr);
        })
    }, [])

    const handleFriendRequest = (item) => {
        set(push(ref(db, 'friendRequest/')), {
            senderName: data?.displayName,
            senderID: data?.uid,
            receiverName: item.username,
            receiverID: item.userId
        });
    }

    const handleSearch = (e) => {
        if (e.target.value.length === 0) {
            setFilterUserList([])
        } else {
            const arr = userList.filter((item) =>
                item.username.toLowerCase().includes(e.target.value.toLowerCase())
            )
            setFilterUserList(arr)
        }
    }

    // ✅ Fix 3: Guard against null data before rendering
    if (!data?.uid) return <div className="p-4 text-gray-500">Loading users...</div>;

    // ✅ Helper to avoid repeating button logic
    const renderActionButton = (item) => {
        const myId = data?.uid
        const theirId = item?.userId

        if (blockList.includes(myId + theirId) || blockList.includes(theirId + myId)) {
            return <button className='bg-primary py-1 px-3 rounded-lg text-white text-xl'>Blocked</button>
        }
        if (friendList.includes(myId + theirId) || friendList.includes(theirId + myId)) {
            return <button className='bg-primary py-1 px-3 rounded-lg text-white text-xl'>Friend</button>
        }
        if (friendRequestList.includes(myId + theirId) || friendRequestList.includes(theirId + myId)) {
            return <button className='bg-primary py-1 px-3 rounded-lg text-white text-xl'>Request Sent</button>
        }
        return (
            <button onClick={() => handleFriendRequest(item)}
                className='bg-primary py-1 px-3 rounded-lg text-white text-xl'>
                Add Friend
            </button>
        )
    }

    const listToShow = filterUserList.length > 0 ? filterUserList : userList

    return (
        <div>
            <div className='rounded-xl px-5 py-3 font-primary shadow shadow-black/40 mb-10'>
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='font-semibold text-lg text-blue-800 mr-[150px]'>User List</h2>
                    <HiDotsVertical className='font-semibold text-xl' />
                </div>

                <div className='border-gray-800 border-3 rounded-lg my-2 cursor-pointer'>
                    <input onChange={handleSearch}
                        type="text"
                        placeholder='🔍 Search here...'
                        className='w-full py-2 border-none pl-4'
                    />
                </div>

                {filterUserList.length === 0 && listToShow.length === 0 && (
                    <p className='text-red-600'>No Matches found...</p>
                )}

                <div className='h-[400px] overflow-y-scroll custom-scrollbar pr-1'>
                    {/* ✅ Fix 4: key prop added, shared renderActionButton used */}
                    {listToShow.map((item) => (
                        <div key={item.userId}
                            className='flex justify-between items-center mt-4 border-b-2 border-b-black/25'>
                            <img className='pr-2 mb-3' src={friends} alt="" />
                            <div className='pr-12'>
                                <p className='font-semibold text-lg'>{item?.username}</p>
                                <p className='font-medium text-sm text-[rgba(77,77,77,0.75)]'>{item?.email}</p>
                            </div>
                            {renderActionButton(item)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Userlist