import { configureStore } from '@reduxjs/toolkit'
import { userInfo } from './slices/userSlice'

// here userSlice is an OBJECT so NO {} BRACKETS
import userSlice from './slices/userSlice'

export const store = configureStore({
    reducer: {
        userInfo: userSlice
    }
    
})