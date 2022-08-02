import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { IProject, IState } from "../../models/models";
import { deleteProject, fetchProject, postProject } from "./progectActions"


const initialState: IState = {
    isLoading:false,
    error:'',
    project:[]

}

export const ProjectSlice = createSlice({
    name:'project',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchProject.fulfilled.type] : (state,action :PayloadAction<IProject[]> ) => {
            state.isLoading = false;
            state.error = '';
            state.project = action.payload.reverse()
        },
        [fetchProject.pending.type] : (state) => {
            state.isLoading = true;
          
        },
        [fetchProject.rejected.type] : (state,action : PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
           
        },
        [deleteProject.fulfilled.type] : (state,action :PayloadAction<IProject>) => {
            state.isLoading = false;
            state.error ='';
           state.project = state.project.filter(el=>el.id !== action.payload.id)
        },
        [deleteProject.pending.type] : (state) => {
            state.isLoading = true;
          
        },
        [deleteProject.rejected.type] : (state,action : PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
           
        },
        [postProject.fulfilled.type] : (state,action :PayloadAction<IProject>) => {
            state.isLoading = false;
            state.error ='';
           state.project.push(action.payload)
        },
        [postProject.pending.type] : (state) => {
            state.isLoading = true;
          
        },
        [postProject.rejected.type] : (state,action : PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
           
        },
    }
})
export default ProjectSlice.reducer
