import { getAuth, onAuthStateChanged } from 'firebase/auth'

import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router'

import EmailVerifyPage from './EmailVerifyPage';
import Sidebar from '../sidebar/Sidebar';
import Grouplist from '../groupList/Grouplist';
import Friends from '../friends/Friends';
import Userlist from '../userList/Userlist';



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
  })

  // email verification part
  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true) 
    } else {
      
    }
    setLoading(false)
  })
  // email verified no more bounces to another page...
  if (loading) {
    return null
  }


  return (
    <div>
      
      {verify ?
        <div className='flex justify-between m-10 '>
          <div className=' '>
            <Sidebar />
          </div>
          <div>
            <Grouplist />
          
          </div>
          <div>
            <Friends />
            

          </div>
          <div>
            <Userlist />

          </div>
        </div>
        :
        <EmailVerifyPage />
  
        }
    </div>
  )
}

export default Home