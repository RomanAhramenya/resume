import { IPostSkills, ISkills } from './../../models/models';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSkills = createAsyncThunk(
    'skills/fetchSkills',
    async(_,thunkApi) => {
        try {
            const response = await axios.get<ISkills[]>('https://627f9d7abe1ccb0a46628d5c.mockapi.io/api/v1/skills')

                return response.data
            
        } catch (error) {
            return thunkApi.rejectWithValue('Произошла ошибка')
        }
    })

    export const deleteSkill = createAsyncThunk(
        'skills/deleteSkills',
        async(id:string,thunkApi) => {
            try {
                const response = await axios.delete<ISkills[]>(`https://627f9d7abe1ccb0a46628d5c.mockapi.io/api/v1/skills/${id}`)
                return response.data
            } catch (error) {
                return thunkApi.rejectWithValue('Произошла ошибка')
            }
        }
    )
    export const postSkill = createAsyncThunk(
        'skills/postSkills',
        async(data:IPostSkills,thunkApi) => {
            try {
                const response = await axios.post<ISkills[]>(`https://627f9d7abe1ccb0a46628d5c.mockapi.io/api/v1/skills`,{name:data.name,image:data.image})
                return response.data
            } catch (error) {
                return thunkApi.rejectWithValue('Произошла ошибка')
            }
        }
    )