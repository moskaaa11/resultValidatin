import {createSlice} from '@reduxjs/toolkit'

const MainSlice = createSlice({
    name: 'main',
    initialState: {
        drop: false,
        data: []
    },
    reducers: {
        pushElements: (state,action) =>{
            state.drop = true
            state.data.push(action.payload.credential)
        },
        clearCash: (state,action) => {
            state.drop = false
            state.data = []
        }
    }
})

export const {pushElements, clearCash} = MainSlice.actions;
export default MainSlice;