import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";


const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearItem: (state) => {
            return { cartItems: [], amount: 0, total: 0 }
            // state.cartItems = [];
            // state.amount = 0;
            // state.total = 0;
        },
        clearEachItem: (state, action) => {
            // console.log(action);
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount - 1;
        },
        calculateState: (state) => {
            let calcAmount = 0;
            let calcTotal = 0;
            state.cartItems.forEach((item) => {
                calcAmount += item.amount;
                calcTotal += item.price * item.amount;
            });
            state.amount = calcAmount;
            state.total = calcTotal;
        },

    },
})

export const { clearItem, clearEachItem, increase, decrease, calculateState } = cartSlice.actions;

export default cartSlice.reducer;