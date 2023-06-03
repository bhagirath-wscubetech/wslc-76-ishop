import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../Features/CartReducer'
export const store = configureStore({
  reducer: {
    cart: CartReducer
  },
})