
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  carts: [], 
  quantity: 0,
  count:0


};

const cartSystem = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    addCard: (state, action) => {
      
 
      const actionId = action.payload.id;
   
      
      const find = state.carts.findIndex((item) => item.id ===  actionId);
      if (find >= 0) {
        state.carts[find].quantity += 1;
      } else {
        const tempvar = { ...action.payload, quantity: 1 };
        state.carts.push(tempvar);
       
        
      }
     
    },

    removeCard:(state, action)=>{
      state.carts=state.carts.filter(item=>item.id!==action.payload)

    }
  },
});

export const { addCard, removeCard } = cartSystem.actions;
export default cartSystem.reducer;
