import { ProductProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface StoreState {
    productData: ProductProps[];
  }
const initialState : StoreState  = {
    productData: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state?.productData.find(
                (item :ProductProps) => item?.id === action?.payload?.id
            );
            if (existingProduct) {
                existingProduct.qty += action.payload.qty;
                toast.success(`The amount of this product increased}`)
            } else {
                state.productData.push(action.payload);
                toast.success(`{${action.payload.title}... added to cart}`);

            }
        },
        increaseQty: (state, action) => {
            const existingProduct = state?.productData.find(
                (item : ProductProps) => item?.id === action?.payload?.id

            );
            if(existingProduct){
                existingProduct.qty ++
            }
        },
        decreaseQty: (state, action) => {
            const existingProduct = state?.productData.find(
                (item :ProductProps) => item?.id === action?.payload?.id
            );
            if (existingProduct && existingProduct.qty === 1) {  
                existingProduct.qty = 1 ;
            } else if (existingProduct && existingProduct.qty > 0) {  
                existingProduct.qty--;  
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