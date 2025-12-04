import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import FriendRequest from '../friendRequest/FriendRequest'
import Friends from '../friends/Friends'
import Userlist from '../userList/Userlist'
import BlockedUsers from '../blockedUsers/BlockedUsers'
import GroupList from '../groupList/Grouplist'
import MyGroups from '../myGroups/MyGroups'
import ChatBox from '../chatBox/ChatBox'

const Message = () => {
    return (
        <div>
            <div className='md:flex justify-between my-10 m-5 '>
                <div className=' '>
                    <Sidebar active="message" />
                </div>
                <div className='md:flex justify-between mx-auto'>
                    <div className='mx-2'>
                        <Friends />

                    </div>
                    <div className='mx-2'>
                        <ChatBox />

                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Message