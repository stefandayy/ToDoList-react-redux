import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './tasksSlice'

// 2 configure store che viene collegato allo slice

export default configureStore({
    reducer:{
        tasks:taskReducer,
    }
});