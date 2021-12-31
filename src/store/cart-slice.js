
import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {
    items:[], 
    totalQuantity:0, 
    totalAmount:0
};

const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        addItemToCart:(state, action)=>{
            const newItem = action.payload
            const existingItem = state.items.find(item=> item.id === newItem.id);
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price*1
                })
            }else{
                const existingItemIndex = state.items.findIndex(item=> item.id === newItem.id);
                state.items[existingItemIndex].quantity++;
                state.items[existingItemIndex].totalPrice =  state.items[existingItemIndex].quantity * state.items[existingItemIndex].price;
            }
        },
        removeItemFromCart:(state, action)=>{
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex(item=> item.id === newItem.id);
            if(state.items[existingItemIndex].quantity){
            state.items[existingItemIndex].quantity--;
            state.items[existingItemIndex].totalPrice =  state.items[existingItemIndex].quantity * state.items[existingItemIndex].price;
            }else{
                state.items.splice(existingItemIndex, 1);
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;
