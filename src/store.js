import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/CartSlice";
import ModalSlice from "./features/Modal/ModalSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        modal: ModalSlice,
    },
})