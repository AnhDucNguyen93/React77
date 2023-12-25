import { configureStore as Store } from "@reduxjs/toolkit";
import editAddUser from "../reducer/formUser"

export default Store({
    reducer: {
        editAddUser,
    }
})