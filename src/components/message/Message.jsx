import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import FriendRequest from '../friendRequest/FriendRequest'
import Friends from '../friends/Friends'
import Userlist from '../userList/Userlist'
import BlockedUsers from '../blockedUsers/BlockedUsers'
import GroupList from '../groupList/Grouplist'
import MyGroups from '../myGroups/MyGroups'

const Message = () => {
    return (
        <div>
            <div className='flex justify-between my-10 m-5 '>
                <div className=' '>
                    <Sidebar active="message" />
                </div>
                <div className='mx-2'>
                    section1

                </div>
                <div className='mx-2'>
                    section2

                </div>
                <div className='mx-2'>
                    section3
                </div>
            </div>
        </div>
    )
}

export default Message