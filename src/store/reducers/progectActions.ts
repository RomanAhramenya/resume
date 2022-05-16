import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPostProject, IProject } from '../../models/models';

export const fetchProject = createAsyncThunk(
    'project/fetchProject',
    async(_,thunkApi) => {
        try {
            const response = await axios.get<IProject[]>('https://627f9d7abe1ccb0a46628d5c.mockapi.io/api/v1/project')

                return response.data
            
        } catch (error) {
            return thunkApi.rejectWithValue('Произошла ошибка')
        }
    }
)

export const deleteProject = createAsyncThunk(
    'project/deleteProject',
    async(id:string,thunkApi) => {
        try {
            const response = await axios.delete<IProject[]>(`https://627f9d7abe1ccb0a46628d5c.mockapi.io/api/v1/project/${id}`)
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue('Произошла ошибка')
        }
    }
)
export const postProject = createAsyncThunk(
    'project/postProject',
    async(data:IPostProject,thunkApi) => {
        try {
            const response = await axios.post<IProject[]>(`https://627f9d7abe1ccb0a46628d5c.mockapi.io/api/v1/project`,{name:data.name,url:data.url,image:data.image})
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue('Произошла ошибка')
        }
    }
)