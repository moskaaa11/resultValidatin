import {createSlice} from '@reduxjs/toolkit'

const ValidatedData = createSlice({
    name: 'validated',
    initialState: {
        validated: false,
        data: []
    },
    reducers: {
        pushElements: (state,action) =>{
            state.validated = true
            state.data = action.payload.credential
        },
        clearCashes: (state,action) => {
            state.validated = false
            state.data = []
        }
    }
})

export const {pushElements, clearCashes} = ValidatedData.actions;
export default ValidatedData;