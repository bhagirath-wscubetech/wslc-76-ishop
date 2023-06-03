import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
const lsCartData = localStorage.getItem('cart');

const initialState = {
    data: lsCartData !== null ? JSON.parse(lsCartData) : []
};

const addToCart = createAsyncThunk(
    "add-to-cart",
    async (data, { getState }) => {
        console.log('Hello')
        const currentState = getState();
        console.log(currentState);
        let cartData = [
            ...currentState.cart.data,
            { ...data, qty: 1 }
        ]
        console.log("cartdata", cartData);
        axios({
            method: "post",
            url: "http://localhost:5000/user/add-cart/6470bd7e6056bec64891b3d8",
            data: {
                cart: cartData
            }
        })
        return cartData;

    }
)

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // addToCart: (state, action) => {
        //     state.data = [
        //         ...state.data,
        //         { ...action.payload, qty: 1 }
        //     ]
        //     localStorage.setItem("cart", JSON.stringify(state.data));
        //     return state;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(
            addToCart.fulfilled,
            (state, action) => {
                console.log("payload", action.payload);
                state.data = action.payload
            }
        )
    }
})
// Action creators are generated for each case reducer function

export default cartSlice.reducer
export { addToCart }