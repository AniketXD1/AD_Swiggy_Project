import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanialla(older) Redux => DON"T MUTATE STATE , returing was mandatory
      /**
       const newState = [...state];
       newState.items.push(action.payload);
       return newState;--> this how we do in older version 
       */
      // mutating the state here
      // Redux Toolkit uses immer BTS
      // We  have to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // RTK - either mutate the existing state or return a new state
      state.items.length = 0; // [] empty array
      //return{items : []}; this new object will be  replaced inside originalState{items : []}
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
