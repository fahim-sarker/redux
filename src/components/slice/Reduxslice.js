import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
     value: JSON.parse(localStorage.getItem("count")) ?JSON.parse(localStorage.getItem("count")) :0,
    },
    reducers: {
        increment: (state) => {
           let tumi= state.value += 1
           localStorage.setItem("count",JSON.stringify(tumi))

        },
        decrement: (state) => {
            if( state.value > 0){
               let ami= state.value -= 1
                localStorage.setItem("count",JSON.stringify(ami))
            }
               
        }

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer