import { combineReducers } from "@reduxjs/toolkit";
import { CartSlice } from "./features/cart";

const rootReducer = combineReducers({
    cart: CartSlice.reducer,
});

export default rootReducer;