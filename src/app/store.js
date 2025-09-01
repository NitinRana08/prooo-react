import { configureStore } from "@reduxjs/toolkit";
import countertReducer from "../features/counter/counterSlice"

export const store = configureStore(
    {
        reducer:{
            counter: countertReducer
        }
    }
)
