import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers: {
        addItem : (state,action) => {
           state.items.push(action.payload)
           console.log(" data sent to slice cart : ")
           console.log(action.payload)
        },
        removeItem: (state,action) => {
            const filtredData = state.items.filter((item) => item.id !== action.payload)
            state.items = filtredData
        },
        clearCart:(state)=>{
            state.items = []
        }
    }
})

export const { addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;