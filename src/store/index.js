import { configureStore } from '@reduxjs/toolkit'
import toolkitSlice from './toolkitSlice'


export const store = configureStore({
    reducer: {
        toolkit: toolkitSlice,
    }
})