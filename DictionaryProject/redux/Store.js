import { configureStore } from "@reduxjs/toolkit";
import { dictionaryReducer } from "./Slice";


const Store = configureStore({
    reducer:{
        dictionary: dictionaryReducer
    }
})

export default Store;