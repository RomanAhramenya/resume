import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { ISkills, IStateSkills } from "../../models/models";
import { deleteSkill, fetchSkills, postSkill } from "./skillsActions";


const initialState: IStateSkills = {
    isLoading:false,
    error:'',
    skills:[]

}

export const ProjectSlice = createSlice({
    name:'project',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchSkills.fulfilled.type] : (state,action :PayloadAction<ISkills[]> ) => {
            state.isLoading = false;
            state.error = '';
            state.skills = action.payload
        },
        [fetchSkills.pending.type] : (state) => {
            state.isLoading = true;
          
        },
        [fetchSkills.rejected.type] : (state,action : PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
           
        },
        [deleteSkill.fulfilled.type] : (state,action :PayloadAction<ISkills>) => {
            state.isLoading = false;
            state.error ='';
           state.skills = state.skills.filter(el=>el.id !== action.payload.id)
        },
        [deleteSkill.pending.type] : (state) => {
            state.isLoading = true;
          
        },
        [deleteSkill.rejected.type] : (state,action : PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
           
        },
        [postSkill.fulfilled.type] : (state,action :PayloadAction<ISkills>) => {
            state.isLoading = false;
            state.error ='';
           state.skills.push(action.payload)
        },
        [postSkill.pending.type] : (state) => {
            state.isLoading = true;
          
        },
        [postSkill.rejected.type] : (state,action : PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
           
        },
    }
})
export default ProjectSlice.reducer