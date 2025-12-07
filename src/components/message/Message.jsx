import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import FriendRequest from '../../components/friendRequest/FriendRequest'
import Friends from '../../components/friends/Friends'
import Userlist from '../../components/userList/Userlist'
import BlockedUsers from '../../components/blockedUsers/BlockedUsers'
import GroupList from '../../components/groupList/Grouplist'
import MyGroups from '../../components/myGroups/MyGroups'
import ChatBox from '../../components/chatBox/ChatBox'
import ChatFriends from '../chatBox/ChatFriends'

const Message = () => {
    return (
        <div>
            <div className='md:flex justify-between my-10 m-5 '>
                <div className=' '>
                    <Sidebar active="message" />
                </div>
                <div className='md:flex justify-between mx-auto'>
                    
                    <div className='mx-2'>
                        <ChatBox />
                    </div>
                    <div className='mx-2'>
                        <ChatFriends />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Message