import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state?.productData.find(
                (item) => item?.id === action?.payload?.id
            );
            if (existingProduct) {
                existingProduct.qty += action.payload.qty;
            } else {
                state.productData.push(action.payload);
            }
        },
        increaseQty: (state, action) => {
            const existingProduct = state?.productData.find(
                (item) => item?.id === action?.payload?.id
            );
            existingProduct && existingProduct.qty++;
        },
        decreaseQty: (state, action) => {
            const existingProduct = state?.productData.find(
                (item) => item?.id === action?.payload?.id
            );
            if (existingProduct.qty === 1) {
                existingProduct.qty === 1;
            } else {
                existingProduct && existingProduct.qty--;
            }
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item?.id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        },
    },
});

export const { addToCart, resetCart, deleteProduct, decreaseQty, increaseQty } =
    cartSlice.actions;
export default cartSlice.reducer;
