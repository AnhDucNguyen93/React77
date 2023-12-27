import { configureStore as Store } from "@reduxjs/toolkit";
import editAddUser from "../reducer/formUser";
import getDataUser from '../reducer/getDataUser';

export default Store({
    reducer: {
        editAddUser,
        getDataUser,
    }
})