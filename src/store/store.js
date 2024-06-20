import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice"
import passwordReducer from "../slice/passwordSlice";

export const store = configureStore(
    {
        reducer:{
            user: userReducer,
            password: passwordReducer,
        }
    }
)