import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShoppingCart {
  productName: string;
  quantity: number;
  pricePerUnit: number;
  imgUrl: string;
}

const initialState: ShoppingCart[] = [];

const shoppingCartSlice = createSlice({
  name: 'shoppingCartItems',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ShoppingCart>) => [...state, action.payload],
    decreaseQuantity: (state, action: PayloadAction<string>) => (
      state.map((item) => {
        if (item.productName === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    ),
    increaseQuantity: (state, action: PayloadAction<string>) => (
      state.map((item) => {
        if (item.productName === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    ),
  },
});

const { addToCart, decreaseQuantity, increaseQuantity } = shoppingCartSlice.actions;

const shoppingCartSliceReducer = shoppingCartSlice.reducer;

export {
  addToCart, decreaseQuantity, increaseQuantity, shoppingCartSliceReducer,
};
export type { ShoppingCart };
