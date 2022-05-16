import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./reducers/projectSlice";
import skillsSlice from "./reducers/skillsSlice";

export const store = configureStore({
    reducer:{
        project:projectSlice,
        skills:skillsSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch