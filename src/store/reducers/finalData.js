import {createSlice} from '@reduxjs/toolkit'

const FinalData = createSlice({
    name: 'final',
    initialState: {
        final: false,
        data: [],
        patientData:[]
    },
    reducers: {
        pushElements: (state,action) =>{
            state.final = true
            state.data = action.payload.credential
            console.log(state.data)
        },
        clearedCashes: (state,action) => {
            state.final = false
            state.data = []
        },
        validation: (state,action) =>{
            state.patientData = action.payload.credential
            console.log(state.patientData)
        }
    }
})

export const {pushElements, clearedCashes, validation} = FinalData.actions;
export default FinalData;