import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null,

    
 }

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userDetails: (state, action) => {
            console.log(state.value, 'before')
            console.log(action.payload, 'Payload')
            
            state.value = action.payload
            
            console.log(state.value, 'after');
            
            
            
            
          
        },
    },

});

export const { userDetails } = userSlice.actions;

export default userSlice.reducer;