import { configureStore } from '@reduxjs/toolkit'
import { userDetails } from './slices/userSlice'

// here userSlice is an OBJECT so NO {} BRACKETS
import userSlice from './slices/userSlice'

export const store = configureStore({
    reducer: {
        userDetails: userSlice
    }
    
})