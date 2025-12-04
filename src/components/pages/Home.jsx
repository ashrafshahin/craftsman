import { getAuth, onAuthStateChanged } from 'firebase/auth'

import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router'

import EmailVerifyPage from './EmailVerifyPage';
import Sidebar from '../sidebar/Sidebar';
import Grouplist from '../groupList/Grouplist';
import Friends from '../friends/Friends';
import Userlist from '../userList/Userlist';
import FriendRequest from '../friendRequest/FriendRequest';
import MyGroups from '../myGroups/MyGroups';
import BlockedUsers from '../blockedUsers/BlockedUsers';
import GroupList from '../groupList/Grouplist';



const Home = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const data = useSelector(state => (state.userDetails.value))
  console.log(data);
  
  const [verify, setVerify] = useState(false)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (!data) {
      navigate("/login")
    }
  }, [])

  // email verification part
  onAuthStateChanged(auth, (user) => {
    if (user?.emailVerified) {
      setVerify(true) 
    } else {
      
    }
    setLoading(false)
  })
  // email verified no more bounces to another page...
  if (loading) {
    return " "
  }


  return (
    <div>
      
      {verify ?
        <div className='flex justify-between my-10 m-5 '>
          <div className=' '>
            {/* active props pass kortese 04 december */}
            <Sidebar active = "home" />
          </div>
          <div className='mx-2'>
            <GroupList />
            <FriendRequest />
          
          </div>
          <div className='mx-2'>
            <Friends />
            <MyGroups />
          
          </div>
          <div className='mx-2'>
            <Userlist />
            <BlockedUsers />
            
          </div>
        </div>
        :
        <EmailVerifyPage />
  
        }
    </div>
  )
}

export default Home