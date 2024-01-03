// create store save state
import { configureStore as Store } from "@reduxjs/toolkit";
import counterSlice from '../reducer/counterReducer'

export default Store({
    reducer: {
        counterSlice,
    }
});