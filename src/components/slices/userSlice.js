import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userInfo: (state, action) => {
            console.log(state);
            console.log(action);
            
            
        },
    },

});

export const { userInfo } = userSlice.actions;

export default userSlice.reducer;