import { configureStore } from '@reduxjs/toolkit'
import { userDetails } from './slices/userSlice'

// here userSlice is an OBJECT so NO {} BRACKETS
import userSlice from './slices/userSlice'
import  activeSlice  from './slices/activeSlice'

export const store = configureStore({
    reducer: {
        // user information passing 
        userDetails: userSlice,
        // message korar jonno dec-07
        activeChatInfo: activeSlice,
    }
    
})