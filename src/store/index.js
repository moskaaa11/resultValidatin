import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./reducers/mainSlice";
import ValidatedData from "./reducers/validatedData";


const store = configureStore({
    reducer: {
        main: MainSlice.reducer,
        validatedData: ValidatedData.reducer
    }
})

export default store;