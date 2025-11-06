import { createSlice } from "@reduxjs/toolkit";

/*
    1. createSlice() generates an obj & returns keys:
        1. name         - the name of slice
        2. actions      - the actions created
        3. reducer      - the combined reducers
    2. Hence we export 'reducer' not 'reducers' and 'actions'
*/
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state, action) => {
            state.items.length = 0
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer