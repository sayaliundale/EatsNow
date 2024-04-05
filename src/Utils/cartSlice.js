import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem: (state, action) => {
        state.items.push({ ...action.payload, quantity: 1 });
      },

    removeItem: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },

    setItems: (state, action) => {
      state.items = action.payload;
    },

    incrementQuantity: (state, action) => {
      const itemIndex = action.payload;
      if (itemIndex >= 0 && itemIndex < state.items.length) {
        state.items[itemIndex].quantity += 1;
      }
    },
    
    decrementQuantity: (state, action) => {
      const itemIndex = action.payload;
      if (itemIndex >= 0 && itemIndex < state.items.length) {
        const currentItem = state.items[itemIndex];
        if (currentItem.quantity > 1) {
          currentItem.quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },

  },
});

export const { addItem, setItems, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;

