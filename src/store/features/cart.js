import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    promoCodes: [],
    paymentMethod: "cash",
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items?.push(action.payload);
        },
        updateProductInCart: (
            state,
            action
        ) => {
            const foundProduct = state.items.find(
                (item) => item.product._id === action.payload.id
            );
            const foundProductIndex = state.items.findIndex(
                (item) => item.product._id === action.payload.id
            );
            if (foundProduct) {
                state.items.splice(foundProductIndex, 1, {
                    ...foundProduct,
                    quantity: action.payload.quantity,
                });
            }
        },
        removeFromCart: (state, action) => {
            state.items?.splice(action.payload.index, 1);
        },
        removeCart: (state) => {
            state.items = [];
        },
        addPromoCodes: (state, action) => {
            state.promoCodes = action.payload;
        },
        setPaymentMethod: (
            state,
            action
        ) => {
            state.paymentMethod = action.payload.method;
        },
    },
});

export default CartSlice.reducer;
export const {
    addToCart,
    removeFromCart,
    removeCart,
    setPaymentMethod,
    addPromoCodes,
    updateProductInCart,
} = CartSlice.actions;

const items = (state) => state.cart.items;

export const totalPriceSelector = createSelector([items], (items) => {
    const total = items.reduce(
        (total, curr) => (total += curr.totalPricePerItem),
        0
    );
    return total;
});