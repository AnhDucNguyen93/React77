import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const api = 'https://64e5ff9b09e64530d17f69b9.mockapi.io/userInfo'

export const fecthDataUser = createAsyncThunk('fetch', async () => {
    const data = await fetch(api);
    // console.log('data nha', data);
    return data.json();
})

export const deleteUser = createAsyncThunk('delete', async (id) => {
    const deleteById = await axios.delete(api + `/${id}`)
    console.log(deleteById, 'đã xóa');
    return;
})

export const getDataUser = createSlice({
    name: 'getDataUser',
    initialState: {
        dataUser: [],
    },
    reducers: {
        callApi: (state, action) => {

        },
    },
    extraReducers: (build) => {
        build.addCase(fecthDataUser.fulfilled, (state, action) => {
            // console.log('data day', action.payload);
            state.dataUser = action.payload;
        }),
            build.addCase(deleteUser.fulfilled, (state, action) => {
                state.dataUser = action.payload;
            })
    }
})

export const { callApi } = getDataUser.actions;

export default getDataUser.reducer;