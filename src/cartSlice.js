import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cartSlice",
    initialState:{
        cart:[],
    },
    reducers:{
        add:(state,action)=>{state.cart=[...state.cart,action.payload]},
        sub:(state,action)=>{
            state.cart=state.cart.filter((cart)=>cart.id!==action.payload)
        }  
    },
})
export const {add,sub}=cartSlice.actions
export default cartSlice.reducer