import { createSlice } from "@reduxjs/toolkit";

export const formTailWin = createSlice({
    name: 'formTailWin',
    initialState: {
        name: 'Kids Jumpsuit',
        price: '$39.00',
        inStock: 'In stock',
        // size: { s: S, m: M, l: L, xl: XL },
    },
    reducers: {
        editPro: (state, name, price) => {
            state.name = name.payload;
            state.price = price.payload;
        }
    }
})

export const { editProduct } = formTailWin.actions;

export default formTailWin.reducer;