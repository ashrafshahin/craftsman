import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // ✅ Safe parse - if null or invalid, default to null
    value: (() => {
        try {
            const stored = localStorage.getItem('activeChatInfo')
            const parsed = stored ? JSON.parse(stored) : null
            // ✅ Make sure it's a valid object, not the string "null"
            return parsed && typeof parsed === 'object' ? parsed : null
        } catch {
            return null
        }
    })(),
}

// const initialState = {
//     // login e je ase UID thakbe, refresh dele data chole jabe na dec-07
//     value: localStorage.getItem('activeChatInfo') ? JSON.parse(localStorage.getItem('activeChatInfo')) : null,

// }
console.log(initialState);


export const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
        activeInfo: (state, action) => {
            console.log(state.value, 'before')
            console.log(action.payload, 'Payload')
            
            // data dispatch to redux e jabe dec-07
            state.value = action.payload

            console.log(state.value, 'after');

        },
    },

});

export const { activeInfo } = activeSlice.actions;

export default activeSlice.reducer;