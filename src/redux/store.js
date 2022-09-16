import { configureStore } from '@reduxjs/toolkit'
import productData from './productData/productDataReducer'

export default configureStore({
    reducer: {
        productData: productData,
    },
})