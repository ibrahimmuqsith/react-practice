import { createSlice, current } from "@reduxjs/toolkit";

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
            /**
             * In Redux, Its prohibited to mutate the state.
             * create a temp & assign to the existing state & return it
             * In RTK, it is mandatory to mutate the state and no return needed.
             * BTS, RTK is using Immer.js to do that. 
             */

            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            /**
             * in rtk states, logging the state var will show a proxy Obj.
             * Hence we need to use a current() from rtk import to log the state
             * console.log(current(state))
             */
            state.items.pop()
        },
        clearCart: (state, action) => {
            /**
             * with state.items = [] will not work.
             * coz RTK expects us to mutate it
             */
            state.items.length = 0
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer