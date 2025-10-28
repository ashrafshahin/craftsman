import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';


const Home = () => {
  const data = useSelector(state => (state.userDetails.value))
  console.log(data);
  
  const [verify, setVerify] = useState(false)
  
  // const [loading, setLoading] = useState(false)
  
  // const navigate = useNavigate()

  useEffect(() => {
    // setLoading(true)
    if (data.emailVerified) {
      setVerify(true)
      // setTimeout(() => {
      //   navigate("/")
      // },)

      
    } 
    // setLoading(false)
  },[])



  return (
    <div>
      
      {verify ? <h1>Home</h1> : <p>Please verify your email</p>}

    </div>
  )
}

export default Home