import { configureStores } from '@reduxjs/toolkit'

const Store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
}) 

export default Store;