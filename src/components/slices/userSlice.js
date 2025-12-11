import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null,

}
 console.log(initialState);
 

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userDetails: (state, action) => {
            state.value = action.payload  
        },
        // user name or information update korar jonno... dec-10
        userNameUpdate: (state, action) => {
            if (state.value && state.value.user) {
                state.value.user.displayName = action.payload
            }
            // we can keep localstorage work here too-make sure your variables are correct... december-11
            const updateProfileName = { ...state.value }
            localStorage.setItem('userDetails', JSON.stringify(updateProfileName))
        }
    },

});

export const { userDetails, userNameUpdate } = userSlice.actions;

export default userSlice.reducer;