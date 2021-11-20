import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShoppingCart {
  productName: string;
  quantity: number;
  pricePerUnit: number;
}

const initialState: ShoppingCart[] = [];

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ShoppingCart>) => [...state, action.payload],
  },
});

const { addToCart } = shoppingCartSlice.actions;

const shoppingCartSliceReducer = shoppingCartSlice.reducer;

export { shoppingCartSlice, addToCart, shoppingCartSliceReducer };
export type { ShoppingCart };
