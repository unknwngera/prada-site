import { createSlice } from "@reduxjs/toolkit"


const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        value: 0,
    },
    reducers: {
        increment(state) {
            state.value = state.value + 1
        },
        decrement(state) {
            state.value = state.value - 1
        }
    }
})

export default toolkitSlice.reducer
export const { increment, decrement } = toolkitSlice.actions