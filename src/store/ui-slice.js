
import {createSlice} from '@reduxjs/toolkit';

const initialUIState = {cartIsVisible:false};

const uiSlice = createSlice({
    name:'ui',
    initialState:initialUIState,
    reducers:{
        toggleCart:(state)=>{
            console.log('action.payload');
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;

