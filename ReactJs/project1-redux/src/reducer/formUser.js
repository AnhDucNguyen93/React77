import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const api = 'https://64e5ff9b09e64530d17f69b9.mockapi.io/userInfo'

export const editAddUser = createSlice({
    name: 'editAddUser',
    initialState: {
        id: '',
        name: '',
        age: '',
        address: '',
        info: '',
    },
    reducers: {
        pushUser: (state, action) => {
            // console.log(action);
            state.id = action.payload;
            const detailUser = axios
                .get(api + `/${state.id}`)
                .then((res) => {
                    state.name = res.data.name;
                    state.age = res.data.age;
                    state.address = res.data.address;
                    state.info = res.data.info;
                })
                .catch((err) => console.log(err, 'Lỗi rồi'))
        }
    }
})
export const { pushUser } = editAddUser.actions;
export default editAddUser.reducer;