import {createSlice} from '@reduxjs/toolkit'

const Print = createSlice({
    name: 'print',
    initialState: {
        print: false,
        data: [],
    },
    reducers: {
        setValidation: (state) =>{
            state.print = true
        },
        endValidation: (state) =>{
            state.print = false
            state.data = []
        },
        pushElements: (state,action) =>{
            state.data = action.payload.credential
            console.log(state.data)
        }
    }
})

export const {pushElements, setValidation, endValidation} = Print.actions;
export default Print;