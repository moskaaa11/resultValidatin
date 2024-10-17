import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./reducers/mainSlice";
import ValidatedData from "./reducers/validatedData";
import FinalData from "./reducers/finalData";
import Print from "./reducers/print";


const store = configureStore({
    reducer: {
        main: MainSlice.reducer,
        validatedData: ValidatedData.reducer,
        finalData: FinalData.reducer,
        print: Print.reducer
    }
})

export default store;